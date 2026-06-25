
// Type exports for consumers
// Add specific types as needed
/**
 * omit<T extends Record<string, any>, K extends keyof T>
 * @param obj
 * @param keys
 */
export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) delete result[key];
  return result as Omit<T, K>;
}
