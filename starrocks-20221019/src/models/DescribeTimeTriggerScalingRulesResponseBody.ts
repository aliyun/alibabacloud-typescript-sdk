// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimeTriggerScalingRulesResponseBodyDataScalingInRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  day?: number;
  /**
   * @example
   * 12
   */
  hour?: number;
  /**
   * @example
   * 24
   */
  minute?: number;
  /**
   * @example
   * 3
   */
  month?: number;
  /**
   * @example
   * WEEKLY
   */
  recurrenceInterval?: number;
  /**
   * @example
   * ONCE
   */
  recurrenceType?: string;
  recurrenceValues?: string[];
  /**
   * @example
   * 30
   */
  second?: number;
  /**
   * @example
   * 2025
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      recurrenceInterval: 'RecurrenceInterval',
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      second: 'Second',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      recurrenceInterval: 'number',
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'string' },
      second: 'number',
      year: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeTriggerScalingRulesResponseBodyDataScalingOutRule extends $dara.Model {
  /**
   * @example
   * 10
   */
  day?: number;
  /**
   * @example
   * 3
   */
  hour?: number;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * 12
   */
  month?: number;
  /**
   * @example
   * 1
   */
  recurrenceInterval?: number;
  /**
   * @example
   * ONCE
   */
  recurrenceType?: string;
  recurrenceValues?: string[];
  /**
   * @example
   * 20
   */
  second?: number;
  /**
   * @example
   * 2024
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      hour: 'Hour',
      minute: 'Minute',
      month: 'Month',
      recurrenceInterval: 'RecurrenceInterval',
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      second: 'Second',
      year: 'Year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'number',
      hour: 'number',
      minute: 'number',
      month: 'number',
      recurrenceInterval: 'number',
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'string' },
      second: 'number',
      year: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeTriggerScalingRulesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3
   */
  nodeNumber?: string;
  scalingInRule?: DescribeTimeTriggerScalingRulesResponseBodyDataScalingInRule;
  scalingOutRule?: DescribeTimeTriggerScalingRulesResponseBodyDataScalingOutRule;
  /**
   * @example
   * r-d1775b776110****
   */
  scalingRuleId?: string;
  /**
   * @example
   * scale-test1
   */
  scalingRuleName?: string;
  /**
   * @example
   * INACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      nodeNumber: 'NodeNumber',
      scalingInRule: 'ScalingInRule',
      scalingOutRule: 'ScalingOutRule',
      scalingRuleId: 'ScalingRuleId',
      scalingRuleName: 'ScalingRuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeNumber: 'string',
      scalingInRule: DescribeTimeTriggerScalingRulesResponseBodyDataScalingInRule,
      scalingOutRule: DescribeTimeTriggerScalingRulesResponseBodyDataScalingOutRule,
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.scalingInRule && typeof (this.scalingInRule as any).validate === 'function') {
      (this.scalingInRule as any).validate();
    }
    if(this.scalingOutRule && typeof (this.scalingOutRule as any).validate === 'function') {
      (this.scalingOutRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeTriggerScalingRulesResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: DescribeTimeTriggerScalingRulesResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': DescribeTimeTriggerScalingRulesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

