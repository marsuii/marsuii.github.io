// .wrangler/tmp/pages-UsZy5m/functionsWorker-0.012730036790153498.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  "../.wrangler/tmp/bundle-y8JRSH/checked-fetch.js"() {
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});
var init_modules_watch_stub = __esm({
  "../node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});
var require_cookie = __commonJS({
  "../node_modules/cookie/index.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    exports.parse = parse2;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});
var require_warnings = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/warnings.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var alreadyWarned = {};
    function warnOnce(condition, message) {
      if (!condition && !alreadyWarned[message]) {
        alreadyWarned[message] = true;
        console.warn(message);
      }
    }
    exports.warnOnce = warnOnce;
  }
});
var require_cookies = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/cookies.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookie = require_cookie();
    var warnings = require_warnings();
    var createCookieFactory = ({
      sign,
      unsign
    }) => (name, cookieOptions = {}) => {
      let {
        secrets = [],
        ...options
      } = {
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      warnOnceAboutExpiresCookie(name, options.expires);
      return {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = cookie.parse(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return cookie.serialize(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    };
    var isCookie = (object) => {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    };
    async function encodeCookieValue(sign, value, secrets) {
      let encoded = encodeData(value);
      if (secrets.length > 0) {
        encoded = await sign(encoded, secrets[0]);
      }
      return encoded;
    }
    async function decodeCookieValue(unsign, value, secrets) {
      if (secrets.length > 0) {
        for (let secret of secrets) {
          let unsignedValue = await unsign(value, secret);
          if (unsignedValue !== false) {
            return decodeData(unsignedValue);
          }
        }
        return null;
      }
      return decodeData(value);
    }
    function encodeData(value) {
      return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
    }
    function decodeData(value) {
      try {
        return JSON.parse(decodeURIComponent(myEscape(atob(value))));
      } catch (error) {
        return {};
      }
    }
    function myEscape(value) {
      let str = value.toString();
      let result = "";
      let index = 0;
      let chr, code;
      while (index < str.length) {
        chr = str.charAt(index++);
        if (/[\w*+\-./@]/.exec(chr)) {
          result += chr;
        } else {
          code = chr.charCodeAt(0);
          if (code < 256) {
            result += "%" + hex(code, 2);
          } else {
            result += "%u" + hex(code, 4).toUpperCase();
          }
        }
      }
      return result;
    }
    function hex(code, length) {
      let result = code.toString(16);
      while (result.length < length)
        result = "0" + result;
      return result;
    }
    function myUnescape(value) {
      let str = value.toString();
      let result = "";
      let index = 0;
      let chr, part;
      while (index < str.length) {
        chr = str.charAt(index++);
        if (chr === "%") {
          if (str.charAt(index) === "u") {
            part = str.slice(index + 1, index + 5);
            if (/^[\da-f]{4}$/i.exec(part)) {
              result += String.fromCharCode(parseInt(part, 16));
              index += 5;
              continue;
            }
          } else {
            part = str.slice(index, index + 2);
            if (/^[\da-f]{2}$/i.exec(part)) {
              result += String.fromCharCode(parseInt(part, 16));
              index += 2;
              continue;
            }
          }
        }
        result += chr;
      }
      return result;
    }
    function warnOnceAboutExpiresCookie(name, expires) {
      warnings.warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
    }
    exports.createCookieFactory = createCookieFactory;
    exports.isCookie = isCookie;
  }
});
function stringToArray(s) {
  const utf8 = unescape(encodeURIComponent(s));
  return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}
function arrayToString(a) {
  const utf8 = String.fromCharCode.apply(null, a);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  const out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0));
  let offset = 0;
  for (const arr of arrays) {
    out.set(arr, offset);
    offset += arr.length;
  }
  return out;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var init_utils = __esm({
  "../node_modules/@web3-storage/multipart-parser/esm/src/utils.js"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
  }
});
function coerce(a) {
  if (a instanceof Uint8Array) {
    return (index) => a[index];
  }
  return a;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  const fn1 = coerce(buf1);
  const fn2 = coerce(buf2);
  for (let i = 0; i < len; ++i) {
    if (fn1(pos1 + i) !== fn2(pos2 + i)) {
      return false;
    }
  }
  return true;
}
function createOccurenceTable(s) {
  const table = new Array(256).fill(s.length);
  if (s.length > 1) {
    for (let i = 0; i < s.length - 1; i++) {
      table[s[i]] = s.length - 1 - i;
    }
  }
  return table;
}
var MATCH;
var StreamSearch;
var ReadableStreamSearch;
var EOQ;
var QueueableStreamSearch;
var init_search = __esm({
  "../node_modules/@web3-storage/multipart-parser/esm/src/search.js"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    init_utils();
    MATCH = Symbol("Match");
    StreamSearch = class {
      constructor(needle) {
        this._lookbehind = new Uint8Array();
        if (typeof needle === "string") {
          this._needle = needle = stringToArray(needle);
        } else {
          this._needle = needle;
        }
        this._lastChar = needle[needle.length - 1];
        this._occ = createOccurenceTable(needle);
      }
      feed(chunk) {
        let pos = 0;
        let tokens;
        const allTokens = [];
        while (pos !== chunk.length) {
          ;
          [pos, ...tokens] = this._feed(chunk, pos);
          allTokens.push(...tokens);
        }
        return allTokens;
      }
      end() {
        const tail = this._lookbehind;
        this._lookbehind = new Uint8Array();
        return tail;
      }
      _feed(data, bufPos) {
        const tokens = [];
        let pos = -this._lookbehind.length;
        if (pos < 0) {
          while (pos < 0 && pos <= data.length - this._needle.length) {
            const ch = this._charAt(data, pos + this._needle.length - 1);
            if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1)) {
              if (pos > -this._lookbehind.length) {
                tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos));
              }
              tokens.push(MATCH);
              this._lookbehind = new Uint8Array();
              return [
                pos + this._needle.length,
                ...tokens
              ];
            } else {
              pos += this._occ[ch];
            }
          }
          if (pos < 0) {
            while (pos < 0 && !this._memcmp(data, pos, data.length - pos)) {
              pos++;
            }
          }
          if (pos >= 0) {
            tokens.push(this._lookbehind);
            this._lookbehind = new Uint8Array();
          } else {
            const bytesToCutOff = this._lookbehind.length + pos;
            if (bytesToCutOff > 0) {
              tokens.push(this._lookbehind.slice(0, bytesToCutOff));
              this._lookbehind = this._lookbehind.slice(bytesToCutOff);
            }
            this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_, i) => this._charAt(data, i - this._lookbehind.length));
            return [
              data.length,
              ...tokens
            ];
          }
        }
        pos += bufPos;
        while (pos <= data.length - this._needle.length) {
          const ch = data[pos + this._needle.length - 1];
          if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1)) {
            if (pos > bufPos) {
              tokens.push(data.slice(bufPos, pos));
            }
            tokens.push(MATCH);
            return [
              pos + this._needle.length,
              ...tokens
            ];
          } else {
            pos += this._occ[ch];
          }
        }
        if (pos < data.length) {
          while (pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos))) {
            ++pos;
          }
          if (pos < data.length) {
            this._lookbehind = data.slice(pos);
          }
        }
        if (pos > 0) {
          tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length));
        }
        return [
          data.length,
          ...tokens
        ];
      }
      _charAt(data, pos) {
        if (pos < 0) {
          return this._lookbehind[this._lookbehind.length + pos];
        }
        return data[pos];
      }
      _memcmp(data, pos, len) {
        return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
      }
    };
    ReadableStreamSearch = class {
      constructor(needle, _readableStream) {
        this._readableStream = _readableStream;
        this._search = new StreamSearch(needle);
      }
      async *[Symbol.asyncIterator]() {
        const reader = this._readableStream.getReader();
        try {
          while (true) {
            const result = await reader.read();
            if (result.done) {
              break;
            }
            yield* this._search.feed(result.value);
          }
          const tail = this._search.end();
          if (tail.length) {
            yield tail;
          }
        } finally {
          reader.releaseLock();
        }
      }
    };
    EOQ = Symbol("End of Queue");
    QueueableStreamSearch = class {
      constructor(needle) {
        this._chunksQueue = [];
        this._closed = false;
        this._search = new StreamSearch(needle);
      }
      push(...chunks) {
        if (this._closed) {
          throw new Error("cannot call push after close");
        }
        this._chunksQueue.push(...chunks);
        if (this._notify) {
          this._notify();
        }
      }
      close() {
        if (this._closed) {
          throw new Error("close was already called");
        }
        this._closed = true;
        this._chunksQueue.push(EOQ);
        if (this._notify) {
          this._notify();
        }
      }
      async *[Symbol.asyncIterator]() {
        while (true) {
          let chunk;
          while (!(chunk = this._chunksQueue.shift())) {
            await new Promise((resolve) => this._notify = resolve);
            this._notify = void 0;
          }
          if (chunk === EOQ) {
            break;
          }
          yield* this._search.feed(chunk);
        }
        const tail = this._search.end();
        if (tail.length) {
          yield tail;
        }
      }
    };
  }
});
var src_exports = {};
__export(src_exports, {
  iterateMultipart: () => iterateMultipart,
  streamMultipart: () => streamMultipart
});
function parseContentDisposition(header) {
  const parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data") {
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  }
  const out = {};
  for (const part of parts) {
    const kv = part.split("=", 2);
    if (kv.length !== 2) {
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    }
    const [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"') {
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    } else if (value[0] !== '"' && value[value.length - 1] !== '"') {
      out[name] = value;
    } else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"') {
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
    }
  }
  if (!out.name) {
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  }
  return out;
}
function parsePartHeaders(lines) {
  const entries = [];
  let disposition = false;
  let line;
  while (typeof (line = lines.shift()) !== "undefined") {
    const colon = line.indexOf(":");
    if (colon === -1) {
      throw new Error("malformed multipart-form header: missing colon");
    }
    const header = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = true;
        entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition) {
    throw new Error("malformed multipart-form header: missing content-disposition");
  }
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = true;
  let lastTokenWasMatch = false;
  const headerLines = [[]];
  const crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      throw new Error("malformed multipart-form data: unexpected end of stream");
    }
    if (firstChunk && result.value !== MATCH && arraysEqual(result.value.slice(0, 2), dash)) {
      return [
        void 0,
        new Uint8Array()
      ];
    }
    let chunk;
    if (result.value !== MATCH) {
      chunk = result.value;
    } else if (!lastTokenWasMatch) {
      chunk = needle;
    } else {
      throw new Error("malformed multipart-form data: unexpected boundary");
    }
    if (!chunk.length) {
      continue;
    }
    if (firstChunk) {
      firstChunk = false;
    }
    const tokens = crlfSearch.feed(chunk);
    for (const [i, token] of tokens.entries()) {
      const isMatch = token === MATCH;
      if (!isMatch && !token.length) {
        continue;
      }
      if (lastTokenWasMatch && isMatch) {
        tokens.push(crlfSearch.end());
        return [
          headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(arrayToString),
          mergeArrays(...tokens.slice(i + 1).map((token2) => token2 === MATCH ? CRLF : token2))
        ];
      }
      if (lastTokenWasMatch = isMatch) {
        headerLines.push([]);
      } else {
        headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body, boundary) {
  const needle = mergeArrays(dash, stringToArray(boundary));
  const it = new ReadableStreamSearch(needle, body)[Symbol.asyncIterator]();
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      return;
    }
    if (result.value === MATCH) {
      break;
    }
  }
  const crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      const chunks = [];
      for (const token of crlfSearch.feed(chunk)) {
        if (trailingCRLF) {
          chunks.push(CRLF);
        }
        if (!(trailingCRLF = token === MATCH)) {
          chunks.push(token);
        }
      }
      return mergeArrays(...chunks);
    };
    const [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines) {
      return;
    }
    async function nextToken() {
      const result = await it.next();
      if (result.done) {
        throw new Error("malformed multipart-form data: unexpected end of stream");
      }
      return result;
    }
    let trailingCRLF = false;
    let done = false;
    async function nextChunk() {
      const result = await nextToken();
      let chunk;
      if (result.value !== MATCH) {
        chunk = result.value;
      } else if (!trailingCRLF) {
        chunk = CRLF;
      } else {
        done = true;
        return { value: crlfSearch.end() };
      }
      return { value: feedChunk(chunk) };
    }
    const bufferedChunks = [{ value: feedChunk(tail) }];
    yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            const result = bufferedChunks.shift();
            if (!result) {
              break;
            }
            if (result.value.length > 0) {
              return result;
            }
          }
          for (; ; ) {
            if (done) {
              return {
                done,
                value: void 0
              };
            }
            const result = await nextChunk();
            if (result.value.length > 0) {
              return result;
            }
          }
        }
      }
    };
    while (!done) {
      bufferedChunks.push(await nextChunk());
    }
  }
}
async function* iterateMultipart(body, boundary) {
  for await (const part of streamMultipart(body, boundary)) {
    const chunks = [];
    for await (const chunk of part.data) {
      chunks.push(chunk);
    }
    yield {
      ...part,
      data: mergeArrays(...chunks)
    };
  }
}
var mergeArrays2;
var dash;
var CRLF;
var init_src = __esm({
  "../node_modules/@web3-storage/multipart-parser/esm/src/index.js"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    init_search();
    init_utils();
    mergeArrays2 = Function.prototype.apply.bind(mergeArrays, void 0);
    dash = stringToArray("--");
    CRLF = stringToArray("\r\n");
  }
});
var require_formData = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/formData.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var multipartParser = (init_src(), __toCommonJS(src_exports));
    function composeUploadHandlers(...handlers) {
      return async (part) => {
        for (let handler of handlers) {
          let value = await handler(part);
          if (typeof value !== "undefined" && value !== null) {
            return value;
          }
        }
        return void 0;
      };
    }
    async function parseMultipartFormData(request, uploadHandler) {
      let contentType = request.headers.get("Content-Type") || "";
      let [type, boundary] = contentType.split(/\s*;\s*boundary=/);
      if (!request.body || !boundary || type !== "multipart/form-data") {
        throw new TypeError("Could not parse content as FormData.");
      }
      let formData = new FormData();
      let parts = multipartParser.streamMultipart(request.body, boundary);
      for await (let part of parts) {
        if (part.done)
          break;
        if (typeof part.filename === "string") {
          part.filename = part.filename.split(/[/\\]/).pop();
        }
        let value = await uploadHandler(part);
        if (typeof value !== "undefined" && value !== null) {
          formData.append(part.name, value);
        }
      }
      return formData;
    }
    exports.composeUploadHandlers = composeUploadHandlers;
    exports.parseMultipartFormData = parseMultipartFormData;
  }
});
var require_router_cjs = __commonJS({
  "../node_modules/@remix-run/router/dist/router.cjs.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var Action = /* @__PURE__ */ function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
      return Action2;
    }({});
    var PopStateEventType = "popstate";
    function createMemoryHistory(options) {
      if (options === void 0) {
        options = {};
      }
      let {
        initialEntries = ["/"],
        initialIndex,
        v5Compat = false
      } = options;
      let entries;
      entries = initialEntries.map((entry, index2) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : void 0));
      let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
      let action = Action.Pop;
      let listener = null;
      function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
      }
      function getCurrentLocation() {
        return entries[index];
      }
      function createMemoryLocation(to, state, key) {
        if (state === void 0) {
          state = null;
        }
        let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
      }
      function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
      }
      let history = {
        get index() {
          return index;
        },
        get action() {
          return action;
        },
        get location() {
          return getCurrentLocation();
        },
        createHref,
        createURL(to) {
          return new URL(createHref(to), "http://localhost");
        },
        encodeLocation(to) {
          let path = typeof to === "string" ? parsePath(to) : to;
          return {
            pathname: path.pathname || "",
            search: path.search || "",
            hash: path.hash || ""
          };
        },
        push(to, state) {
          action = Action.Push;
          let nextLocation = createMemoryLocation(to, state);
          index += 1;
          entries.splice(index, entries.length, nextLocation);
          if (v5Compat && listener) {
            listener({
              action,
              location: nextLocation,
              delta: 1
            });
          }
        },
        replace(to, state) {
          action = Action.Replace;
          let nextLocation = createMemoryLocation(to, state);
          entries[index] = nextLocation;
          if (v5Compat && listener) {
            listener({
              action,
              location: nextLocation,
              delta: 0
            });
          }
        },
        go(delta) {
          action = Action.Pop;
          let nextIndex = clampIndex(index + delta);
          let nextLocation = entries[nextIndex];
          index = nextIndex;
          if (listener) {
            listener({
              action,
              location: nextLocation,
              delta
            });
          }
        },
        listen(fn) {
          listener = fn;
          return () => {
            listener = null;
          };
        }
      };
      return history;
    }
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to) {
        return typeof to === "string" ? to : createPath(to);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function createHashHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createHashLocation(window2, globalHistory) {
        let {
          pathname = "/",
          search = "",
          hash = ""
        } = parsePath(window2.location.hash.substr(1));
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
          pathname = "/" + pathname;
        }
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createHashHref(window2, to) {
        let base = window2.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
          let url = window2.location.href;
          let hashIndex = url.indexOf("#");
          href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
      }
      function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
      }
      return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
    }
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e) {
        }
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location, index) {
      return {
        usr: location.state,
        key: location.key,
        idx: index
      };
    }
    function createLocation(current, to, state, key) {
      if (state === void 0) {
        state = null;
      }
      let location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
      });
      return location;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = _ref;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#")
        pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener = null;
      let index = getIndex();
      if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
          idx: index
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
          listener({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to, state) {
        action = Action.Push;
        let location = createLocation(history.location, to, state);
        if (validateLocation)
          validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        try {
          globalHistory.pushState(historyState, "", url);
        } catch (error) {
          if (error instanceof DOMException && error.name === "DataCloneError") {
            throw error;
          }
          window2.location.assign(url);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace(to, state) {
        action = Action.Replace;
        let location = createLocation(history.location, to, state);
        if (validateLocation)
          validateLocation(location, to);
        index = getIndex();
        let historyState = getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to === "string" ? to : createPath(to);
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to) {
          return createHref(window2, to);
        },
        createURL,
        encodeLocation(to) {
          let url = createURL(to);
          return {
            pathname: url.pathname,
            search: url.search,
            hash: url.hash
          };
        },
        push,
        replace,
        go(n) {
          return globalHistory.go(n);
        }
      };
      return history;
    }
    var ResultType = /* @__PURE__ */ function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
      return ResultType2;
    }({});
    var immutableRouteKeys = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function isIndexRoute(route) {
      return route.index === true;
    }
    function convertRoutesToDataRoutes(routes2, mapRouteProperties, parentPath, manifest) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      if (manifest === void 0) {
        manifest = {};
      }
      return routes2.map((route, index) => {
        let treePath = [...parentPath, index];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], 'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`);
        if (isIndexRoute(route)) {
          let indexRoute = _extends({}, route, mapRouteProperties(route), {
            id
          });
          manifest[id] = indexRoute;
          return indexRoute;
        } else {
          let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
            id,
            children: void 0
          });
          manifest[id] = pathOrLayoutRoute;
          if (route.children) {
            pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
          }
          return pathOrLayoutRoute;
        }
      });
    }
    function matchRoutes(routes2, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes2);
      rankRouteBranches(branches);
      let matches = null;
      for (let i = 0; matches == null && i < branches.length; ++i) {
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded);
      }
      return matches;
    }
    function convertRouteMatchToUiMatch(match2, loaderData) {
      let {
        route,
        pathname,
        params
      } = match2;
      return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
      };
    }
    function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes2.forEach((route, index) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0)
        return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
    }
    var paramRe = /^:[\w-]+$/;
    var dynamicSegmentValue = 3;
    var indexRouteValue = 2;
    var emptySegmentValue = 1;
    var staticSegmentValue = 10;
    var splatPenalty = -2;
    var isSplat = (s) => s === "*";
    function computeScore(path, index) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a, b) {
      let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a[a.length - 1] - b[b.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname) {
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i = 0; i < routesMeta.length; ++i) {
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match2 = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        if (!match2)
          return null;
        Object.assign(matchedParams, match2.params);
        let route = meta.route;
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match2.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match2.pathnameBase])),
          route
        });
        if (match2.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match2.pathnameBase]);
        }
      }
      return matches;
    }
    function generatePath(originalPath, params) {
      if (params === void 0) {
        params = {};
      }
      let path = originalPath;
      if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
      }
      const prefix = path.startsWith("/") ? "/" : "";
      const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
      const segments = path.split(/\/+/).map((segment, index, array) => {
        const isLastSegment = index === array.length - 1;
        if (isLastSegment && segment === "*") {
          const star = "*";
          return stringify(params[star]);
        }
        const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
          const [, key, optional] = keyMatch;
          let param = params[key];
          invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
          return stringify(param);
        }
        return segment.replace(/\?$/g, "");
      }).filter((segment) => !!segment);
      return prefix + segments.join("/");
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match2 = pathname.match(matcher);
      if (!match2)
        return null;
      let matchedPathname = match2[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match2.slice(1);
      let params = compiledParams.reduce((memo, _ref, index) => {
        let {
          paramName,
          isOptional
        } = _ref;
        if (paramName === "*") {
          let splatValue = captureGroups[index] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index];
        if (isOptional && !value) {
          memo[paramName] = void 0;
        } else {
          memo[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let params = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
        params.push({
          paramName,
          isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        params.push({
          paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else
        ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, params];
    }
    function decodePath(value) {
      try {
        return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
      } catch (error) {
        warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function resolvePath(to, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to === "string" ? parsePath(to) : to;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1)
            segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
      return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match2, index) => index === 0 || match2.route.path && match2.route.path.length > 0);
    }
    function getResolveToMatches(matches, v7_relativeSplatPath) {
      let pathMatches = getPathContributingMatches(matches);
      if (v7_relativeSplatPath) {
        return pathMatches.map((match2, idx) => idx === matches.length - 1 ? match2.pathname : match2.pathnameBase);
      }
      return pathMatches.map((match2) => match2.pathnameBase);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to;
      if (typeof toArg === "string") {
        to = parsePath(toArg);
      } else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
      }
      let isEmptyPath = toArg === "" || to.pathname === "";
      let toPathname = isEmptyPath ? "/" : to.pathname;
      let from;
      if (toPathname == null) {
        from = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to, from);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    function getToPathname(to) {
      return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
    }
    var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    var json = function json2(data, init) {
      if (init === void 0) {
        init = {};
      }
      let responseInit = typeof init === "number" ? {
        status: init
      } : init;
      let headers = new Headers(responseInit.headers);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
      }
      return new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers
      }));
    };
    var AbortedDeferredError = class extends Error {
    };
    var DeferredData = class {
      constructor(data, responseInit) {
        this.pendingKeysSet = /* @__PURE__ */ new Set();
        this.subscribers = /* @__PURE__ */ new Set();
        this.deferredKeys = [];
        invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        let reject;
        this.abortPromise = new Promise((_, r) => reject = r);
        this.controller = new AbortController();
        let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
        this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref2) => {
          let [key, value] = _ref2;
          return Object.assign(acc, {
            [key]: this.trackPromise(key, value)
          });
        }, {});
        if (this.done) {
          this.unlistenAbortSignal();
        }
        this.init = responseInit;
      }
      trackPromise(key, value) {
        if (!(value instanceof Promise)) {
          return value;
        }
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        let promise = Promise.race([value, this.abortPromise]).then((data) => this.onSettle(promise, key, void 0, data), (error) => this.onSettle(promise, key, error));
        promise.catch(() => {
        });
        Object.defineProperty(promise, "_tracked", {
          get: () => true
        });
        return promise;
      }
      onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
          this.unlistenAbortSignal();
          Object.defineProperty(promise, "_error", {
            get: () => error
          });
          return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) {
          this.unlistenAbortSignal();
        }
        if (error === void 0 && data === void 0) {
          let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
          Object.defineProperty(promise, "_error", {
            get: () => undefinedError
          });
          this.emit(false, key);
          return Promise.reject(undefinedError);
        }
        if (data === void 0) {
          Object.defineProperty(promise, "_error", {
            get: () => error
          });
          this.emit(false, key);
          return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
          get: () => data
        });
        this.emit(false, key);
        return data;
      }
      emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber) => subscriber(aborted, settledKey));
      }
      subscribe(fn) {
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
      }
      cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
        this.emit(true);
      }
      async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
          let onAbort = () => this.cancel();
          signal.addEventListener("abort", onAbort);
          aborted = await new Promise((resolve) => {
            this.subscribe((aborted2) => {
              signal.removeEventListener("abort", onAbort);
              if (aborted2 || this.done) {
                resolve(aborted2);
              }
            });
          });
        }
        return aborted;
      }
      get done() {
        return this.pendingKeysSet.size === 0;
      }
      get unwrappedData() {
        invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3) => {
          let [key, value] = _ref3;
          return Object.assign(acc, {
            [key]: unwrapTrackedPromise(value)
          });
        }, {});
      }
      get pendingKeys() {
        return Array.from(this.pendingKeysSet);
      }
    };
    function isTrackedPromise(value) {
      return value instanceof Promise && value._tracked === true;
    }
    function unwrapTrackedPromise(value) {
      if (!isTrackedPromise(value)) {
        return value;
      }
      if (value._error) {
        throw value._error;
      }
      return value._data;
    }
    var defer = function defer2(data, init) {
      if (init === void 0) {
        init = {};
      }
      let responseInit = typeof init === "number" ? {
        status: init
      } : init;
      return new DeferredData(data, responseInit);
    };
    var redirect = function redirect2(url, init) {
      if (init === void 0) {
        init = 302;
      }
      let responseInit = init;
      if (typeof responseInit === "number") {
        responseInit = {
          status: responseInit
        };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers = new Headers(responseInit.headers);
      headers.set("Location", url);
      return new Response(null, _extends({}, responseInit, {
        headers
      }));
    };
    var redirectDocument = (url, init) => {
      let response = redirect(url, init);
      response.headers.set("X-Remix-Reload-Document", "true");
      return response;
    };
    var ErrorResponseImpl = class {
      constructor(status, statusText, data, internal) {
        if (internal === void 0) {
          internal = false;
        }
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
          this.data = data.toString();
          this.error = data;
        } else {
          this.data = data;
        }
      }
    };
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    var validMutationMethodsArr = ["post", "put", "patch", "delete"];
    var validMutationMethods = new Set(validMutationMethodsArr);
    var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
    var validRequestMethods = new Set(validRequestMethodsArr);
    var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
    var IDLE_NAVIGATION = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    var IDLE_FETCHER = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    var IDLE_BLOCKER = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0
    };
    var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    var defaultMapRouteProperties = (route) => ({
      hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
    var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
    function createRouter(init) {
      const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
      const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
      const isServer = !isBrowser;
      invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
      let mapRouteProperties;
      if (init.mapRouteProperties) {
        mapRouteProperties = init.mapRouteProperties;
      } else if (init.detectErrorBoundary) {
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route) => ({
          hasErrorBoundary: detectErrorBoundary(route)
        });
      } else {
        mapRouteProperties = defaultMapRouteProperties;
      }
      let manifest = {};
      let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, void 0, manifest);
      let inFlightDataRoutes;
      let basename = init.basename || "/";
      let future = _extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false
      }, init.future);
      let unlistenHistory = null;
      let subscribers = /* @__PURE__ */ new Set();
      let savedScrollPositions = null;
      let getScrollRestorationKey = null;
      let getScrollPosition = null;
      let initialScrollRestored = init.hydrationData != null;
      let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
      let initialErrors = null;
      if (initialMatches == null) {
        let error = getInternalRouterError(404, {
          pathname: init.history.location.pathname
        });
        let {
          matches,
          route
        } = getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
          [route.id]: error
        };
      }
      let initialized;
      let hasLazyRoutes = initialMatches.some((m) => m.route.lazy);
      let hasLoaders = initialMatches.some((m) => m.route.loader);
      if (hasLazyRoutes) {
        initialized = false;
      } else if (!hasLoaders) {
        initialized = true;
      } else if (future.v7_partialHydration) {
        let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        let errors = init.hydrationData ? init.hydrationData.errors : null;
        initialized = initialMatches.every((m) => m.route.loader && m.route.loader.hydrate !== true && (loaderData && loaderData[m.route.id] !== void 0 || errors && errors[m.route.id] !== void 0));
      } else {
        initialized = init.hydrationData != null;
      }
      let router;
      let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
      let pendingAction = Action.Pop;
      let pendingPreventScrollReset = false;
      let pendingNavigationController;
      let pendingViewTransitionEnabled = false;
      let appliedViewTransitions = /* @__PURE__ */ new Map();
      let removePageHideEventListener = null;
      let isUninterruptedRevalidation = false;
      let isRevalidationRequired = false;
      let cancelledDeferredRoutes = [];
      let cancelledFetcherLoads = [];
      let fetchControllers = /* @__PURE__ */ new Map();
      let incrementingLoadId = 0;
      let pendingNavigationLoadId = -1;
      let fetchReloadIds = /* @__PURE__ */ new Map();
      let fetchRedirectIds = /* @__PURE__ */ new Set();
      let fetchLoadMatches = /* @__PURE__ */ new Map();
      let activeFetchers = /* @__PURE__ */ new Map();
      let deletedFetchers = /* @__PURE__ */ new Set();
      let activeDeferreds = /* @__PURE__ */ new Map();
      let blockerFunctions = /* @__PURE__ */ new Map();
      let ignoreNextHistoryUpdate = false;
      function initialize() {
        unlistenHistory = init.history.listen((_ref) => {
          let {
            action: historyAction,
            location,
            delta
          } = _ref;
          if (ignoreNextHistoryUpdate) {
            ignoreNextHistoryUpdate = false;
            return;
          }
          warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
          let blockerKey = shouldBlockNavigation({
            currentLocation: state.location,
            nextLocation: location,
            historyAction
          });
          if (blockerKey && delta != null) {
            ignoreNextHistoryUpdate = true;
            init.history.go(delta * -1);
            updateBlocker(blockerKey, {
              state: "blocked",
              location,
              proceed() {
                updateBlocker(blockerKey, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location
                });
                init.history.go(delta);
              },
              reset() {
                let blockers = new Map(state.blockers);
                blockers.set(blockerKey, IDLE_BLOCKER);
                updateState({
                  blockers
                });
              }
            });
            return;
          }
          return startNavigation(historyAction, location);
        });
        if (isBrowser) {
          restoreAppliedTransitions(routerWindow, appliedViewTransitions);
          let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
          routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
          removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        if (!state.initialized) {
          startNavigation(Action.Pop, state.location, {
            initialHydration: true
          });
        }
        return router;
      }
      function dispose() {
        if (unlistenHistory) {
          unlistenHistory();
        }
        if (removePageHideEventListener) {
          removePageHideEventListener();
        }
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key) => deleteFetcher(key));
        state.blockers.forEach((_, key) => deleteBlocker(key));
      }
      function subscribe(fn) {
        subscribers.add(fn);
        return () => subscribers.delete(fn);
      }
      function updateState(newState, opts) {
        if (opts === void 0) {
          opts = {};
        }
        state = _extends({}, state, newState);
        let completedFetchers = [];
        let deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) {
          state.fetchers.forEach((fetcher, key) => {
            if (fetcher.state === "idle") {
              if (deletedFetchers.has(key)) {
                deletedFetchersKeys.push(key);
              } else {
                completedFetchers.push(key);
              }
            }
          });
        }
        [...subscribers].forEach((subscriber) => subscriber(state, {
          deletedFetchers: deletedFetchersKeys,
          unstable_viewTransitionOpts: opts.viewTransitionOpts,
          unstable_flushSync: opts.flushSync === true
        }));
        if (future.v7_fetcherPersist) {
          completedFetchers.forEach((key) => state.fetchers.delete(key));
          deletedFetchersKeys.forEach((key) => deleteFetcher(key));
        }
      }
      function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        let {
          flushSync
        } = _temp === void 0 ? {} : _temp;
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
          if (Object.keys(newState.actionData).length > 0) {
            actionData = newState.actionData;
          } else {
            actionData = null;
          }
        } else if (isActionReload) {
          actionData = state.actionData;
        } else {
          actionData = null;
        }
        let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        let blockers = state.blockers;
        if (blockers.size > 0) {
          blockers = new Map(blockers);
          blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
        }
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
          dataRoutes = inFlightDataRoutes;
          inFlightDataRoutes = void 0;
        }
        if (isUninterruptedRevalidation)
          ;
        else if (pendingAction === Action.Pop)
          ;
        else if (pendingAction === Action.Push) {
          init.history.push(location, location.state);
        } else if (pendingAction === Action.Replace) {
          init.history.replace(location, location.state);
        }
        let viewTransitionOpts;
        if (pendingAction === Action.Pop) {
          let priorPaths = appliedViewTransitions.get(state.location.pathname);
          if (priorPaths && priorPaths.has(location.pathname)) {
            viewTransitionOpts = {
              currentLocation: state.location,
              nextLocation: location
            };
          } else if (appliedViewTransitions.has(location.pathname)) {
            viewTransitionOpts = {
              currentLocation: location,
              nextLocation: state.location
            };
          }
        } else if (pendingViewTransitionEnabled) {
          let toPaths = appliedViewTransitions.get(state.location.pathname);
          if (toPaths) {
            toPaths.add(location.pathname);
          } else {
            toPaths = /* @__PURE__ */ new Set([location.pathname]);
            appliedViewTransitions.set(state.location.pathname, toPaths);
          }
          viewTransitionOpts = {
            currentLocation: state.location,
            nextLocation: location
          };
        }
        updateState(_extends({}, newState, {
          // matches, errors, fetchers go through as-is
          actionData,
          loaderData,
          historyAction: pendingAction,
          location,
          initialized: true,
          navigation: IDLE_NAVIGATION,
          revalidation: "idle",
          restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
          preventScrollReset,
          blockers
        }), {
          viewTransitionOpts,
          flushSync: flushSync === true
        });
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
      }
      async function navigate(to, opts) {
        if (typeof to === "number") {
          init.history.go(to);
          return;
        }
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let {
          path,
          submission,
          error
        } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = createLocation(state.location, path, opts && opts.state);
        nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : void 0;
        let historyAction = Action.Push;
        if (userReplace === true) {
          historyAction = Action.Replace;
        } else if (userReplace === false)
          ;
        else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
          historyAction = Action.Replace;
        }
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let blockerKey = shouldBlockNavigation({
          currentLocation,
          nextLocation,
          historyAction
        });
        if (blockerKey) {
          updateBlocker(blockerKey, {
            state: "blocked",
            location: nextLocation,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: nextLocation
              });
              navigate(to, opts);
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({
                blockers
              });
            }
          });
          return;
        }
        return await startNavigation(historyAction, nextLocation, {
          submission,
          // Send through the formData serialization error if we have one so we can
          // render at the right error boundary after we match routes
          pendingError: error,
          preventScrollReset,
          replace: opts && opts.replace,
          enableViewTransition: opts && opts.unstable_viewTransition,
          flushSync
        });
      }
      function revalidate() {
        interruptActiveLoads();
        updateState({
          revalidation: "loading"
        });
        if (state.navigation.state === "submitting") {
          return;
        }
        if (state.navigation.state === "idle") {
          startNavigation(state.historyAction, state.location, {
            startUninterruptedRevalidation: true
          });
          return;
        }
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
          overrideNavigation: state.navigation
        });
      }
      async function startNavigation(historyAction, location, opts) {
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = matchRoutes(routesToUse, location, basename);
        let flushSync = (opts && opts.flushSync) === true;
        if (!matches) {
          let error = getInternalRouterError(404, {
            pathname: location.pathname
          });
          let {
            matches: notFoundMatches,
            route
          } = getShortCircuitMatches(routesToUse);
          cancelActiveDeferreds();
          completeNavigation(location, {
            matches: notFoundMatches,
            loaderData: {},
            errors: {
              [route.id]: error
            }
          }, {
            flushSync
          });
          return;
        }
        if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
          completeNavigation(location, {
            matches
          }, {
            flushSync
          });
          return;
        }
        pendingNavigationController = new AbortController();
        let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionData;
        let pendingError;
        if (opts && opts.pendingError) {
          pendingError = {
            [findNearestBoundary(matches).route.id]: opts.pendingError
          };
        } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
          let actionOutput = await handleAction(request, location, opts.submission, matches, {
            replace: opts.replace,
            flushSync
          });
          if (actionOutput.shortCircuited) {
            return;
          }
          pendingActionData = actionOutput.pendingActionData;
          pendingError = actionOutput.pendingActionError;
          loadingNavigation = getLoadingNavigation(location, opts.submission);
          flushSync = false;
          request = new Request(request.url, {
            signal: request.signal
          });
        }
        let {
          shortCircuited,
          loaderData,
          errors
        } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionData, pendingError);
        if (shortCircuited) {
          return;
        }
        pendingNavigationController = null;
        completeNavigation(location, _extends({
          matches
        }, pendingActionData ? {
          actionData: pendingActionData
        } : {}, {
          loaderData,
          errors
        }));
      }
      async function handleAction(request, location, submission, matches, opts) {
        if (opts === void 0) {
          opts = {};
        }
        interruptActiveLoads();
        let navigation = getSubmittingNavigation(location, submission);
        updateState({
          navigation
        }, {
          flushSync: opts.flushSync === true
        });
        let result;
        let actionMatch = getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
          result = {
            type: ResultType.error,
            error: getInternalRouterError(405, {
              method: request.method,
              pathname: location.pathname,
              routeId: actionMatch.route.id
            })
          };
        } else {
          result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
          if (request.signal.aborted) {
            return {
              shortCircuited: true
            };
          }
        }
        if (isRedirectResult(result)) {
          let replace;
          if (opts && opts.replace != null) {
            replace = opts.replace;
          } else {
            replace = result.location === state.location.pathname + state.location.search;
          }
          await startRedirectNavigation(state, result, {
            submission,
            replace
          });
          return {
            shortCircuited: true
          };
        }
        if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
          if ((opts && opts.replace) !== true) {
            pendingAction = Action.Push;
          }
          return {
            // Send back an empty object we can use to clear out any prior actionData
            pendingActionData: {},
            pendingActionError: {
              [boundaryMatch.route.id]: result.error
            }
          };
        }
        if (isDeferredResult(result)) {
          throw getInternalRouterError(400, {
            type: "defer-action"
          });
        }
        return {
          pendingActionData: {
            [actionMatch.route.id]: result.data
          }
        };
      }
      async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionData, pendingError) {
        let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
        let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
        cancelActiveDeferreds((routeId) => !(matches && matches.some((m) => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m) => m.route.id === routeId));
        pendingNavigationLoadId = ++incrementingLoadId;
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
          let updatedFetchers2 = markFetchRedirectsDone();
          completeNavigation(location, _extends({
            matches,
            loaderData: {},
            // Commit pending error if we're short circuiting
            errors: pendingError || null
          }, pendingActionData ? {
            actionData: pendingActionData
          } : {}, updatedFetchers2 ? {
            fetchers: new Map(state.fetchers)
          } : {}), {
            flushSync
          });
          return {
            shortCircuited: true
          };
        }
        if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
          revalidatingFetchers.forEach((rf) => {
            let fetcher = state.fetchers.get(rf.key);
            let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
            state.fetchers.set(rf.key, revalidatingFetcher);
          });
          let actionData = pendingActionData || state.actionData;
          updateState(_extends({
            navigation: loadingNavigation
          }, actionData ? Object.keys(actionData).length === 0 ? {
            actionData: null
          } : {
            actionData
          } : {}, revalidatingFetchers.length > 0 ? {
            fetchers: new Map(state.fetchers)
          } : {}), {
            flushSync
          });
        }
        revalidatingFetchers.forEach((rf) => {
          if (fetchControllers.has(rf.key)) {
            abortFetcher(rf.key);
          }
          if (rf.controller) {
            fetchControllers.set(rf.key, rf.controller);
          }
        });
        let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
        if (pendingNavigationController) {
          pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        }
        let {
          results,
          loaderResults,
          fetcherResults
        } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) {
          return {
            shortCircuited: true
          };
        }
        if (pendingNavigationController) {
          pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        }
        revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
        let redirect2 = findRedirect(results);
        if (redirect2) {
          if (redirect2.idx >= matchesToLoad.length) {
            let fetcherKey = revalidatingFetchers[redirect2.idx - matchesToLoad.length].key;
            fetchRedirectIds.add(fetcherKey);
          }
          await startRedirectNavigation(state, redirect2.result, {
            replace
          });
          return {
            shortCircuited: true
          };
        }
        let {
          loaderData,
          errors
        } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
        activeDeferreds.forEach((deferredData, routeId) => {
          deferredData.subscribe((aborted) => {
            if (aborted || deferredData.done) {
              activeDeferreds.delete(routeId);
            }
          });
        });
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return _extends({
          loaderData,
          errors
        }, shouldUpdateFetchers ? {
          fetchers: new Map(state.fetchers)
        } : {});
      }
      function fetch2(key, routeId, href, opts) {
        if (isServer) {
          throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        }
        if (fetchControllers.has(key))
          abortFetcher(key);
        let flushSync = (opts && opts.unstable_flushSync) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        let matches = matchRoutes(routesToUse, normalizedPath, basename);
        if (!matches) {
          setFetcherError(key, routeId, getInternalRouterError(404, {
            pathname: normalizedPath
          }), {
            flushSync
          });
          return;
        }
        let {
          path,
          submission,
          error
        } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
          setFetcherError(key, routeId, error, {
            flushSync
          });
          return;
        }
        let match2 = getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
          handleFetcherAction(key, routeId, path, match2, matches, flushSync, submission);
          return;
        }
        fetchLoadMatches.set(key, {
          routeId,
          path
        });
        handleFetcherLoader(key, routeId, path, match2, matches, flushSync, submission);
      }
      async function handleFetcherAction(key, routeId, path, match2, requestMatches, flushSync, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        if (!match2.route.action && !match2.route.lazy) {
          let error = getInternalRouterError(405, {
            method: submission.formMethod,
            pathname: path,
            routeId
          });
          setFetcherError(key, routeId, error, {
            flushSync
          });
          return;
        }
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
          flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let actionResult = await callLoaderOrAction("action", fetchRequest, match2, requestMatches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
        if (fetchRequest.signal.aborted) {
          if (fetchControllers.get(key) === abortController) {
            fetchControllers.delete(key);
          }
          return;
        }
        if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
          if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
          }
        } else {
          if (isRedirectResult(actionResult)) {
            fetchControllers.delete(key);
            if (pendingNavigationLoadId > originatingLoadId) {
              updateFetcherState(key, getDoneFetcher(void 0));
              return;
            } else {
              fetchRedirectIds.add(key);
              updateFetcherState(key, getLoadingFetcher(submission));
              return startRedirectNavigation(state, actionResult, {
                fetcherSubmission: submission
              });
            }
          }
          if (isErrorResult(actionResult)) {
            setFetcherError(key, routeId, actionResult.error);
            return;
          }
        }
        if (isDeferredResult(actionResult)) {
          throw getInternalRouterError(400, {
            type: "defer-action"
          });
        }
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
        invariant(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = getLoadingFetcher(submission, actionResult.data);
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
          init.history,
          state,
          matches,
          submission,
          nextLocation,
          false,
          isRevalidationRequired,
          cancelledDeferredRoutes,
          cancelledFetcherLoads,
          deletedFetchers,
          fetchLoadMatches,
          fetchRedirectIds,
          routesToUse,
          basename,
          {
            [match2.route.id]: actionResult.data
          },
          void 0
          // No need to send through errors since we short circuit above
        );
        revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
          let staleKey = rf.key;
          let existingFetcher2 = state.fetchers.get(staleKey);
          let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
          state.fetchers.set(staleKey, revalidatingFetcher);
          if (fetchControllers.has(staleKey)) {
            abortFetcher(staleKey);
          }
          if (rf.controller) {
            fetchControllers.set(staleKey, rf.controller);
          }
        });
        updateState({
          fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let {
          results,
          loaderResults,
          fetcherResults
        } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) {
          return;
        }
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
        let redirect2 = findRedirect(results);
        if (redirect2) {
          if (redirect2.idx >= matchesToLoad.length) {
            let fetcherKey = revalidatingFetchers[redirect2.idx - matchesToLoad.length].key;
            fetchRedirectIds.add(fetcherKey);
          }
          return startRedirectNavigation(state, redirect2.result);
        }
        let {
          loaderData,
          errors
        } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
        if (state.fetchers.has(key)) {
          let doneFetcher = getDoneFetcher(actionResult.data);
          state.fetchers.set(key, doneFetcher);
        }
        abortStaleFetchLoads(loadId);
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
          invariant(pendingAction, "Expected pending action");
          pendingNavigationController && pendingNavigationController.abort();
          completeNavigation(state.navigation.location, {
            matches,
            loaderData,
            errors,
            fetchers: new Map(state.fetchers)
          });
        } else {
          updateState({
            errors,
            loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
            fetchers: new Map(state.fetchers)
          });
          isRevalidationRequired = false;
        }
      }
      async function handleFetcherLoader(key, routeId, path, match2, matches, flushSync, submission) {
        let existingFetcher = state.fetchers.get(key);
        updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), {
          flushSync
        });
        let abortController = new AbortController();
        let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
        fetchControllers.set(key, abortController);
        let originatingLoadId = incrementingLoadId;
        let result = await callLoaderOrAction("loader", fetchRequest, match2, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
        if (isDeferredResult(result)) {
          result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
        }
        if (fetchControllers.get(key) === abortController) {
          fetchControllers.delete(key);
        }
        if (fetchRequest.signal.aborted) {
          return;
        }
        if (deletedFetchers.has(key)) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        }
        if (isRedirectResult(result)) {
          if (pendingNavigationLoadId > originatingLoadId) {
            updateFetcherState(key, getDoneFetcher(void 0));
            return;
          } else {
            fetchRedirectIds.add(key);
            await startRedirectNavigation(state, result);
            return;
          }
        }
        if (isErrorResult(result)) {
          setFetcherError(key, routeId, result.error);
          return;
        }
        invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
        updateFetcherState(key, getDoneFetcher(result.data));
      }
      async function startRedirectNavigation(state2, redirect2, _temp2) {
        let {
          submission,
          fetcherSubmission,
          replace
        } = _temp2 === void 0 ? {} : _temp2;
        if (redirect2.revalidate) {
          isRevalidationRequired = true;
        }
        let redirectLocation = createLocation(state2.location, redirect2.location, {
          _isRedirect: true
        });
        invariant(redirectLocation, "Expected a location on the redirect navigation");
        if (isBrowser) {
          let isDocumentReload = false;
          if (redirect2.reloadDocument) {
            isDocumentReload = true;
          } else if (ABSOLUTE_URL_REGEX.test(redirect2.location)) {
            const url = init.history.createURL(redirect2.location);
            isDocumentReload = // Hard reload if it's an absolute URL to a new origin
            url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
            stripBasename(url.pathname, basename) == null;
          }
          if (isDocumentReload) {
            if (replace) {
              routerWindow.location.replace(redirect2.location);
            } else {
              routerWindow.location.assign(redirect2.location);
            }
            return;
          }
        }
        pendingNavigationController = null;
        let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
        let {
          formMethod,
          formAction,
          formEncType
        } = state2.navigation;
        if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
          submission = getSubmissionFromNavigation(state2.navigation);
        }
        let activeSubmission = submission || fetcherSubmission;
        if (redirectPreserveMethodStatusCodes.has(redirect2.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
          await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: _extends({}, activeSubmission, {
              formAction: redirect2.location
            }),
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
          });
        } else {
          let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
          await startNavigation(redirectHistoryAction, redirectLocation, {
            overrideNavigation,
            // Send fetcher submissions through for shouldRevalidate
            fetcherSubmission,
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
          });
        }
      }
      async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        let results = await Promise.all([...matchesToLoad.map((match2) => callLoaderOrAction("loader", request, match2, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath)), ...fetchersToLoad.map((f) => {
          if (f.matches && f.match && f.controller) {
            return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath);
          } else {
            let error = {
              type: ResultType.error,
              error: getInternalRouterError(404, {
                pathname: f.path
              })
            };
            return error;
          }
        })]);
        let loaderResults = results.slice(0, matchesToLoad.length);
        let fetcherResults = results.slice(matchesToLoad.length);
        await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map((f) => f.match), fetcherResults, fetchersToLoad.map((f) => f.controller ? f.controller.signal : null), true)]);
        return {
          results,
          loaderResults,
          fetcherResults
        };
      }
      function interruptActiveLoads() {
        isRevalidationRequired = true;
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        fetchLoadMatches.forEach((_, key) => {
          if (fetchControllers.has(key)) {
            cancelledFetcherLoads.push(key);
            abortFetcher(key);
          }
        });
      }
      function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) {
          opts = {};
        }
        state.fetchers.set(key, fetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        }, {
          flushSync: (opts && opts.flushSync) === true
        });
      }
      function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) {
          opts = {};
        }
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
          errors: {
            [boundaryMatch.route.id]: error
          },
          fetchers: new Map(state.fetchers)
        }, {
          flushSync: (opts && opts.flushSync) === true
        });
      }
      function getFetcher(key) {
        if (future.v7_fetcherPersist) {
          activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
          if (deletedFetchers.has(key)) {
            deletedFetchers.delete(key);
          }
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
      }
      function deleteFetcher(key) {
        let fetcher = state.fetchers.get(key);
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
          abortFetcher(key);
        }
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        deletedFetchers.delete(key);
        state.fetchers.delete(key);
      }
      function deleteFetcherAndUpdateState(key) {
        if (future.v7_fetcherPersist) {
          let count = (activeFetchers.get(key) || 0) - 1;
          if (count <= 0) {
            activeFetchers.delete(key);
            deletedFetchers.add(key);
          } else {
            activeFetchers.set(key, count);
          }
        } else {
          deleteFetcher(key);
        }
        updateState({
          fetchers: new Map(state.fetchers)
        });
      }
      function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        invariant(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
      }
      function markFetchersDone(keys) {
        for (let key of keys) {
          let fetcher = getFetcher(key);
          let doneFetcher = getDoneFetcher(fetcher.data);
          state.fetchers.set(key, doneFetcher);
        }
      }
      function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds) {
          let fetcher = state.fetchers.get(key);
          invariant(fetcher, "Expected fetcher: " + key);
          if (fetcher.state === "loading") {
            fetchRedirectIds.delete(key);
            doneKeys.push(key);
            updatedFetchers = true;
          }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
      }
      function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds) {
          if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
              abortFetcher(key);
              fetchReloadIds.delete(key);
              yeetedKeys.push(key);
            }
          }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
      }
      function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) {
          blockerFunctions.set(key, fn);
        }
        return blocker;
      }
      function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
      }
      function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || IDLE_BLOCKER;
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        let blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
          blockers
        });
      }
      function shouldBlockNavigation(_ref2) {
        let {
          currentLocation,
          nextLocation,
          historyAction
        } = _ref2;
        if (blockerFunctions.size === 0) {
          return;
        }
        if (blockerFunctions.size > 1) {
          warning(false, "A router only supports one blocker at a time");
        }
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") {
          return;
        }
        if (blockerFunction({
          currentLocation,
          nextLocation,
          historyAction
        })) {
          return blockerKey;
        }
      }
      function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId) => {
          if (!predicate || predicate(routeId)) {
            dfd.cancel();
            cancelledRouteIds.push(routeId);
            activeDeferreds.delete(routeId);
          }
        });
        return cancelledRouteIds;
      }
      function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
          initialScrollRestored = true;
          let y = getSavedScrollPosition(state.location, state.matches);
          if (y != null) {
            updateState({
              restoreScrollPosition: y
            });
          }
        }
        return () => {
          savedScrollPositions = null;
          getScrollPosition = null;
          getScrollRestorationKey = null;
        };
      }
      function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
          let key = getScrollRestorationKey(location, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData)));
          return key || location.key;
        }
        return location.key;
      }
      function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
          let key = getScrollKey(location, matches);
          savedScrollPositions[key] = getScrollPosition();
        }
      }
      function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
          let key = getScrollKey(location, matches);
          let y = savedScrollPositions[key];
          if (typeof y === "number") {
            return y;
          }
        }
        return null;
      }
      function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, void 0, manifest);
      }
      router = {
        get basename() {
          return basename;
        },
        get future() {
          return future;
        },
        get state() {
          return state;
        },
        get routes() {
          return dataRoutes;
        },
        get window() {
          return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch: fetch2,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to) => init.history.createHref(to),
        encodeLocation: (to) => init.history.encodeLocation(to),
        getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose,
        getBlocker,
        deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
      };
      return router;
    }
    var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
    function createStaticHandler(routes2, opts) {
      invariant(routes2.length > 0, "You must provide a non-empty routes array to createStaticHandler");
      let manifest = {};
      let basename = (opts ? opts.basename : null) || "/";
      let mapRouteProperties;
      if (opts != null && opts.mapRouteProperties) {
        mapRouteProperties = opts.mapRouteProperties;
      } else if (opts != null && opts.detectErrorBoundary) {
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route) => ({
          hasErrorBoundary: detectErrorBoundary(route)
        });
      } else {
        mapRouteProperties = defaultMapRouteProperties;
      }
      let future = _extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
      }, opts ? opts.future : null);
      let dataRoutes = convertRoutesToDataRoutes(routes2, mapRouteProperties, void 0, manifest);
      async function query(request, _temp3) {
        let {
          requestContext
        } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        if (!isValidMethod(method) && method !== "HEAD") {
          let error = getInternalRouterError(405, {
            method
          });
          let {
            matches: methodNotAllowedMatches,
            route
          } = getShortCircuitMatches(dataRoutes);
          return {
            basename,
            location,
            matches: methodNotAllowedMatches,
            loaderData: {},
            actionData: null,
            errors: {
              [route.id]: error
            },
            statusCode: error.status,
            loaderHeaders: {},
            actionHeaders: {},
            activeDeferreds: null
          };
        } else if (!matches) {
          let error = getInternalRouterError(404, {
            pathname: location.pathname
          });
          let {
            matches: notFoundMatches,
            route
          } = getShortCircuitMatches(dataRoutes);
          return {
            basename,
            location,
            matches: notFoundMatches,
            loaderData: {},
            actionData: null,
            errors: {
              [route.id]: error
            },
            statusCode: error.status,
            loaderHeaders: {},
            actionHeaders: {},
            activeDeferreds: null
          };
        }
        let result = await queryImpl(request, location, matches, requestContext);
        if (isResponse(result)) {
          return result;
        }
        return _extends({
          location,
          basename
        }, result);
      }
      async function queryRoute(request, _temp4) {
        let {
          routeId,
          requestContext
        } = _temp4 === void 0 ? {} : _temp4;
        let url = new URL(request.url);
        let method = request.method;
        let location = createLocation("", createPath(url), null, "default");
        let matches = matchRoutes(dataRoutes, location, basename);
        if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
          throw getInternalRouterError(405, {
            method
          });
        } else if (!matches) {
          throw getInternalRouterError(404, {
            pathname: location.pathname
          });
        }
        let match2 = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
        if (routeId && !match2) {
          throw getInternalRouterError(403, {
            pathname: location.pathname,
            routeId
          });
        } else if (!match2) {
          throw getInternalRouterError(404, {
            pathname: location.pathname
          });
        }
        let result = await queryImpl(request, location, matches, requestContext, match2);
        if (isResponse(result)) {
          return result;
        }
        let error = result.errors ? Object.values(result.errors)[0] : void 0;
        if (error !== void 0) {
          throw error;
        }
        if (result.actionData) {
          return Object.values(result.actionData)[0];
        }
        if (result.loaderData) {
          var _result$activeDeferre;
          let data = Object.values(result.loaderData)[0];
          if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match2.route.id]) {
            data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match2.route.id];
          }
          return data;
        }
        return void 0;
      }
      async function queryImpl(request, location, matches, requestContext, routeMatch) {
        invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
          if (isMutationMethod(request.method.toLowerCase())) {
            let result2 = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
            return result2;
          }
          let result = await loadRouteData(request, matches, requestContext, routeMatch);
          return isResponse(result) ? result : _extends({}, result, {
            actionData: null,
            actionHeaders: {}
          });
        } catch (e) {
          if (isQueryRouteResponse(e)) {
            if (e.type === ResultType.error) {
              throw e.response;
            }
            return e.response;
          }
          if (isRedirectResponse(e)) {
            return e;
          }
          throw e;
        }
      }
      async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
          let error = getInternalRouterError(405, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: actionMatch.route.id
          });
          if (isRouteRequest) {
            throw error;
          }
          result = {
            type: ResultType.error,
            error
          };
        } else {
          result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
            isStaticRequest: true,
            isRouteRequest,
            requestContext
          });
          if (request.signal.aborted) {
            throwStaticHandlerAbortedError(request, isRouteRequest, future);
          }
        }
        if (isRedirectResult(result)) {
          throw new Response(null, {
            status: result.status,
            headers: {
              Location: result.location
            }
          });
        }
        if (isDeferredResult(result)) {
          let error = getInternalRouterError(400, {
            type: "defer-action"
          });
          if (isRouteRequest) {
            throw error;
          }
          result = {
            type: ResultType.error,
            error
          };
        }
        if (isRouteRequest) {
          if (isErrorResult(result)) {
            throw result.error;
          }
          return {
            matches: [actionMatch],
            loaderData: {},
            actionData: {
              [actionMatch.route.id]: result.data
            },
            errors: null,
            // Note: statusCode + headers are unused here since queryRoute will
            // return the raw Response or value
            statusCode: 200,
            loaderHeaders: {},
            actionHeaders: {},
            activeDeferreds: null
          };
        }
        if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
          let context2 = await loadRouteData(request, matches, requestContext, void 0, {
            [boundaryMatch.route.id]: result.error
          });
          return _extends({}, context2, {
            statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
            actionData: null,
            actionHeaders: _extends({}, result.headers ? {
              [actionMatch.route.id]: result.headers
            } : {})
          });
        }
        let loaderRequest = new Request(request.url, {
          headers: request.headers,
          redirect: request.redirect,
          signal: request.signal
        });
        let context = await loadRouteData(loaderRequest, matches, requestContext);
        return _extends({}, context, result.statusCode ? {
          statusCode: result.statusCode
        } : {}, {
          actionData: {
            [actionMatch.route.id]: result.data
          },
          actionHeaders: _extends({}, result.headers ? {
            [actionMatch.route.id]: result.headers
          } : {})
        });
      }
      async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
        let isRouteRequest = routeMatch != null;
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
          throw getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
          });
        }
        let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
        let matchesToLoad = requestMatches.filter((m) => m.route.loader || m.route.lazy);
        if (matchesToLoad.length === 0) {
          return {
            matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m) => Object.assign(acc, {
              [m.route.id]: null
            }), {}),
            errors: pendingActionError || null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
          };
        }
        let results = await Promise.all([...matchesToLoad.map((match2) => callLoaderOrAction("loader", request, match2, matches, manifest, mapRouteProperties, basename, future.v7_relativeSplatPath, {
          isStaticRequest: true,
          isRouteRequest,
          requestContext
        }))]);
        if (request.signal.aborted) {
          throwStaticHandlerAbortedError(request, isRouteRequest, future);
        }
        let activeDeferreds = /* @__PURE__ */ new Map();
        let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
        let executedLoaders = new Set(matchesToLoad.map((match2) => match2.route.id));
        matches.forEach((match2) => {
          if (!executedLoaders.has(match2.route.id)) {
            context.loaderData[match2.route.id] = null;
          }
        });
        return _extends({}, context, {
          matches,
          activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
      }
      return {
        dataRoutes,
        query,
        queryRoute
      };
    }
    function getStaticContextFromError(routes2, context, error) {
      let newContext = _extends({}, context, {
        statusCode: isRouteErrorResponse(error) ? error.status : 500,
        errors: {
          [context._deepestRenderedBoundaryId || routes2[0].id]: error
        }
      });
      return newContext;
    }
    function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
      if (future.v7_throwAbortReason && request.signal.reason !== void 0) {
        throw request.signal.reason;
      }
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    function isSubmissionNavigation(opts) {
      return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
    }
    function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
      let contextualMatches;
      let activeRouteMatch;
      if (fromRouteId) {
        contextualMatches = [];
        for (let match2 of matches) {
          contextualMatches.push(match2);
          if (match2.route.id === fromRouteId) {
            activeRouteMatch = match2;
            break;
          }
        }
      } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
      }
      let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
      if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
      }
      if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
      }
      if (prependBasename && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      return createPath(path);
    }
    function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
      if (!opts || !isSubmissionNavigation(opts)) {
        return {
          path
        };
      }
      if (opts.formMethod && !isValidMethod(opts.formMethod)) {
        return {
          path,
          error: getInternalRouterError(405, {
            method: opts.formMethod
          })
        };
      }
      let getInvalidBodyError = () => ({
        path,
        error: getInternalRouterError(400, {
          type: "invalid-body"
        })
      });
      let rawFormMethod = opts.formMethod || "get";
      let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
      let formAction = stripHashFromPath(path);
      if (opts.body !== void 0) {
        if (opts.formEncType === "text/plain") {
          if (!isMutationMethod(formMethod)) {
            return getInvalidBodyError();
          }
          let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
            // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, _ref3) => {
              let [name, value] = _ref3;
              return "" + acc + name + "=" + value + "\n";
            }, "")
          ) : String(opts.body);
          return {
            path,
            submission: {
              formMethod,
              formAction,
              formEncType: opts.formEncType,
              formData: void 0,
              json: void 0,
              text
            }
          };
        } else if (opts.formEncType === "application/json") {
          if (!isMutationMethod(formMethod)) {
            return getInvalidBodyError();
          }
          try {
            let json2 = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
            return {
              path,
              submission: {
                formMethod,
                formAction,
                formEncType: opts.formEncType,
                formData: void 0,
                json: json2,
                text: void 0
              }
            };
          } catch (e) {
            return getInvalidBodyError();
          }
        }
      }
      invariant(typeof FormData === "function", "FormData is not available in this environment");
      let searchParams;
      let formData;
      if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
      } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
      } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
      } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
      } else {
        try {
          searchParams = new URLSearchParams(opts.body);
          formData = convertSearchParamsToFormData(searchParams);
        } catch (e) {
          return getInvalidBodyError();
        }
      }
      let submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: void 0,
        text: void 0
      };
      if (isMutationMethod(submission.formMethod)) {
        return {
          path,
          submission
        };
      }
      let parsedPath = parsePath(path);
      if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
        searchParams.append("index", "");
      }
      parsedPath.search = "?" + searchParams;
      return {
        path: createPath(parsedPath),
        submission
      };
    }
    function getLoaderMatchesUntilBoundary(matches, boundaryId) {
      let boundaryMatches = matches;
      if (boundaryId) {
        let index = matches.findIndex((m) => m.route.id === boundaryId);
        if (index >= 0) {
          boundaryMatches = matches.slice(0, index);
        }
      }
      return boundaryMatches;
    }
    function getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
      let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : void 0;
      let currentUrl = history.createURL(state.location);
      let nextUrl = history.createURL(location);
      let boundaryId = pendingError ? Object.keys(pendingError)[0] : void 0;
      let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
      let navigationMatches = boundaryMatches.filter((match2, index) => {
        let {
          route
        } = match2;
        if (route.lazy) {
          return true;
        }
        if (route.loader == null) {
          return false;
        }
        if (isInitialLoad) {
          if (route.loader.hydrate) {
            return true;
          }
          return state.loaderData[route.id] === void 0 && // Don't re-run if the loader ran and threw an error
          (!state.errors || state.errors[route.id] === void 0);
        }
        if (isNewLoader(state.loaderData, state.matches[index], match2) || cancelledDeferredRoutes.some((id) => id === match2.route.id)) {
          return true;
        }
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match2;
        return shouldRevalidateLoader(match2, _extends({
          currentUrl,
          currentParams: currentRouteMatch.params,
          nextUrl,
          nextParams: nextRouteMatch.params
        }, submission, {
          actionResult,
          defaultShouldRevalidate: (
            // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || // Clicked the same link, resubmitted a GET form
            currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
          )
        }));
      });
      let revalidatingFetchers = [];
      fetchLoadMatches.forEach((f, key) => {
        if (isInitialLoad || !matches.some((m) => m.route.id === f.routeId) || deletedFetchers.has(key)) {
          return;
        }
        let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        if (!fetcherMatches) {
          revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: null,
            match: null,
            controller: null
          });
          return;
        }
        let fetcher = state.fetchers.get(key);
        let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        let shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) {
          shouldRevalidate = false;
        } else if (cancelledFetcherLoads.includes(key)) {
          shouldRevalidate = true;
        } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
          shouldRevalidate = isRevalidationRequired;
        } else {
          shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
            currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl,
            nextParams: matches[matches.length - 1].params
          }, submission, {
            actionResult,
            defaultShouldRevalidate: isRevalidationRequired
          }));
        }
        if (shouldRevalidate) {
          revalidatingFetchers.push({
            key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
          });
        }
      });
      return [navigationMatches, revalidatingFetchers];
    }
    function isNewLoader(currentLoaderData, currentMatch, match2) {
      let isNew = (
        // [a] -> [a, b]
        !currentMatch || // [a, b] -> [a, c]
        match2.route.id !== currentMatch.route.id
      );
      let isMissingData = currentLoaderData[match2.route.id] === void 0;
      return isNew || isMissingData;
    }
    function isNewRouteInstance(currentMatch, match2) {
      let currentPath = currentMatch.route.path;
      return (
        // param change for this match, /users/123 -> /users/456
        currentMatch.pathname !== match2.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match2.params["*"]
      );
    }
    function shouldRevalidateLoader(loaderMatch, arg) {
      if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return arg.defaultShouldRevalidate;
    }
    async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
      if (!route.lazy) {
        return;
      }
      let lazyRoute = await route.lazy();
      if (!route.lazy) {
        return;
      }
      let routeToUpdate = manifest[route.id];
      invariant(routeToUpdate, "No route found in manifest");
      let routeUpdates = {};
      for (let lazyRouteProperty in lazyRoute) {
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
          routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
        }
      }
      Object.assign(routeToUpdate, routeUpdates);
      Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
        lazy: void 0
      }));
    }
    async function callLoaderOrAction(type, request, match2, matches, manifest, mapRouteProperties, basename, v7_relativeSplatPath, opts) {
      if (opts === void 0) {
        opts = {};
      }
      let resultType;
      let result;
      let onReject;
      let runHandler = (handler) => {
        let reject;
        let abortPromise = new Promise((_, r) => reject = r);
        onReject = () => reject();
        request.signal.addEventListener("abort", onReject);
        return Promise.race([handler({
          request,
          params: match2.params,
          context: opts.requestContext
        }), abortPromise]);
      };
      try {
        let handler = match2.route[type];
        if (match2.route.lazy) {
          if (handler) {
            let handlerError;
            let values = await Promise.all([
              // If the handler throws, don't let it immediately bubble out,
              // since we need to let the lazy() execution finish so we know if this
              // route has a boundary that can handle the error
              runHandler(handler).catch((e) => {
                handlerError = e;
              }),
              loadLazyRouteModule(match2.route, mapRouteProperties, manifest)
            ]);
            if (handlerError) {
              throw handlerError;
            }
            result = values[0];
          } else {
            await loadLazyRouteModule(match2.route, mapRouteProperties, manifest);
            handler = match2.route[type];
            if (handler) {
              result = await runHandler(handler);
            } else if (type === "action") {
              let url = new URL(request.url);
              let pathname = url.pathname + url.search;
              throw getInternalRouterError(405, {
                method: request.method,
                pathname,
                routeId: match2.route.id
              });
            } else {
              return {
                type: ResultType.data,
                data: void 0
              };
            }
          }
        } else if (!handler) {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(404, {
            pathname
          });
        } else {
          result = await runHandler(handler);
        }
        invariant(result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match2.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
      } catch (e) {
        resultType = ResultType.error;
        result = e;
      } finally {
        if (onReject) {
          request.signal.removeEventListener("abort", onReject);
        }
      }
      if (isResponse(result)) {
        let status = result.status;
        if (redirectStatusCodes.has(status)) {
          let location = result.headers.get("Location");
          invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
          if (!ABSOLUTE_URL_REGEX.test(location)) {
            location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match2) + 1), basename, true, location, v7_relativeSplatPath);
          } else if (!opts.isStaticRequest) {
            let currentUrl = new URL(request.url);
            let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
            let isSameBasename = stripBasename(url.pathname, basename) != null;
            if (url.origin === currentUrl.origin && isSameBasename) {
              location = url.pathname + url.search + url.hash;
            }
          }
          if (opts.isStaticRequest) {
            result.headers.set("Location", location);
            throw result;
          }
          return {
            type: ResultType.redirect,
            status,
            location,
            revalidate: result.headers.get("X-Remix-Revalidate") !== null,
            reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
          };
        }
        if (opts.isRouteRequest) {
          let queryRouteResponse = {
            type: resultType === ResultType.error ? ResultType.error : ResultType.data,
            response: result
          };
          throw queryRouteResponse;
        }
        let data;
        try {
          let contentType = result.headers.get("Content-Type");
          if (contentType && /\bapplication\/json\b/.test(contentType)) {
            if (result.body == null) {
              data = null;
            } else {
              data = await result.json();
            }
          } else {
            data = await result.text();
          }
        } catch (e) {
          return {
            type: ResultType.error,
            error: e
          };
        }
        if (resultType === ResultType.error) {
          return {
            type: resultType,
            error: new ErrorResponseImpl(status, result.statusText, data),
            headers: result.headers
          };
        }
        return {
          type: ResultType.data,
          data,
          statusCode: result.status,
          headers: result.headers
        };
      }
      if (resultType === ResultType.error) {
        return {
          type: resultType,
          error: result
        };
      }
      if (isDeferredData(result)) {
        var _result$init, _result$init2;
        return {
          type: ResultType.deferred,
          deferredData: result,
          statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
          headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
        };
      }
      return {
        type: ResultType.data,
        data: result
      };
    }
    function createClientSideRequest(history, location, signal, submission) {
      let url = history.createURL(stripHashFromPath(location)).toString();
      let init = {
        signal
      };
      if (submission && isMutationMethod(submission.formMethod)) {
        let {
          formMethod,
          formEncType
        } = submission;
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
          init.headers = new Headers({
            "Content-Type": formEncType
          });
          init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") {
          init.body = submission.text;
        } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
          init.body = convertFormDataToSearchParams(submission.formData);
        } else {
          init.body = submission.formData;
        }
      }
      return new Request(url, init);
    }
    function convertFormDataToSearchParams(formData) {
      let searchParams = new URLSearchParams();
      for (let [key, value] of formData.entries()) {
        searchParams.append(key, typeof value === "string" ? value : value.name);
      }
      return searchParams;
    }
    function convertSearchParamsToFormData(searchParams) {
      let formData = new FormData();
      for (let [key, value] of searchParams.entries()) {
        formData.append(key, value);
      }
      return formData;
    }
    function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
      let loaderData = {};
      let errors = null;
      let statusCode;
      let foundError = false;
      let loaderHeaders = {};
      results.forEach((result, index) => {
        let id = matchesToLoad[index].route.id;
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(matches, id);
          let error = result.error;
          if (pendingError) {
            error = Object.values(pendingError)[0];
            pendingError = void 0;
          }
          errors = errors || {};
          if (errors[boundaryMatch.route.id] == null) {
            errors[boundaryMatch.route.id] = error;
          }
          loaderData[id] = void 0;
          if (!foundError) {
            foundError = true;
            statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
          }
          if (result.headers) {
            loaderHeaders[id] = result.headers;
          }
        } else {
          if (isDeferredResult(result)) {
            activeDeferreds.set(id, result.deferredData);
            loaderData[id] = result.deferredData.data;
          } else {
            loaderData[id] = result.data;
          }
          if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
            statusCode = result.statusCode;
          }
          if (result.headers) {
            loaderHeaders[id] = result.headers;
          }
        }
      });
      if (pendingError) {
        errors = pendingError;
        loaderData[Object.keys(pendingError)[0]] = void 0;
      }
      return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
      };
    }
    function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
      let {
        loaderData,
        errors
      } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
      for (let index = 0; index < revalidatingFetchers.length; index++) {
        let {
          key,
          match: match2,
          controller
        } = revalidatingFetchers[index];
        invariant(fetcherResults !== void 0 && fetcherResults[index] !== void 0, "Did not find corresponding fetcher result");
        let result = fetcherResults[index];
        if (controller && controller.signal.aborted) {
          continue;
        } else if (isErrorResult(result)) {
          let boundaryMatch = findNearestBoundary(state.matches, match2 == null ? void 0 : match2.route.id);
          if (!(errors && errors[boundaryMatch.route.id])) {
            errors = _extends({}, errors, {
              [boundaryMatch.route.id]: result.error
            });
          }
          state.fetchers.delete(key);
        } else if (isRedirectResult(result)) {
          invariant(false, "Unhandled fetcher revalidation redirect");
        } else if (isDeferredResult(result)) {
          invariant(false, "Unhandled fetcher deferred data");
        } else {
          let doneFetcher = getDoneFetcher(result.data);
          state.fetchers.set(key, doneFetcher);
        }
      }
      return {
        loaderData,
        errors
      };
    }
    function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
      let mergedLoaderData = _extends({}, newLoaderData);
      for (let match2 of matches) {
        let id = match2.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
          if (newLoaderData[id] !== void 0) {
            mergedLoaderData[id] = newLoaderData[id];
          }
        } else if (loaderData[id] !== void 0 && match2.route.loader) {
          mergedLoaderData[id] = loaderData[id];
        }
        if (errors && errors.hasOwnProperty(id)) {
          break;
        }
      }
      return mergedLoaderData;
    }
    function findNearestBoundary(matches, routeId) {
      let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
      return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
    }
    function getShortCircuitMatches(routes2) {
      let route = routes2.length === 1 ? routes2[0] : routes2.find((r) => r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
      };
      return {
        matches: [{
          params: {},
          pathname: "",
          pathnameBase: "",
          route
        }],
        route
      };
    }
    function getInternalRouterError(status, _temp5) {
      let {
        pathname,
        routeId,
        method,
        type
      } = _temp5 === void 0 ? {} : _temp5;
      let statusText = "Unknown Server Error";
      let errorMessage = "Unknown @remix-run/router error";
      if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) {
          errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        } else if (type === "defer-action") {
          errorMessage = "defer() is not supported in actions";
        } else if (type === "invalid-body") {
          errorMessage = "Unable to encode submission body";
        }
      } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
      } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
      } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) {
          errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        } else if (method) {
          errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
        }
      }
      return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
    }
    function findRedirect(results) {
      for (let i = results.length - 1; i >= 0; i--) {
        let result = results[i];
        if (isRedirectResult(result)) {
          return {
            result,
            idx: i
          };
        }
      }
    }
    function stripHashFromPath(path) {
      let parsedPath = typeof path === "string" ? parsePath(path) : path;
      return createPath(_extends({}, parsedPath, {
        hash: ""
      }));
    }
    function isHashChangeOnly(a, b) {
      if (a.pathname !== b.pathname || a.search !== b.search) {
        return false;
      }
      if (a.hash === "") {
        return b.hash !== "";
      } else if (a.hash === b.hash) {
        return true;
      } else if (b.hash !== "") {
        return true;
      }
      return false;
    }
    function isDeferredResult(result) {
      return result.type === ResultType.deferred;
    }
    function isErrorResult(result) {
      return result.type === ResultType.error;
    }
    function isRedirectResult(result) {
      return (result && result.type) === ResultType.redirect;
    }
    function isDeferredData(value) {
      let deferred = value;
      return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
    }
    function isResponse(value) {
      return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
    }
    function isRedirectResponse(result) {
      if (!isResponse(result)) {
        return false;
      }
      let status = result.status;
      let location = result.headers.get("Location");
      return status >= 300 && status <= 399 && location != null;
    }
    function isQueryRouteResponse(obj) {
      return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
    }
    function isValidMethod(method) {
      return validRequestMethods.has(method.toLowerCase());
    }
    function isMutationMethod(method) {
      return validMutationMethods.has(method.toLowerCase());
    }
    async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
      for (let index = 0; index < results.length; index++) {
        let result = results[index];
        let match2 = matchesToLoad[index];
        if (!match2) {
          continue;
        }
        let currentMatch = currentMatches.find((m) => m.route.id === match2.route.id);
        let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match2) && (currentLoaderData && currentLoaderData[match2.route.id]) !== void 0;
        if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
          let signal = signals[index];
          invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
          await resolveDeferredData(result, signal, isFetcher).then((result2) => {
            if (result2) {
              results[index] = result2 || results[index];
            }
          });
        }
      }
    }
    async function resolveDeferredData(result, signal, unwrap) {
      if (unwrap === void 0) {
        unwrap = false;
      }
      let aborted = await result.deferredData.resolveData(signal);
      if (aborted) {
        return;
      }
      if (unwrap) {
        try {
          return {
            type: ResultType.data,
            data: result.deferredData.unwrappedData
          };
        } catch (e) {
          return {
            type: ResultType.error,
            error: e
          };
        }
      }
      return {
        type: ResultType.data,
        data: result.deferredData.data
      };
    }
    function hasNakedIndexQuery(search) {
      return new URLSearchParams(search).getAll("index").some((v) => v === "");
    }
    function getTargetMatch(matches, location) {
      let search = typeof location === "string" ? parsePath(location).search : location.search;
      if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
        return matches[matches.length - 1];
      }
      let pathMatches = getPathContributingMatches(matches);
      return pathMatches[pathMatches.length - 1];
    }
    function getSubmissionFromNavigation(navigation) {
      let {
        formMethod,
        formAction,
        formEncType,
        text,
        formData,
        json: json2
      } = navigation;
      if (!formMethod || !formAction || !formEncType) {
        return;
      }
      if (text != null) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData: void 0,
          json: void 0,
          text
        };
      } else if (formData != null) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData,
          json: void 0,
          text: void 0
        };
      } else if (json2 !== void 0) {
        return {
          formMethod,
          formAction,
          formEncType,
          formData: void 0,
          json: json2,
          text: void 0
        };
      }
    }
    function getLoadingNavigation(location, submission) {
      if (submission) {
        let navigation = {
          state: "loading",
          location,
          formMethod: submission.formMethod,
          formAction: submission.formAction,
          formEncType: submission.formEncType,
          formData: submission.formData,
          json: submission.json,
          text: submission.text
        };
        return navigation;
      } else {
        let navigation = {
          state: "loading",
          location,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0
        };
        return navigation;
      }
    }
    function getSubmittingNavigation(location, submission) {
      let navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
      };
      return navigation;
    }
    function getLoadingFetcher(submission, data) {
      if (submission) {
        let fetcher = {
          state: "loading",
          formMethod: submission.formMethod,
          formAction: submission.formAction,
          formEncType: submission.formEncType,
          formData: submission.formData,
          json: submission.json,
          text: submission.text,
          data
        };
        return fetcher;
      } else {
        let fetcher = {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data
        };
        return fetcher;
      }
    }
    function getSubmittingFetcher(submission, existingFetcher) {
      let fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : void 0
      };
      return fetcher;
    }
    function getDoneFetcher(data) {
      let fetcher = {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data
      };
      return fetcher;
    }
    function restoreAppliedTransitions(_window, transitions) {
      try {
        let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
          let json2 = JSON.parse(sessionPositions);
          for (let [k, v] of Object.entries(json2 || {})) {
            if (v && Array.isArray(v)) {
              transitions.set(k, new Set(v || []));
            }
          }
        }
      } catch (e) {
      }
    }
    function persistAppliedTransitions(_window, transitions) {
      if (transitions.size > 0) {
        let json2 = {};
        for (let [k, v] of transitions) {
          json2[k] = [...v];
        }
        try {
          _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json2));
        } catch (error) {
          warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
      }
    }
    exports.AbortedDeferredError = AbortedDeferredError;
    exports.Action = Action;
    exports.IDLE_BLOCKER = IDLE_BLOCKER;
    exports.IDLE_FETCHER = IDLE_FETCHER;
    exports.IDLE_NAVIGATION = IDLE_NAVIGATION;
    exports.UNSAFE_DEFERRED_SYMBOL = UNSAFE_DEFERRED_SYMBOL;
    exports.UNSAFE_DeferredData = DeferredData;
    exports.UNSAFE_ErrorResponseImpl = ErrorResponseImpl;
    exports.UNSAFE_convertRouteMatchToUiMatch = convertRouteMatchToUiMatch;
    exports.UNSAFE_convertRoutesToDataRoutes = convertRoutesToDataRoutes;
    exports.UNSAFE_getResolveToMatches = getResolveToMatches;
    exports.UNSAFE_invariant = invariant;
    exports.UNSAFE_warning = warning;
    exports.createBrowserHistory = createBrowserHistory;
    exports.createHashHistory = createHashHistory;
    exports.createMemoryHistory = createMemoryHistory;
    exports.createPath = createPath;
    exports.createRouter = createRouter;
    exports.createStaticHandler = createStaticHandler;
    exports.defer = defer;
    exports.generatePath = generatePath;
    exports.getStaticContextFromError = getStaticContextFromError;
    exports.getToPathname = getToPathname;
    exports.isDeferredData = isDeferredData;
    exports.isRouteErrorResponse = isRouteErrorResponse;
    exports.joinPaths = joinPaths;
    exports.json = json;
    exports.matchPath = matchPath;
    exports.matchRoutes = matchRoutes;
    exports.normalizePathname = normalizePathname;
    exports.parsePath = parsePath;
    exports.redirect = redirect;
    exports.redirectDocument = redirectDocument;
    exports.resolvePath = resolvePath;
    exports.resolveTo = resolveTo;
    exports.stripBasename = stripBasename;
  }
});
var require_mode = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/mode.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServerMode = /* @__PURE__ */ function(ServerMode2) {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
      return ServerMode2;
    }({});
    function isServerMode(value) {
      return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
    }
    exports.ServerMode = ServerMode;
    exports.isServerMode = isServerMode;
  }
});
var require_errors = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/errors.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var router = require_router_cjs();
    var mode = require_mode();
    function sanitizeError(error, serverMode) {
      if (error instanceof Error && serverMode !== mode.ServerMode.Development) {
        let sanitized = new Error("Unexpected Server Error");
        sanitized.stack = void 0;
        return sanitized;
      }
      return error;
    }
    function sanitizeErrors(errors, serverMode) {
      return Object.entries(errors).reduce((acc, [routeId, error]) => {
        return Object.assign(acc, {
          [routeId]: sanitizeError(error, serverMode)
        });
      }, {});
    }
    function serializeError(error, serverMode) {
      let sanitized = sanitizeError(error, serverMode);
      return {
        message: sanitized.message,
        stack: sanitized.stack
      };
    }
    function serializeErrors(errors, serverMode) {
      if (!errors)
        return null;
      let entries = Object.entries(errors);
      let serialized = {};
      for (let [key, val] of entries) {
        if (router.isRouteErrorResponse(val)) {
          serialized[key] = {
            ...val,
            __type: "RouteErrorResponse"
          };
        } else if (val instanceof Error) {
          let sanitized = sanitizeError(val, serverMode);
          serialized[key] = {
            message: sanitized.message,
            stack: sanitized.stack,
            __type: "Error",
            // If this is a subclass (i.e., ReferenceError), send up the type so we
            // can re-create the same type during hydration.  This will only apply
            // in dev mode since all production errors are sanitized to normal
            // Error instances
            ...sanitized.name !== "Error" ? {
              __subType: sanitized.name
            } : {}
          };
        } else {
          serialized[key] = val;
        }
      }
      return serialized;
    }
    exports.sanitizeError = sanitizeError;
    exports.sanitizeErrors = sanitizeErrors;
    exports.serializeError = serializeError;
    exports.serializeErrors = serializeErrors;
  }
});
var require_responses = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/responses.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var router = require_router_cjs();
    var errors = require_errors();
    var json = (data, init = {}) => {
      return router.json(data, init);
    };
    var defer = (data, init = {}) => {
      return router.defer(data, init);
    };
    var redirect = (url, init = 302) => {
      return router.redirect(url, init);
    };
    var redirectDocument = (url, init = 302) => {
      return router.redirectDocument(url, init);
    };
    function isDeferredData(value) {
      let deferred = value;
      return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
    }
    function isResponse(value) {
      return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
    }
    var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    function isRedirectStatusCode(statusCode) {
      return redirectStatusCodes.has(statusCode);
    }
    function isRedirectResponse(response) {
      return isRedirectStatusCode(response.status);
    }
    function isTrackedPromise(value) {
      return value != null && typeof value.then === "function" && value._tracked === true;
    }
    var DEFERRED_VALUE_PLACEHOLDER_PREFIX = "__deferred_promise:";
    function createDeferredReadableStream(deferredData, signal, serverMode) {
      let encoder = new TextEncoder();
      let stream = new ReadableStream({
        async start(controller) {
          let criticalData = {};
          let preresolvedKeys = [];
          for (let [key, value] of Object.entries(deferredData.data)) {
            if (isTrackedPromise(value)) {
              criticalData[key] = `${DEFERRED_VALUE_PLACEHOLDER_PREFIX}${key}`;
              if (typeof value._data !== "undefined" || typeof value._error !== "undefined") {
                preresolvedKeys.push(key);
              }
            } else {
              criticalData[key] = value;
            }
          }
          controller.enqueue(encoder.encode(JSON.stringify(criticalData) + "\n\n"));
          for (let preresolvedKey of preresolvedKeys) {
            enqueueTrackedPromise(controller, encoder, preresolvedKey, deferredData.data[preresolvedKey], serverMode);
          }
          let unsubscribe = deferredData.subscribe((aborted, settledKey) => {
            if (settledKey) {
              enqueueTrackedPromise(controller, encoder, settledKey, deferredData.data[settledKey], serverMode);
            }
          });
          await deferredData.resolveData(signal);
          unsubscribe();
          controller.close();
        }
      });
      return stream;
    }
    function enqueueTrackedPromise(controller, encoder, settledKey, promise, serverMode) {
      if ("_error" in promise) {
        controller.enqueue(encoder.encode("error:" + JSON.stringify({
          [settledKey]: promise._error instanceof Error ? errors.serializeError(promise._error, serverMode) : promise._error
        }) + "\n\n"));
      } else {
        controller.enqueue(encoder.encode("data:" + JSON.stringify({
          [settledKey]: promise._data ?? null
        }) + "\n\n"));
      }
    }
    exports.createDeferredReadableStream = createDeferredReadableStream;
    exports.defer = defer;
    exports.isDeferredData = isDeferredData;
    exports.isRedirectResponse = isRedirectResponse;
    exports.isRedirectStatusCode = isRedirectStatusCode;
    exports.isResponse = isResponse;
    exports.json = json;
    exports.redirect = redirect;
    exports.redirectDocument = redirectDocument;
  }
});
var require_entry = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/entry.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    function createEntryRouteModules(manifest) {
      return Object.keys(manifest).reduce((memo, routeId) => {
        memo[routeId] = manifest[routeId].module;
        return memo;
      }, {});
    }
    exports.createEntryRouteModules = createEntryRouteModules;
  }
});
var require_set_cookie = __commonJS({
  "../node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString;
  }
});
var require_headers = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/headers.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var setCookieParser = require_set_cookie();
    function getDocumentHeadersRR(build2, context) {
      let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
      let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
      let errorHeaders;
      if (boundaryIdx >= 0) {
        let {
          actionHeaders,
          actionData,
          loaderHeaders,
          loaderData
        } = context;
        context.matches.slice(boundaryIdx).some((match2) => {
          let id = match2.route.id;
          if (actionHeaders[id] && (!actionData || actionData[id] === void 0)) {
            errorHeaders = actionHeaders[id];
          } else if (loaderHeaders[id] && loaderData[id] === void 0) {
            errorHeaders = loaderHeaders[id];
          }
          return errorHeaders != null;
        });
      }
      return matches.reduce((parentHeaders, match2, idx) => {
        let {
          id
        } = match2.route;
        let routeModule = build2.routes[id].module;
        let loaderHeaders = context.loaderHeaders[id] || new Headers();
        let actionHeaders = context.actionHeaders[id] || new Headers();
        let includeErrorHeaders = errorHeaders != void 0 && idx === matches.length - 1;
        let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
        if (routeModule.headers == null) {
          let headers2 = new Headers(parentHeaders);
          if (includeErrorCookies) {
            prependCookies(errorHeaders, headers2);
          }
          prependCookies(actionHeaders, headers2);
          prependCookies(loaderHeaders, headers2);
          return headers2;
        }
        let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
          loaderHeaders,
          parentHeaders,
          actionHeaders,
          errorHeaders: includeErrorHeaders ? errorHeaders : void 0
        }) : routeModule.headers : void 0);
        if (includeErrorCookies) {
          prependCookies(errorHeaders, headers);
        }
        prependCookies(actionHeaders, headers);
        prependCookies(loaderHeaders, headers);
        prependCookies(parentHeaders, headers);
        return headers;
      }, new Headers());
    }
    function prependCookies(parentHeaders, childHeaders) {
      let parentSetCookieString = parentHeaders.get("Set-Cookie");
      if (parentSetCookieString) {
        let cookies = setCookieParser.splitCookiesString(parentSetCookieString);
        cookies.forEach((cookie) => {
          childHeaders.append("Set-Cookie", cookie);
        });
      }
    }
    exports.getDocumentHeadersRR = getDocumentHeadersRR;
  }
});
var require_invariant = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/invariant.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new");
        throw new Error(message);
      }
    }
    exports["default"] = invariant;
  }
});
var require_routeMatching = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/routeMatching.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var router = require_router_cjs();
    function matchServerRoutes(routes2, pathname, basename) {
      let matches = router.matchRoutes(routes2, pathname, basename);
      if (!matches)
        return null;
      return matches.map((match2) => ({
        params: match2.params,
        pathname: match2.pathname,
        route: match2.route
      }));
    }
    exports.matchServerRoutes = matchServerRoutes;
  }
});
var require_data = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/data.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var responses = require_responses();
    async function callRouteActionRR({
      loadContext,
      action,
      params,
      request,
      routeId
    }) {
      let result = await action({
        request: stripDataParam(stripIndexParam(request)),
        context: loadContext,
        params
      });
      if (result === void 0) {
        throw new Error(`You defined an action for route "${routeId}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
      }
      return responses.isResponse(result) ? result : responses.json(result);
    }
    async function callRouteLoaderRR({
      loadContext,
      loader,
      params,
      request,
      routeId
    }) {
      let result = await loader({
        request: stripDataParam(stripIndexParam(request)),
        context: loadContext,
        params
      });
      if (result === void 0) {
        throw new Error(`You defined a loader for route "${routeId}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
      }
      if (responses.isDeferredData(result)) {
        if (result.init && responses.isRedirectStatusCode(result.init.status || 200)) {
          return responses.redirect(new Headers(result.init.headers).get("Location"), result.init);
        }
        return result;
      }
      return responses.isResponse(result) ? result : responses.json(result);
    }
    function stripIndexParam(request) {
      let url = new URL(request.url);
      let indexValues = url.searchParams.getAll("index");
      url.searchParams.delete("index");
      let indexValuesToKeep = [];
      for (let indexValue of indexValues) {
        if (indexValue) {
          indexValuesToKeep.push(indexValue);
        }
      }
      for (let toKeep of indexValuesToKeep) {
        url.searchParams.append("index", toKeep);
      }
      let init = {
        method: request.method,
        body: request.body,
        headers: request.headers,
        signal: request.signal
      };
      if (init.body) {
        init.duplex = "half";
      }
      return new Request(url.href, init);
    }
    function stripDataParam(request) {
      let url = new URL(request.url);
      url.searchParams.delete("_data");
      let init = {
        method: request.method,
        body: request.body,
        headers: request.headers,
        signal: request.signal
      };
      if (init.body) {
        init.duplex = "half";
      }
      return new Request(url.href, init);
    }
    exports.callRouteActionRR = callRouteActionRR;
    exports.callRouteLoaderRR = callRouteLoaderRR;
  }
});
var require_routes = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/routes.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = require_data();
    function groupRoutesByParentId(manifest) {
      let routes2 = {};
      Object.values(manifest).forEach((route) => {
        let parentId = route.parentId || "";
        if (!routes2[parentId]) {
          routes2[parentId] = [];
        }
        routes2[parentId].push(route);
      });
      return routes2;
    }
    function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
      return (routesByParentId[parentId] || []).map((route) => ({
        ...route,
        children: createRoutes(manifest, route.id, routesByParentId)
      }));
    }
    function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
      return (routesByParentId[parentId] || []).map((route) => {
        let commonRoute = {
          // Always include root due to default boundaries
          hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
          id: route.id,
          path: route.path,
          loader: route.module.loader ? (
            // Need to use RR's version here to permit the optional context even
            // though we know it'll always be provided in remix
            (args) => data.callRouteLoaderRR({
              request: args.request,
              params: args.params,
              loadContext: args.context,
              loader: route.module.loader,
              routeId: route.id
            })
          ) : void 0,
          action: route.module.action ? (args) => data.callRouteActionRR({
            request: args.request,
            params: args.params,
            loadContext: args.context,
            action: route.module.action,
            routeId: route.id
          }) : void 0,
          handle: route.module.handle
        };
        return route.index ? {
          index: true,
          ...commonRoute
        } : {
          caseSensitive: route.caseSensitive,
          children: createStaticHandlerDataRoutes(manifest, future, route.id, routesByParentId),
          ...commonRoute
        };
      });
    }
    exports.createRoutes = createRoutes;
    exports.createStaticHandlerDataRoutes = createStaticHandlerDataRoutes;
  }
});
var require_markup = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/markup.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ESCAPE_LOOKUP = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
    function escapeHtml(html) {
      return html.replace(ESCAPE_REGEX, (match2) => ESCAPE_LOOKUP[match2]);
    }
    exports.escapeHtml = escapeHtml;
  }
});
var require_serverHandoff = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/serverHandoff.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var markup = require_markup();
    function createServerHandoffString(serverHandoff) {
      return markup.escapeHtml(JSON.stringify(serverHandoff));
    }
    exports.createServerHandoffString = createServerHandoffString;
  }
});
var require_dev = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/dev.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    async function broadcastDevReady(build2, origin) {
      origin ??= process.env.REMIX_DEV_ORIGIN;
      if (!origin)
        throw Error("Dev server origin not set");
      let url = new URL(origin);
      url.pathname = "ping";
      let response = await fetch(url.href, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          buildHash: build2.assets.version
        })
      }).catch((error) => {
        console.error(`Could not reach Remix dev server at ${url}`);
        throw error;
      });
      if (!response.ok) {
        console.error(`Could not reach Remix dev server at ${url} (${response.status})`);
        throw Error(await response.text());
      }
    }
    function logDevReady(build2) {
      console.log(`[REMIX DEV] ${build2.assets.version} ready`);
    }
    var globalDevServerHooksKey = "__remix_devServerHooks";
    function setDevServerHooks(devServerHooks) {
      globalThis[globalDevServerHooksKey] = devServerHooks;
    }
    function getDevServerHooks() {
      return globalThis[globalDevServerHooksKey];
    }
    exports.broadcastDevReady = broadcastDevReady;
    exports.getDevServerHooks = getDevServerHooks;
    exports.logDevReady = logDevReady;
    exports.setDevServerHooks = setDevServerHooks;
  }
});
var require_server = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/server.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var router = require_router_cjs();
    var entry = require_entry();
    var errors = require_errors();
    var headers = require_headers();
    var invariant = require_invariant();
    var mode = require_mode();
    var routeMatching = require_routeMatching();
    var routes2 = require_routes();
    var responses = require_responses();
    var serverHandoff = require_serverHandoff();
    var dev = require_dev();
    function derive(build2, mode$1) {
      var _build$future, _build$future2;
      let routes$1 = routes2.createRoutes(build2.routes);
      let dataRoutes = routes2.createStaticHandlerDataRoutes(build2.routes, build2.future);
      let serverMode = mode.isServerMode(mode$1) ? mode$1 : mode.ServerMode.Production;
      let staticHandler = router.createStaticHandler(dataRoutes, {
        basename: build2.basename,
        future: {
          v7_relativeSplatPath: ((_build$future = build2.future) === null || _build$future === void 0 ? void 0 : _build$future.v3_relativeSplatPath) === true,
          v7_throwAbortReason: ((_build$future2 = build2.future) === null || _build$future2 === void 0 ? void 0 : _build$future2.v3_throwAbortReason) === true
        }
      });
      let errorHandler = build2.entry.module.handleError || ((error, {
        request
      }) => {
        if (serverMode !== mode.ServerMode.Test && !request.signal.aborted) {
          console.error(
            // @ts-expect-error This is "private" from users but intended for internal use
            router.isRouteErrorResponse(error) && error.error ? error.error : error
          );
        }
      });
      return {
        routes: routes$1,
        dataRoutes,
        serverMode,
        staticHandler,
        errorHandler
      };
    }
    var createRequestHandler2 = (build2, mode$1) => {
      let _build;
      let routes3;
      let serverMode;
      let staticHandler;
      let errorHandler;
      return async function requestHandler(request, loadContext = {}) {
        _build = typeof build2 === "function" ? await build2() : build2;
        mode$1 ??= _build.mode;
        if (typeof build2 === "function") {
          let derived = derive(_build, mode$1);
          routes3 = derived.routes;
          serverMode = derived.serverMode;
          staticHandler = derived.staticHandler;
          errorHandler = derived.errorHandler;
        } else if (!routes3 || !serverMode || !staticHandler || !errorHandler) {
          let derived = derive(_build, mode$1);
          routes3 = derived.routes;
          serverMode = derived.serverMode;
          staticHandler = derived.staticHandler;
          errorHandler = derived.errorHandler;
        }
        let url = new URL(request.url);
        let matches = routeMatching.matchServerRoutes(routes3, url.pathname, _build.basename);
        let handleError = (error) => {
          if (mode$1 === mode.ServerMode.Development) {
            var _getDevServerHooks, _getDevServerHooks$pr;
            (_getDevServerHooks = dev.getDevServerHooks()) === null || _getDevServerHooks === void 0 ? void 0 : (_getDevServerHooks$pr = _getDevServerHooks.processRequestError) === null || _getDevServerHooks$pr === void 0 ? void 0 : _getDevServerHooks$pr.call(_getDevServerHooks, error);
          }
          errorHandler(error, {
            context: loadContext,
            params: matches && matches.length > 0 ? matches[0].params : {},
            request
          });
        };
        let response;
        if (url.searchParams.has("_data")) {
          let routeId = url.searchParams.get("_data");
          response = await handleDataRequestRR(serverMode, _build, staticHandler, routeId, request, loadContext, handleError);
          if (_build.entry.module.handleDataRequest) {
            var _matches$find;
            response = await _build.entry.module.handleDataRequest(response, {
              context: loadContext,
              params: (matches === null || matches === void 0 ? void 0 : (_matches$find = matches.find((m) => m.route.id == routeId)) === null || _matches$find === void 0 ? void 0 : _matches$find.params) || {},
              request
            });
          }
        } else if (matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
          response = await handleResourceRequestRR(serverMode, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError);
        } else {
          var _getDevServerHooks2, _getDevServerHooks2$g;
          let criticalCss = mode$1 === mode.ServerMode.Development ? await ((_getDevServerHooks2 = dev.getDevServerHooks()) === null || _getDevServerHooks2 === void 0 ? void 0 : (_getDevServerHooks2$g = _getDevServerHooks2.getCriticalCss) === null || _getDevServerHooks2$g === void 0 ? void 0 : _getDevServerHooks2$g.call(_getDevServerHooks2, _build, url.pathname)) : void 0;
          response = await handleDocumentRequestRR(serverMode, _build, staticHandler, request, loadContext, handleError, criticalCss);
        }
        if (request.method === "HEAD") {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    };
    async function handleDataRequestRR(serverMode, build2, staticHandler, routeId, request, loadContext, handleError) {
      try {
        let response = await staticHandler.queryRoute(request, {
          routeId,
          requestContext: loadContext
        });
        if (responses.isRedirectResponse(response)) {
          let headers2 = new Headers(response.headers);
          let redirectUrl = headers2.get("Location");
          headers2.set("X-Remix-Redirect", build2.basename ? router.stripBasename(redirectUrl, build2.basename) || redirectUrl : redirectUrl);
          headers2.set("X-Remix-Status", response.status);
          headers2.delete("Location");
          if (response.headers.get("Set-Cookie") !== null) {
            headers2.set("X-Remix-Revalidate", "yes");
          }
          return new Response(null, {
            status: 204,
            headers: headers2
          });
        }
        if (router.UNSAFE_DEFERRED_SYMBOL in response) {
          let deferredData = response[router.UNSAFE_DEFERRED_SYMBOL];
          let body = responses.createDeferredReadableStream(deferredData, request.signal, serverMode);
          let init = deferredData.init || {};
          let headers2 = new Headers(init.headers);
          headers2.set("Content-Type", "text/remix-deferred");
          headers2.set("X-Remix-Response", "yes");
          init.headers = headers2;
          return new Response(body, init);
        }
        response.headers.set("X-Remix-Response", "yes");
        return response;
      } catch (error) {
        if (responses.isResponse(error)) {
          error.headers.set("X-Remix-Catch", "yes");
          return error;
        }
        if (router.isRouteErrorResponse(error)) {
          if (error) {
            handleError(error);
          }
          return errorResponseToJson(error, serverMode);
        }
        let errorInstance = error instanceof Error || error instanceof DOMException ? error : new Error("Unexpected Server Error");
        handleError(errorInstance);
        return router.json(errors.serializeError(errorInstance, serverMode), {
          status: 500,
          headers: {
            "X-Remix-Error": "yes"
          }
        });
      }
    }
    async function handleDocumentRequestRR(serverMode, build2, staticHandler, request, loadContext, handleError, criticalCss) {
      let context;
      try {
        context = await staticHandler.query(request, {
          requestContext: loadContext
        });
      } catch (error) {
        handleError(error);
        return new Response(null, {
          status: 500
        });
      }
      if (responses.isResponse(context)) {
        return context;
      }
      if (context.errors) {
        Object.values(context.errors).forEach((err) => {
          if (!router.isRouteErrorResponse(err) || err.error) {
            handleError(err);
          }
        });
        context.errors = errors.sanitizeErrors(context.errors, serverMode);
      }
      let headers$1 = headers.getDocumentHeadersRR(build2, context);
      let entryContext = {
        manifest: build2.assets,
        routeModules: entry.createEntryRouteModules(build2.routes),
        staticHandlerContext: context,
        criticalCss,
        serverHandoffString: serverHandoff.createServerHandoffString({
          url: context.location.pathname,
          basename: build2.basename,
          criticalCss,
          state: {
            loaderData: context.loaderData,
            actionData: context.actionData,
            errors: errors.serializeErrors(context.errors, serverMode)
          },
          future: build2.future,
          isSpaMode: build2.isSpaMode
        }),
        future: build2.future,
        isSpaMode: build2.isSpaMode,
        serializeError: (err) => errors.serializeError(err, serverMode)
      };
      let handleDocumentRequestFunction = build2.entry.module.default;
      try {
        return await handleDocumentRequestFunction(request, context.statusCode, headers$1, entryContext, loadContext);
      } catch (error) {
        handleError(error);
        let errorForSecondRender = error;
        if (responses.isResponse(error)) {
          let data;
          try {
            let contentType = error.headers.get("Content-Type");
            if (contentType && /\bapplication\/json\b/.test(contentType)) {
              if (error.body == null) {
                data = null;
              } else {
                data = await error.json();
              }
            } else {
              data = await error.text();
            }
            errorForSecondRender = new router.UNSAFE_ErrorResponseImpl(error.status, error.statusText, data);
          } catch (e) {
          }
        }
        context = router.getStaticContextFromError(staticHandler.dataRoutes, context, errorForSecondRender);
        if (context.errors) {
          context.errors = errors.sanitizeErrors(context.errors, serverMode);
        }
        entryContext = {
          ...entryContext,
          staticHandlerContext: context,
          serverHandoffString: serverHandoff.createServerHandoffString({
            url: context.location.pathname,
            basename: build2.basename,
            state: {
              loaderData: context.loaderData,
              actionData: context.actionData,
              errors: errors.serializeErrors(context.errors, serverMode)
            },
            future: build2.future,
            isSpaMode: build2.isSpaMode
          })
        };
        try {
          return await handleDocumentRequestFunction(request, context.statusCode, headers$1, entryContext, loadContext);
        } catch (error2) {
          handleError(error2);
          return returnLastResortErrorResponse(error2, serverMode);
        }
      }
    }
    async function handleResourceRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
      try {
        let response = await staticHandler.queryRoute(request, {
          routeId,
          requestContext: loadContext
        });
        invariant["default"](!(router.UNSAFE_DEFERRED_SYMBOL in response), `You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${routeId}" route?`);
        invariant["default"](responses.isResponse(response), "Expected a Response to be returned from queryRoute");
        return response;
      } catch (error) {
        if (responses.isResponse(error)) {
          error.headers.set("X-Remix-Catch", "yes");
          return error;
        }
        if (router.isRouteErrorResponse(error)) {
          if (error) {
            handleError(error);
          }
          return errorResponseToJson(error, serverMode);
        }
        handleError(error);
        return returnLastResortErrorResponse(error, serverMode);
      }
    }
    function errorResponseToJson(errorResponse, serverMode) {
      return router.json(errors.serializeError(
        // @ts-expect-error This is "private" from users but intended for internal use
        errorResponse.error || new Error("Unexpected Server Error"),
        serverMode
      ), {
        status: errorResponse.status,
        statusText: errorResponse.statusText,
        headers: {
          "X-Remix-Error": "yes"
        }
      });
    }
    function returnLastResortErrorResponse(error, serverMode) {
      let message = "Unexpected Server Error";
      if (serverMode !== mode.ServerMode.Production) {
        message += `

${String(error)}`;
      }
      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
    exports.createRequestHandler = createRequestHandler2;
  }
});
var require_sessions = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/sessions.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookies = require_cookies();
    var warnings = require_warnings();
    function flash(name) {
      return `__flash_${name}__`;
    }
    var createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    };
    var isSession = (object) => {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    };
    var createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = cookies.isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options);
          let data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          let expires = (options === null || options === void 0 ? void 0 : options.maxAge) != null ? new Date(Date.now() + options.maxAge * 1e3) : (options === null || options === void 0 ? void 0 : options.expires) != null ? options.expires : cookie.expires;
          if (id) {
            await updateData(id, data, expires);
          } else {
            id = await createData(data, expires);
          }
          return cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", {
            ...options,
            maxAge: void 0,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    };
    function warnOnceAboutSigningSessionCookie(cookie) {
      warnings.warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
    }
    exports.createSession = createSession;
    exports.createSessionStorageFactory = createSessionStorageFactory;
    exports.isSession = isSession;
    exports.warnOnceAboutSigningSessionCookie = warnOnceAboutSigningSessionCookie;
  }
});
var require_cookieStorage = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/sessions/cookieStorage.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookies = require_cookies();
    var sessions = require_sessions();
    var createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = cookies.isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      sessions.warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return sessions.createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096) {
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          }
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            maxAge: void 0,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    };
    exports.createCookieSessionStorageFactory = createCookieSessionStorageFactory;
  }
});
var require_memoryStorage = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/sessions/memoryStorage.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = Math.random().toString(36).substring(2, 10);
          map.set(id, {
            data,
            expires
          });
          return id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > /* @__PURE__ */ new Date()) {
              return data;
            }
            if (expires)
              map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
    exports.createMemorySessionStorageFactory = createMemorySessionStorageFactory;
  }
});
var require_errors2 = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/upload/errors.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaxPartSizeExceededError = class extends Error {
      constructor(field, maxBytes) {
        super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`);
        this.field = field;
        this.maxBytes = maxBytes;
      }
    };
    exports.MaxPartSizeExceededError = MaxPartSizeExceededError;
  }
});
var require_memoryUploadHandler = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/upload/memoryUploadHandler.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var errors = require_errors2();
    function createMemoryUploadHandler({
      filter,
      maxPartSize = 3e6
    } = {}) {
      return async ({
        filename,
        contentType,
        name,
        data
      }) => {
        if (filter && !await filter({
          filename,
          contentType,
          name
        })) {
          return void 0;
        }
        let size = 0;
        let chunks = [];
        for await (let chunk of data) {
          size += chunk.byteLength;
          if (size > maxPartSize) {
            throw new errors.MaxPartSizeExceededError(name, maxPartSize);
          }
          chunks.push(chunk);
        }
        if (typeof filename === "string") {
          return new File(chunks, filename, {
            type: contentType
          });
        }
        return await new Blob(chunks, {
          type: contentType
        }).text();
      };
    }
    exports.createMemoryUploadHandler = createMemoryUploadHandler;
  }
});
var require_dist = __commonJS({
  "../node_modules/@remix-run/server-runtime/dist/index.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var cookies = require_cookies();
    var formData = require_formData();
    var responses = require_responses();
    var server = require_server();
    var sessions = require_sessions();
    var cookieStorage = require_cookieStorage();
    var memoryStorage = require_memoryStorage();
    var memoryUploadHandler = require_memoryUploadHandler();
    var errors = require_errors2();
    var dev = require_dev();
    exports.createCookieFactory = cookies.createCookieFactory;
    exports.isCookie = cookies.isCookie;
    exports.unstable_composeUploadHandlers = formData.composeUploadHandlers;
    exports.unstable_parseMultipartFormData = formData.parseMultipartFormData;
    exports.defer = responses.defer;
    exports.json = responses.json;
    exports.redirect = responses.redirect;
    exports.redirectDocument = responses.redirectDocument;
    exports.createRequestHandler = server.createRequestHandler;
    exports.createSession = sessions.createSession;
    exports.createSessionStorageFactory = sessions.createSessionStorageFactory;
    exports.isSession = sessions.isSession;
    exports.createCookieSessionStorageFactory = cookieStorage.createCookieSessionStorageFactory;
    exports.createMemorySessionStorageFactory = memoryStorage.createMemorySessionStorageFactory;
    exports.unstable_createMemoryUploadHandler = memoryUploadHandler.createMemoryUploadHandler;
    exports.MaxPartSizeExceededError = errors.MaxPartSizeExceededError;
    exports.broadcastDevReady = dev.broadcastDevReady;
    exports.logDevReady = dev.logDevReady;
    exports.unstable_setDevServerHooks = dev.setDevServerHooks;
  }
});
var require_crypto = __commonJS({
  "../node_modules/@remix-run/cloudflare/dist/crypto.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var encoder = new TextEncoder();
    var sign = async (value, secret) => {
      let key = await createKey(secret, ["sign"]);
      let data = encoder.encode(value);
      let signature = await crypto.subtle.sign("HMAC", key, data);
      let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    };
    var unsign = async (signed, secret) => {
      let index = signed.lastIndexOf(".");
      let value = signed.slice(0, index);
      let hash = signed.slice(index + 1);
      let key = await createKey(secret, ["verify"]);
      let data = encoder.encode(value);
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data);
      return valid ? value : false;
    };
    async function createKey(secret, usages) {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, usages);
      return key;
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        array[i] = byteString.charCodeAt(i);
      }
      return array;
    }
    exports.sign = sign;
    exports.unsign = unsign;
  }
});
var require_implementations = __commonJS({
  "../node_modules/@remix-run/cloudflare/dist/implementations.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require_dist();
    var crypto2 = require_crypto();
    var createCookie = serverRuntime.createCookieFactory({
      sign: crypto2.sign,
      unsign: crypto2.unsign
    });
    var createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie);
    var createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie);
    var createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});
var require_workersKVStorage = __commonJS({
  "../node_modules/@remix-run/cloudflare/dist/sessions/workersKVStorage.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var implementations = require_implementations();
    function createWorkersKVSessionStorage({
      cookie,
      kv
    }) {
      return implementations.createSessionStorage({
        cookie,
        async createData(data, expires) {
          while (true) {
            let randomBytes = new Uint8Array(8);
            crypto.getRandomValues(randomBytes);
            let id = [...randomBytes].map((x) => x.toString(16).padStart(2, "0")).join("");
            if (await kv.get(id, "json")) {
              continue;
            }
            await kv.put(id, JSON.stringify(data), {
              expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
            });
            return id;
          }
        },
        async readData(id) {
          let session = await kv.get(id);
          if (!session) {
            return null;
          }
          return JSON.parse(session);
        },
        async updateData(id, data, expires) {
          await kv.put(id, JSON.stringify(data), {
            expiration: expires ? Math.round(expires.getTime() / 1e3) : void 0
          });
        },
        async deleteData(id) {
          await kv.delete(id);
        }
      });
    }
    exports.createWorkersKVSessionStorage = createWorkersKVSessionStorage;
  }
});
var require_dist2 = __commonJS({
  "../node_modules/@remix-run/cloudflare/dist/index.js"(exports) {
    "use strict";
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var workersKVStorage = require_workersKVStorage();
    var implementations = require_implementations();
    var serverRuntime = require_dist();
    exports.createWorkersKVSessionStorage = workersKVStorage.createWorkersKVSessionStorage;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
    Object.defineProperty(exports, "MaxPartSizeExceededError", {
      enumerable: true,
      get: function() {
        return serverRuntime.MaxPartSizeExceededError;
      }
    });
    Object.defineProperty(exports, "broadcastDevReady", {
      enumerable: true,
      get: function() {
        return serverRuntime.broadcastDevReady;
      }
    });
    Object.defineProperty(exports, "createRequestHandler", {
      enumerable: true,
      get: function() {
        return serverRuntime.createRequestHandler;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "defer", {
      enumerable: true,
      get: function() {
        return serverRuntime.defer;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "logDevReady", {
      enumerable: true,
      get: function() {
        return serverRuntime.logDevReady;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "redirectDocument", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirectDocument;
      }
    });
    Object.defineProperty(exports, "unstable_composeUploadHandlers", {
      enumerable: true,
      get: function() {
        return serverRuntime.unstable_composeUploadHandlers;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return serverRuntime.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return serverRuntime.unstable_parseMultipartFormData;
      }
    });
  }
});
function createRequestHandler({
  build: build2,
  mode,
  getLoadContext = ({
    context
  }) => ({
    ...context,
    cloudflare: {
      ...context.cloudflare,
      cf: context.cloudflare.request.cf
    }
  })
}) {
  let handleRequest = (0, import_cloudflare.createRequestHandler)(build2, mode);
  return async (cloudflare) => {
    let loadContext = await getLoadContext({
      ...cloudflare,
      // Backcompat, remove in v3
      request: cloudflare.request,
      context: {
        cloudflare: {
          ...cloudflare,
          cf: cloudflare.request.cf,
          ctx: {
            waitUntil: cloudflare.waitUntil,
            passThroughOnException: cloudflare.passThroughOnException
          },
          caches
        }
      }
    });
    return handleRequest(cloudflare.request, loadContext);
  };
}
function createPagesFunctionHandler({
  build: build2,
  getLoadContext,
  mode
}) {
  let handleRequest = createRequestHandler({
    build: build2,
    getLoadContext,
    mode
  });
  let handleFetch = async (context) => {
    let response;
    context.request.headers.delete("if-none-match");
    try {
      response = await context.env.ASSETS.fetch(context.request.url, context.request.clone());
      response = response && response.status >= 200 && response.status < 400 ? new Response(response.body, response) : void 0;
    } catch {
    }
    if (!response) {
      response = await handleRequest(context);
    }
    return response;
  };
  return async (context) => {
    try {
      return await handleFetch(context);
    } catch (error) {
      if (false) {
        console.error(error);
        return new Response(error.message || error.toString(), {
          status: 500
        });
      }
      return new Response("Internal Error", {
        status: 500
      });
    }
  };
}
var import_cloudflare;
var init_worker = __esm({
  "../node_modules/@remix-run/cloudflare-pages/dist/esm/worker.js"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    import_cloudflare = __toESM(require_dist2());
  }
});
var init_esm = __esm({
  "../node_modules/@remix-run/cloudflare-pages/dist/esm/index.js"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    init_worker();
  }
});
var onRequest;
var init_path = __esm({
  "[[path]].js"() {
    init_functionsRoutes_0_03781753847817626();
    init_checked_fetch();
    init_modules_watch_stub();
    init_esm();
    onRequest = createPagesFunctionHandler({ build });
  }
});
var routes;
var init_functionsRoutes_0_03781753847817626 = __esm({
  "../.wrangler/tmp/pages-UsZy5m/functionsRoutes-0.03781753847817626.mjs"() {
    init_path();
    routes = [
      {
        routePath: "/:path*",
        mountPath: "/",
        method: "",
        middlewares: [],
        modules: [onRequest]
      }
    ];
  }
});
init_functionsRoutes_0_03781753847817626();
init_checked_fetch();
init_modules_watch_stub();
init_functionsRoutes_0_03781753847817626();
init_checked_fetch();
init_modules_watch_stub();
init_functionsRoutes_0_03781753847817626();
init_checked_fetch();
init_modules_watch_stub();
init_functionsRoutes_0_03781753847817626();
init_checked_fetch();
init_modules_watch_stub();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
  var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || defaultPattern,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
          } else {
            route += "(".concat(token.pattern, ")").concat(token.modifier);
          }
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: () => {
            isFailOpen = true;
          }
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    };
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = (response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
);
init_functionsRoutes_0_03781753847817626();
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...pages_template_worker_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...pages_template_worker_default.middleware ? pages_template_worker_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;
init_functionsRoutes_0_03781753847817626();
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
var jsonError2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default2 = jsonError2;
var wrap2 = void 0;

// .wrangler/tmp/bundle-H3hxSO/middleware-insertion-facade.js
var envWrappers2 = [wrap2].filter(Boolean);
var facade3 = {
  ...middleware_loader_entry_default,
  envWrappers: envWrappers2,
  middleware: [
    middleware_miniflare3_json_error_default2,
    ...middleware_loader_entry_default.middleware ? middleware_loader_entry_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default2 = facade3;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-H3hxSO/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__2 = function(request, env, ctx) {
  if (middleware_insertion_facade_default2.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default2.fetch(request, env, ctx);
};
function getMaskedEnv2(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default2.envWrappers && middleware_insertion_facade_default2.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default2.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware2 = false;
var facade4 = {
  ...middleware_insertion_facade_default2.tail && {
    tail: maskHandlerEnv2(middleware_insertion_facade_default2.tail)
  },
  ...middleware_insertion_facade_default2.trace && {
    trace: maskHandlerEnv2(middleware_insertion_facade_default2.trace)
  },
  ...middleware_insertion_facade_default2.scheduled && {
    scheduled: maskHandlerEnv2(middleware_insertion_facade_default2.scheduled)
  },
  ...middleware_insertion_facade_default2.queue && {
    queue: maskHandlerEnv2(middleware_insertion_facade_default2.queue)
  },
  ...middleware_insertion_facade_default2.test && {
    test: maskHandlerEnv2(middleware_insertion_facade_default2.test)
  },
  ...middleware_insertion_facade_default2.email && {
    email: maskHandlerEnv2(middleware_insertion_facade_default2.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv2(rawEnv);
    if (middleware_insertion_facade_default2.middleware && middleware_insertion_facade_default2.middleware.length > 0) {
      if (!registeredMiddleware2) {
        registeredMiddleware2 = true;
        for (const middleware of middleware_insertion_facade_default2.middleware) {
          __facade_register__2(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default2.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default2.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__2(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__2
      );
    } else {
      return __facade_modules_fetch__2(request, env, ctx);
    }
  }
};
function maskHandlerEnv2(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv2(env), ctx);
}
var middleware_loader_entry_default2 = facade4;
export {
  middleware_loader_entry_default2 as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@remix-run/server-runtime/dist/warnings.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/cookies.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/formData.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/router/dist/router.cjs.js:
  (**
   * @remix-run/router v1.15.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/mode.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/errors.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/responses.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/entry.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/headers.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/invariant.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/routeMatching.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/data.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/routes.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/markup.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/serverHandoff.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/dev.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/server.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/sessions.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/sessions/cookieStorage.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/sessions/memoryStorage.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/upload/errors.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/upload/memoryUploadHandler.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/index.js:
  (**
   * @remix-run/server-runtime v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/crypto.js:
  (**
   * @remix-run/cloudflare v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/implementations.js:
  (**
   * @remix-run/cloudflare v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/sessions/workersKVStorage.js:
  (**
   * @remix-run/cloudflare v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare/dist/index.js:
  (**
   * @remix-run/cloudflare v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare-pages/dist/esm/worker.js:
  (**
   * @remix-run/cloudflare-pages v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/cloudflare-pages/dist/esm/index.js:
  (**
   * @remix-run/cloudflare-pages v2.7.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=functionsWorker-0.012730036790153498.js.map
