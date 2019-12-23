import { properties } from './data';

export type Plugin = (context: number, content: string) => string | void;

export type Options<T> = {
  prefix: T | boolean;
};

export const createPlugin = <T>(
  options: Options<T> = { prefix: true },
): Plugin => {
  const plugin: Plugin = (context, content) => {
    // only run on a property declaration
    if (context === 1) {
      if (options.prefix) {
        const [key, value] = content.trim().split(':');
        const property = properties[key];
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
