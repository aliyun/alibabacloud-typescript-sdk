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

export class ListDesensitizationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of masking rules.
   */
  desensitizationRuleList?: ListDesensitizationRuleResponseBodyDesensitizationRuleList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * This parameter is required.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E76DD2E7-EBAC-5724-B163-19AAC233F8F2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      desensitizationRuleList: 'DesensitizationRuleList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensitizationRuleList: { 'type': 'array', 'itemType': ListDesensitizationRuleResponseBodyDesensitizationRuleList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.desensitizationRuleList)) {
      $dara.Model.validateArray(this.desensitizationRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

