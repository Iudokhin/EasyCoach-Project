export function* nextColumn(series, callback, headers) {
    let indexMax = headers.length - 1;
    if (series === indexMax) {
      return;
    }
    // yield setSeries((prev) => prev + 1);
    yield callback((prev) => prev + 1);
  }

  export function* prevColumn(series, callback) {
    if (series === 2) {
      return;
    }
    // yield setSeries((prev) => prev - 1);
    yield callback((prev) => prev - 1);
  }

