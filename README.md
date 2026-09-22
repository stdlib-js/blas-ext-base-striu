<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# striu

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy the upper triangular part of a single-precision floating-point matrix `A` to another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import striu from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-striu@deno/mod.js';
```

#### striu( order, M, N, k, A, LDA, B, LDB )

Copies the upper triangular part of a single-precision floating-point matrix `A` to another matrix `B`.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

striu( 'row-major', 2, 2, 0, A, 2, B, 2 );
// B => <Float32Array>[ 1.0, 2.0, 0.0, 4.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **k**: diagonal below which to ignore. A value of `k = 0` refers to the main diagonal, `k < 0` refers to a diagonal below the main diagonal, and `k > 0` refers to a diagonal above the main diagonal. Accordingly, when `k < 0`, the function copies the upper triangle **and** one or more sub-diagonals (i.e., part of the lower triangle), and, when `k > 0`, the function copies only part of the upper triangle.
-   **A**: input matrix.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output matrix.
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

Setting the `k` parameter to a value other than `0` allows including and excluding sub- and super-diagonals, respectively. For example, to copy the upper triangle and the first sub-diagonal,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

striu( 'row-major', 2, 2, -1, A, 2, B, 2 );
// B => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

// Initial arrays...
var A0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var B0 = new Float32Array( 5 );

// Create offset views...
var A1 = new Float32Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var B1 = new Float32Array( B0.buffer, B0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

striu( 'row-major', 2, 2, 0, A1, 2, B1, 2 );
// B0 => <Float32Array>[ 0.0, 2.0, 3.0, 0.0, 5.0 ]
```

#### striu.ndarray( M, N, k, A, sa1, sa2, oa, B, sb1, sb2, ob )

Copies the upper triangular part of a single-precision floating-point matrix `A` to another matrix `B` using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

striu.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
// B => <Float32Array>[ 1.0, 2.0, 0.0, 4.0 ]
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **k**: diagonal below which to ignore.
-   **A**: input matrix.
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output matrix.
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

striu.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 2 );
// B => <Float32Array>[ 0.0, 0.0, 1.0, 2.0, 0.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the copied region are left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-to-array@deno/mod.js';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@deno/mod.js';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@deno/mod.js';
import striu from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-striu@deno/mod.js';

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = uniform( N, -10, 10, {
    'dtype': 'float32'
});
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = uniform( N, -10, 10, {
    'dtype': 'float32'
});
console.log( ndarray2array( B, shape, strides, 0, order ) );

striu( order, shape[ 0 ], shape[ 1 ], 0, A, strides[ 0 ], B, strides[ 0 ] );
console.log( ndarray2array( B, shape, strides, 0, order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<section class="references">

</section>

<!-- /.references -->

<section class="related">

</section>

<!-- /.related -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-striu.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-striu

[test-image]: https://github.com/stdlib-js/blas-ext-base-striu/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-striu/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-striu/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-striu?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-striu.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-striu/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-striu/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-striu/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-striu/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-striu/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-striu/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-striu/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-striu/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-striu/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
