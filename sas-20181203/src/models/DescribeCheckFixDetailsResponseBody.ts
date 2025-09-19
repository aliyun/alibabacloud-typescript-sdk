// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckFixDetailsResponseBodyCheckFixDetailsRulesParamList extends $dara.Model {
  /**
   * @remarks
   * The options that can be selected for the rule parameter if the value of the ParamType parameter is 2.
   * 
   * @example
   * 0,1,2,3
   */
  enumValue?: string;
  /**
   * @remarks
   * The maximum value of the rule parameter.
   * 
   * @example
   * 24
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value of the rule parameter.
   * 
   * @example
   * 5
   */
  minValue?: number;
  /**
   * @remarks
   * The default value of the rule parameter.
   * 
   * @example
   * 5
   */
  paramDefaultValue?: string;
  /**
   * @remarks
   * The description of the rule parameter.
   * 
   * @example
   * The setting value is 0 means no definition, 1 means success, 2 means failure, 3 means success and failure
   */
  paramDesc?: string;
  /**
   * @remarks
   * The name of the rule parameter.
   * 
   * @example
   * range_val
   */
  paramName?: string;
  /**
   * @remarks
   * The type of the rule parameter. Valid values:
   * 
   * *   **1**: input
   * *   **2**: selection
   * 
   * @example
   * 1
   */
  paramType?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * pwd_reuse.system_auth
   */
  ruleId?: string;
  /**
   * @remarks
   * The specified value of the rule parameter.
   * 
   * @example
   * 18
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      enumValue: 'EnumValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      paramDefaultValue: 'ParamDefaultValue',
      paramDesc: 'ParamDesc',
      paramName: 'ParamName',
      paramType: 'ParamType',
      ruleId: 'RuleId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enumValue: 'string',
      maxValue: 'number',
      minValue: 'number',
      paramDefaultValue: 'string',
      paramDesc: 'string',
      paramName: 'string',
      paramType: 'number',
      ruleId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckFixDetailsResponseBodyCheckFixDetailsRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * @example
   * 58
   */
  checkId?: number;
  /**
   * @remarks
   * The default value of the rule.
   * 
   * @example
   * 1
   */
  defaultValue?: number;
  /**
   * @remarks
   * Indicates whether the rule is optional. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  optional?: number;
  /**
   * @remarks
   * An array that consists of the rule parameters.
   */
  paramList?: DescribeCheckFixDetailsResponseBodyCheckFixDetailsRulesParamList[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * (/etc/system-auth)Force users not to reuse the number of recently used passwords between 5 and 24
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * pwd_reuse.system_auth
   */
  ruleId?: string;
  /**
   * @remarks
   * The specified value of the rule parameter.
   * 
   * @example
   * 5
   */
  value?: number;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * open
   */
  varName?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      defaultValue: 'DefaultValue',
      optional: 'Optional',
      paramList: 'ParamList',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      value: 'Value',
      varName: 'VarName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      defaultValue: 'number',
      optional: 'number',
      paramList: { 'type': 'array', 'itemType': DescribeCheckFixDetailsResponseBodyCheckFixDetailsRulesParamList },
      ruleDesc: 'string',
      ruleId: 'string',
      value: 'number',
      varName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckFixDetailsResponseBodyCheckFixDetails extends $dara.Model {
  /**
   * @remarks
   * The detailed description of the risk item.
   * 
   * @example
   * Force users not to reuse recently used passwords to reduce the risk of password guessing attacks
   */
  checkDesc?: string;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * @example
   * 58
   */
  checkId?: number;
  /**
   * @remarks
   * The description of the risk item.
   * 
   * @example
   * Ensure password reuse is limited
   */
  checkItem?: string;
  /**
   * @remarks
   * An array consisting of the rules that are supported by the risk item.
   */
  rules?: DescribeCheckFixDetailsResponseBodyCheckFixDetailsRules[];
  static names(): { [key: string]: string } {
    return {
      checkDesc: 'CheckDesc',
      checkId: 'CheckId',
      checkItem: 'CheckItem',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDesc: 'string',
      checkId: 'number',
      checkItem: 'string',
      rules: { 'type': 'array', 'itemType': DescribeCheckFixDetailsResponseBodyCheckFixDetailsRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckFixDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the parameters.
   */
  checkFixDetails?: DescribeCheckFixDetailsResponseBodyCheckFixDetails[];
  /**
   * @remarks
   * The number of risk items that can be fixed.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0DBF1E27-98D8-5EC2-9CF3-4A2E26F6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkFixDetails: 'CheckFixDetails',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkFixDetails: { 'type': 'array', 'itemType': DescribeCheckFixDetailsResponseBodyCheckFixDetails },
      count: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkFixDetails)) {
      $dara.Model.validateArray(this.checkFixDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

