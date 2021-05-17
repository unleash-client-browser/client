export const interval = <T>(fn: () => Promise<T>, delay: number) => {
  fn().then(() => {
    setTimeout(() => interval(fn, delay), delay);
  });
};
