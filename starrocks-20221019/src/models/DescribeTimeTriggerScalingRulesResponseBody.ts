// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimeTriggerScalingRulesResponseBodyDataScalingInRule extends $dara.Model {
  /**
   * @remarks
   * The day of the execution time.
   * 
   * @example
   * 1
   */
  day?: number;
  /**
   * @remarks
   * The hour of the execution time.
   * 
   * @example
   * 12
   */
  hour?: number;
  /**
   * @remarks
   * The minute of the execution time.
   * 
   * @example
   * 24
   */
  minute?: number;
  /**
   * @remarks
   * The month of the execution time.
   * 
   * @example
   * 3
   */
  month?: number;
  /**
   * @remarks
   * The trigger interval. Its meaning depends on the RecurrenceType value:
   * 
   * - DAILY: The interval in days.
   * 
   * - WEEKLY: The interval in weeks.
   * 
   * - MONTHLY: The interval in months.
   * 
   * @example
   * WEEKLY
   */
  recurrenceInterval?: number;
  /**
   * @remarks
   * The trigger method. Valid values:
   * 
   * - ONCE: One-time
   * 
   * - DAILY: Daily
   * 
   * - WEEKLY: Weekly
   * 
   * - MONTHLY: Monthly
   * 
   * @example
   * ONCE
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The trigger values. Their meaning depends on the RecurrenceType value:
   * 
   * -WEEKLY: The days of the week for execution.
   * 
   * -MONTHLY: The days of the month for execution.
   */
  recurrenceValues?: string[];
  /**
   * @remarks
   * The second of the execution time.
   * 
   * @example
   * 30
   */
  second?: number;
  /**
   * @remarks
   * The year of the execution time.
   * 
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
   * @remarks
   * The day of the execution time.
   * 
   * @example
   * 10
   */
  day?: number;
  /**
   * @remarks
   * The hour of the execution time.
   * 
   * @example
   * 3
   */
  hour?: number;
  /**
   * @remarks
   * The minute of the execution time.
   * 
   * @example
   * 30
   */
  minute?: number;
  /**
   * @remarks
   * The month of the execution time.
   * 
   * @example
   * 12
   */
  month?: number;
  /**
   * @remarks
   * The trigger interval. Its meaning depends on the RecurrenceType value:
   * 
   * - DAILY: The interval in days.
   * 
   * - WEEKLY: The interval in weeks.
   * 
   * - MONTHLY: The interval in months.
   * 
   * @example
   * 1
   */
  recurrenceInterval?: number;
  /**
   * @remarks
   * The trigger method. Valid values:
   * 
   * - ONCE: One-time
   * 
   * - DAILY: Daily
   * 
   * - WEEKLY: Weekly
   * 
   * - MONTHLY: Monthly
   * 
   * @example
   * ONCE
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The trigger values. Their meaning depends on the RecurrenceType value:
   * 
   * -WEEKLY: The days of the week for execution.
   * 
   * -MONTHLY: The days of the month for execution.
   */
  recurrenceValues?: string[];
  /**
   * @remarks
   * The second of the execution time.
   * 
   * @example
   * 20
   */
  second?: number;
  /**
   * @remarks
   * The year of the execution time.
   * 
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
   * @remarks
   * The number of elastic nodes.
   * 
   * @example
   * 3
   */
  nodeNumber?: string;
  /**
   * @remarks
   * The scale-in rule.
   */
  scalingInRule?: DescribeTimeTriggerScalingRulesResponseBodyDataScalingInRule;
  /**
   * @remarks
   * The scale-out rule.
   */
  scalingOutRule?: DescribeTimeTriggerScalingRulesResponseBodyDataScalingOutRule;
  /**
   * @remarks
   * The ID of the scaling rule.
   * 
   * @example
   * r-d1775b776110****
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * The name of the Auto Scaling policy.
   * 
   * @example
   * scale-test1
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The current status of the rule. Valid values:
   * 
   * - INACTIVE: The rule is not triggered.
   * 
   * - ACTIVE: The rule is triggered.
   * 
   * - DISABLED: The rule is disabled due to an overdue payment.
   * 
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
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeTimeTriggerScalingRulesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

