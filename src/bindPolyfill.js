/**
 * url
 * @param fn
 * @param ctx
 * @param rest
 */
function bind(fn, ctx, ...rest) {
  return function (...args) {
    const symbol = Symbol(ctx);
    ctx[symbol] = fn;
    return ctx[symbol](...rest.concat(args));
  }
}

let basic = {
  'name': 'xyz',
};

function callMe(args) {
  console.log('Hi! my name is ' + this.name + args);
}

bind(callMe, basic)(999);
bind(callMe, basic, 123)();
