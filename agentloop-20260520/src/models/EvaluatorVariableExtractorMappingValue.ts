// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatorVariableExtractorMappingValue extends $dara.Model {
  /**
   * @remarks
   * The evaluation data field from which content is extracted. The extraction expression is applied to the content of this field. Required when saving with the evaluation task. For the trial run API, this parameter can be omitted and the backend derives it from the expression. Multiple variables can share the same source field.
   * 
   * @example
   * trace.output
   */
  originField?: string;
  /**
   * @remarks
   * The extraction method. jsonpath extracts values from the JSON content of the field by using JSONPath. regex performs regular expression matching on the full text of the field. When capturing groups are present, the first capturing group is returned. When no capturing group is present, the entire match is returned.
   * 
   * @example
   * jsonpath
   */
  type?: string;
  /**
   * @remarks
   * The extraction expression. Its meaning is determined by type. When type is jsonpath, specify a JSONPath expression. You can use either a relative path relative to originField (such as $.order.expected) or an absolute path from the root (such as $trace.output.order.expected). When type is regex, specify a regular expression. Note that backslashes must be escaped in JSON. The expression syntax is validated upon saving. For regular expressions, RE2 compatibility is additionally validated. Patterns such as lookahead assertions, lookbehind assertions, backreferences, named groups, atomic groups, and possessive quantifiers are rejected.
   * 
   * @example
   * $.order.expected
   */
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      originField: 'originField',
      type: 'type',
      expression: 'expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originField: 'string',
      type: 'string',
      expression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

