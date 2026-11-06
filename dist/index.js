"use strict";var q=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var E=q(function(p,P){
var u=require('@stdlib/math-base-special-kernel-tanf/dist'),A=require('@stdlib/math-base-special-rempio2f/dist'),R=require('@stdlib/number-float32-base-to-word/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),T=require('@stdlib/constants-float32-abs-mask/dist'),W=require('@stdlib/constants-float32-exponent-mask/dist'),v=require('@stdlib/constants-float64-half-pi/dist'),N=1061752794,d=1075235811,o=1081824209,s=1085271519,D=1088565717,L=964689920,t=v,n=2*v,O=3*v,_=4*v,I=[0];function F(r){var a,i,f;return a=R(e(r))|0,i=a&T|0,i<=N?i<L?e(r):e(u(r,1)):i<=o?i<=d?a>0?e(u(r-t,-1)):e(u(r+t,-1)):a>0?e(u(r-n,1)):e(u(r+n,1)):i<=D?i<=s?a>0?e(u(r-O,-1)):e(u(r+O,-1)):a>0?e(u(r-_,1)):e(u(r+_,1)):i>=W?NaN:(f=A(e(r),I),e(u(I[0],1-((f&1)<<1))))}P.exports=F
});var S=E();module.exports=S;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
