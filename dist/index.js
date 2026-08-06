"use strict";var x=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var b=x(function(Z,w){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(i,e,t,l,q,u,g,a,v,o,f){var s,n,r,m;if(s=g,n=f,O([q,u])){for(m=0;m<i;m++){for(r=S(0,m+t);r<e;r++)a[n+r*o]=l[s+r*u];s+=q,n+=v}return a}for(m=0;m<e;m++){for(r=0;r<=T(m-t,i-1);r++)a[n+r*v]=l[s+r*q];s+=u,n+=o}return a}w.exports=z
});var R=x(function($,y){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function I(i,e,t,l,q,u,g,a){var v,o,f,s,n,r;if(!C(i))throw new TypeError(c('34hFx',i));if(v=G(i),v?r=t:r=e,u<p(1,r))throw new RangeError(c('34hJL',r,u));if(a<p(1,r))throw new RangeError(c('34hGM',r,a));return v?(o=u,f=1,s=a,n=1):(o=1,f=u,s=1,n=a),H(e,t,l,q,o,f,0,g,s,n,0)}y.exports=I
});var j=x(function(k,d){
var J=b();function K(i,e,t,l,q,u,g,a,v,o,f){return J(i,e,t,l,q,u,g,a,v,o,f)}d.exports=K
});var _=x(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=R(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),h,F=U(Q(__dirname,"./native.js"));W(F)?h=X:h=F;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
