const isTypedArray = (x) =>
    x instanceof Int8Array          ||
    x instanceof Uint8Array         ||
    x instanceof Uint8ClampedArray  ||
    x instanceof Int16Array         ||
    x instanceof Uint16Array        ||
    x instanceof Int32Array         ||
    x instanceof Uint32Array        ||
    x instanceof Float32Array       ||
    x instanceof Float64Array



export default isTypedArray
