// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetailsRulesParamList extends $dara.Model {
  /**
   * @remarks
   * The options that can be selected for the rule parameter if the value of ParamType is set to 2.
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
   * 999
   */
  maxValue?: number;
  /**
   * @remarks
   * The minimum value of the rule parameter.
   * 
   * @example
   * 1
   */
  minValue?: number;
  /**
   * @remarks
   * The default value of the rule parameter.
   * 
   * @example
   * 7
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
   * The configured value of the rule parameter.
   * 
   * @example
   * 7
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

export class DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetailsRules extends $dara.Model {
  /**
   * @remarks
   * The default value of the rule.
   * 
   * @example
   * 2
   */
  defaultValue?: number;
  /**
   * @remarks
   * Indicates whether the rule can be selected. Valid values:
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
   * The rule parameters.
   */
  paramList?: DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetailsRulesParamList[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * Please customize the password expiration time detection standard as
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * login_unlock_deny_pam_faillock.must.cus
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      optional: 'Optional',
      paramList: 'ParamList',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'number',
      optional: 'number',
      paramList: { 'type': 'array', 'itemType': DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetailsRulesParamList },
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

export class DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetails extends $dara.Model {
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * Set password expiration time, force regular modification of password, reduce password leakage and guess risk.Use non-password login (e.g. key pair) please ignore this item.
   */
  checkDesc?: string;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 206
   */
  checkId?: number;
  /**
   * @remarks
   * The check item.
   * 
   * @example
   * Ensure password expiration period is set.
   */
  checkItem?: string;
  /**
   * @remarks
   * The details of rules.
   */
  rules?: DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetailsRules[];
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
      rules: { 'type': 'array', 'itemType': DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetailsRules },
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

export class DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypes extends $dara.Model {
  /**
   * @remarks
   * The alias of the check item.
   * 
   * @example
   * Redis unauthorized access high exploit vulnerability risk
   */
  alias?: string;
  /**
   * @remarks
   * The details of custom check items.
   */
  checkDetails?: DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetails[];
  /**
   * @remarks
   * Indicates whether the sub-check item is selected. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  on?: boolean;
  /**
   * @remarks
   * The operating system type of the server. Valid values:
   * *   **windows**
   * *   **linux**
   * 
   * @example
   * windows
   */
  supportedOs?: string;
  /**
   * @remarks
   * The type of the sub-check item.
   * 
   * @example
   * hc_exploit_redis
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      checkDetails: 'CheckDetails',
      on: 'On',
      supportedOs: 'SupportedOs',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      checkDetails: { 'type': 'array', 'itemType': DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypesCheckDetails },
      on: 'boolean',
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

export class DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultList extends $dara.Model {
  /**
   * @remarks
   * The alias of the check item.
   * 
   * @example
   * Unauthorized Access
   */
  alias?: string;
  /**
   * @remarks
   * Indicates whether the check item is selected. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  on?: boolean;
  /**
   * @remarks
   * The information about sub-check items.
   */
  subTypes?: DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypes[];
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * hc_exploit
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      on: 'On',
      subTypes: 'SubTypes',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      on: 'boolean',
      subTypes: { 'type': 'array', 'itemType': DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultListSubTypes },
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

export class DescribeStrategyDetailResponseBodyStrategy extends $dara.Model {
  /**
   * @remarks
   * The type of the baseline check policy that you want to query. Valid values:
   * 
   * *   **common**: standard baseline check policy
   * *   **custom**: custom baseline check policy
   * 
   * @example
   * common
   */
  customType?: string;
  /**
   * @remarks
   * The check interval of the policy.
   * 
   * @example
   * 3
   */
  cycleDays?: number;
  /**
   * @remarks
   * The time period during which the check starts. Valid values:
   * 
   * *   **0**: 00:00 to 06:00
   * *   **6**: 06:00 to 12:00
   * *   **12**: 12:00 to 18:00
   * *   **18**: 18:00 to 24:00
   * 
   * @example
   * 0
   */
  cycleStartTime?: number;
  /**
   * @remarks
   * The end time of the check. Specify the time in the HH:mm:ss format.
   * 
   * @example
   * 03:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The name of the baseline check policy.
   * 
   * @example
   * TestStrategy
   */
  name?: string;
  /**
   * @remarks
   * The subtype of the baselines. 
   * 
   * > You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to query the subtypes of baselines.
   * 
   * @example
   * hc_nginx_linux,tomcat7,hc_mysql_ali,hc_docker
   */
  riskSubTypeName?: string;
  /**
   * @remarks
   * The information about the whitelist of risk items.
   */
  riskTypeWhiteListQueryResultList?: DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultList[];
  /**
   * @remarks
   * The start time of the check. Specify the time in the HH:mm:ss format.
   * 
   * @example
   * 02:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The method that is used to apply the baseline check policy. Valid values:
   * 
   * *   **groupId**: asset groups
   * *   **uuid**: assets
   * 
   * @example
   * groupId
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the baseline check policy. Valid values:
   * 
   * *   **1**: standard policies
   * *   **2**: custom policies
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      customType: 'CustomType',
      cycleDays: 'CycleDays',
      cycleStartTime: 'CycleStartTime',
      endTime: 'EndTime',
      id: 'Id',
      name: 'Name',
      riskSubTypeName: 'RiskSubTypeName',
      riskTypeWhiteListQueryResultList: 'RiskTypeWhiteListQueryResultList',
      startTime: 'StartTime',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customType: 'string',
      cycleDays: 'number',
      cycleStartTime: 'number',
      endTime: 'string',
      id: 'number',
      name: 'string',
      riskSubTypeName: 'string',
      riskTypeWhiteListQueryResultList: { 'type': 'array', 'itemType': DescribeStrategyDetailResponseBodyStrategyRiskTypeWhiteListQueryResultList },
      startTime: 'string',
      targetType: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.riskTypeWhiteListQueryResultList)) {
      $dara.Model.validateArray(this.riskTypeWhiteListQueryResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C5B28F65-9245-5DC1-B3CF-5F2756A756A8
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the baseline check policy.
   */
  strategy?: DescribeStrategyDetailResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: DescribeStrategyDetailResponseBodyStrategy,
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

