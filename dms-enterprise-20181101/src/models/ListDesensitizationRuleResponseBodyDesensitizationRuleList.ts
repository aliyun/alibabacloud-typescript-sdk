// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesensitizationRuleResponseBodyDesensitizationRuleList extends $dara.Model {
  /**
   * @remarks
   * The parameter.
   * 
   * @example
   * {paramName: salt, paramValue: 1}
   */
  funcParams?: string;
  /**
   * @remarks
   * The example.
   * 
   * @example
   * [{paramName: testStr, paramValue: 1}]
   */
  funcSample?: string;
  /**
   * @remarks
   * The algorithm type.
   * 
   * @example
   * MD5
   */
  functionType?: string;
  /**
   * @remarks
   * The ID of the user who last modified the masking rule.
   * 
   * @example
   * 2
   */
  lastModifierId?: string;
  /**
   * @remarks
   * The name of the user who last modified the masking rule.
   * 
   * @example
   * test user
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The number of times that the masking was used.
   * 
   * @example
   * 1
   */
  referenceCount?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * hash desensitization algorithm
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the masking rule.
   * 
   * @example
   * 23
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the masking rule.
   * 
   * @example
   * default desensitization rule test
   */
  ruleName?: string;
  /**
   * @remarks
   * The algorithm used for masking.
   * 
   * @example
   * HASH
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      funcParams: 'FuncParams',
      funcSample: 'FuncSample',
      functionType: 'FunctionType',
      lastModifierId: 'LastModifierId',
      lastModifierName: 'LastModifierName',
      referenceCount: 'ReferenceCount',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcParams: 'string',
      funcSample: 'string',
      functionType: 'string',
      lastModifierId: 'string',
      lastModifierName: 'string',
      referenceCount: 'number',
      ruleDesc: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

