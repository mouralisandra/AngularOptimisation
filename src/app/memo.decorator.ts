const memoCache = new Map<string, any>();

export function memo() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const cacheKey = `${key}-${JSON.stringify(args)}`;

      if (memoCache.has(cacheKey)) {
        return memoCache.get(cacheKey);
      }

      const result = originalMethod.apply(this, args);
      memoCache.set(cacheKey, result);
      return result;
    };

    return descriptor;
  };
}
