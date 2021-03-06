import mergeValidations from './mergeValidations';
import validateWithEsprima from './javascript/esprima';
import validateWithJSHint from './javascript/jshint';

export default (source, enabledLibraries) => mergeValidations([
  validateWithEsprima(source),
  validateWithJSHint(source, enabledLibraries),
]);
