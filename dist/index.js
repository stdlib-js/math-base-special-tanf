"use strict";var q=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var E=q(function(p,P){
var i=require('@stdlib/math-base-special-kernel-tanf/dist'),A=require('@stdlib/math-base-special-rempio2f/dist'),R=require('@stdlib/number-float32-base-to-word/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),T=require('@stdlib/constants-float32-abs-mask/dist'),W=require('@stdlib/constants-float32-exponent-mask/dist'),v=require('@stdlib/constants-float64-half-pi/dist'),N=1061752794,d=1075235811,o=1081824209,s=1085271519,D=1088565717,L=964689920,t=v,n=2*v,O=3*v,_=4*v,I=[0];function F(r){var a,u,f;return a=R(e(r))|0,u=a&T|0,u<=N?u<L?e(r):e(i(r,1)):u<=o?u<=d?a>0?e(i(r-t,-1)):e(i(r+t,-1)):a>0?e(i(r-n,1)):e(i(r+n,1)):u<=D?u<=s?a>0?e(i(r-O,-1)):e(i(r+O,-1)):a>0?e(i(r-_,1)):e(i(r+_,1)):u>=W?NaN:(f=A(e(r),I),e(i(I[0],1-((f&1)<<1))))}P.exports=F
});var S=E();module.exports=S;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
