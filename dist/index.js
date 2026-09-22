"use strict";var x=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var b=x(function(Z,w){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(t,e,n,f,q,u,g,i,o,m,l){var s,v,r,a;if(s=g,v=l,O([q,u])){for(a=0;a<t;a++){for(r=S(0,a+n);r<e;r++)i[v+r*m]=f[s+r*u];s+=q,v+=o}return i}for(a=0;a<e;a++){for(r=0;r<=T(a-n,t-1);r++)i[v+r*o]=f[s+r*q];s+=u,v+=m}return i}w.exports=z
});var y=x(function($,d){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function I(t,e,n,f,q,u,g,i){var o,m,l,s,v,r,a;if(a=C(t),a===null)throw new TypeError(c('34hFx',t));if(o=G(a),o?r=n:r=e,u<p(1,r))throw new RangeError(c('34hJL',r,u));if(i<p(1,r))throw new RangeError(c('34hGM',r,i));return o?(m=u,l=1,s=i,v=1):(m=1,l=u,s=1,v=i),H(e,n,f,q,m,l,0,g,s,v,0)}d.exports=I
});var j=x(function(k,R){
var J=b();function K(t,e,n,f,q,u,g,i,o,m,l){return J(t,e,n,f,q,u,g,i,o,m,l)}R.exports=K
});var _=x(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),h,F=U(Q(__dirname,"./native.js"));W(F)?h=X:h=F;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
