import { properties } from './data';

type PropertyName = keyof typeof properties;

export type Plugin = (context: number, content: string) => string | void;

export const createPlugin = <T>(
  options: { prefix: T | boolean } = { prefix: true },
): Plugin => {
  const plugin: Plugin = (context, content) => {
    // only run on a property declaration
    if (context === 1) {
      if (options.prefix) {
        const [key, value] = content.trim().split(':');
        const property = properties[(key as unknown) as PropertyName];
        if (property) {
          return `${property}:${value};${content}`;
        }
      }

      // always fix the prefix
      return content.replace(/^-mso-/, 'mso-');
    }

    return content;
  };

  return plugin;
};

export default createPlugin({ prefix: true });
