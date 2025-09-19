// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetailsRulesParamList extends $dara.Model {
  /**
   * @remarks
   * If the value of paramType is 1, this parameter is empty. If the value of paramType is 2, this parameter provides the options that can be selected for paramType.
   * 
   * @example
   * 0,1,2,3
   */
  enumValue?: string;
  /**
   * @remarks
   * The maximum value of the parameter.
   * 
   * @example
   * 999
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value of the parameter.
   * 
   * @example
   * 1
   */
  minValue?: number;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 7
   */
  paramDefaultValue?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The setting value is 0 means no definition, 1 means success, 2 means failure, 3 means success and failure
   */
  paramDesc?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * range_val
   */
  paramName?: string;
  /**
   * @remarks
   * The configuration type of the parameter. Valid values:
   * 
   * *   **1**: input
   * *   **2**: selection
   * 
   * @example
   * 1
   */
  paramType?: number;
  static names(): { [key: string]: string } {
    return {
      enumValue: 'EnumValue',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      paramDefaultValue: 'ParamDefaultValue',
      paramDesc: 'ParamDesc',
      paramName: 'ParamName',
      paramType: 'ParamType',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetailsRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the baseline can be edited. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  optional?: number;
  /**
   * @remarks
   * An array that consists of the parameters in the rule for the baseline.
   */
  paramList?: DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetailsRulesParamList[];
  /**
   * @remarks
   * The description of the rule for the baseline.
   * 
   * @example
   * Please customize the password expiration time detection standard as
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule for the baseline.
   * 
   * @example
   * audit.audit_policy.auditpolicychange.cus
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      optional: 'Optional',
      paramList: 'ParamList',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optional: 'number',
      paramList: { 'type': 'array', 'itemType': DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetailsRulesParamList },
      ruleDesc: 'string',
      ruleId: 'string',
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

export class DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetails extends $dara.Model {
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Set password expiration time, force regular modification of password, reduce password leakage and guess risk.Use non-password login (e.g. key pair) please ignore this item.
   */
  checkDesc?: string;
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * @example
   * 1299
   */
  checkId?: number;
  /**
   * @remarks
   * The baseline.
   * 
   * @example
   * Ensure password expiration period is set.
   */
  checkItem?: string;
  /**
   * @remarks
   * An array that consists of the rule details about the baseline.
   */
  rules?: DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetailsRules[];
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
      rules: { 'type': 'array', 'itemType': DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetailsRules },
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

export class DescribeRiskTypeResponseBodyRiskTypesSubTypes extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline subtype.
   * 
   * @example
   * Redis unauthorized access high exploit vulnerability risk
   */
  alias?: string;
  /**
   * @remarks
   * The baseline subtype permission flag of the current user version. Valid values:
   * 
   * - **true**: Have access
   * - **false**: No permissions
   * 
   * @example
   * true
   */
  authFlag?: boolean;
  /**
   * @remarks
   * An array that consists of the check details about the baseline subtype.
   */
  checkDetails?: DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetails[];
  /**
   * @remarks
   * The operating system type of the server. Valid values:
   * 
   * - **windows**
   * - **linux**
   * 
   * @example
   * linux
   */
  supportedOs?: string;
  /**
   * @remarks
   * The name of the baseline subtype.
   * 
   * @example
   * hc_exploit_redis
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      authFlag: 'AuthFlag',
      checkDetails: 'CheckDetails',
      supportedOs: 'SupportedOs',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      authFlag: 'boolean',
      checkDetails: { 'type': 'array', 'itemType': DescribeRiskTypeResponseBodyRiskTypesSubTypesCheckDetails },
      supportedOs: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkDetails)) {
      $dara.Model.validateArray(this.checkDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskTypeResponseBodyRiskTypes extends $dara.Model {
  /**
   * @remarks
   * The alias of the baseline type.
   * 
   * @example
   * Redis unauthorized access high exploit vulnerability risk
   */
  alias?: string;
  /**
   * @remarks
   * The baseline type flag of the current user version. Valid values:
   * 
   * - **true**: Have access
   * - **false**: No permissions
   * 
   * @example
   * true
   */
  authFlag?: boolean;
  /**
   * @remarks
   * An array that consists of the information about baseline subtypes.
   */
  subTypes?: DescribeRiskTypeResponseBodyRiskTypesSubTypes[];
  /**
   * @remarks
   * The name of the baseline type.
   * 
   * @example
   * hc_exploit
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      authFlag: 'AuthFlag',
      subTypes: 'SubTypes',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      authFlag: 'boolean',
      subTypes: { 'type': 'array', 'itemType': DescribeRiskTypeResponseBodyRiskTypesSubTypes },
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subTypes)) {
      $dara.Model.validateArray(this.subTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F22037B5-FCE4-5178-A9E7-71798E1F9270
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information about baseline types.
   */
  riskTypes?: DescribeRiskTypeResponseBodyRiskTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskTypes: 'RiskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskTypes: { 'type': 'array', 'itemType': DescribeRiskTypeResponseBodyRiskTypes },
    };
  }

  validate() {
    if(Array.isArray(this.riskTypes)) {
      $dara.Model.validateArray(this.riskTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

