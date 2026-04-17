// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes extends $dara.Model {
  weeklyTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      weeklyTypes: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weeklyTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.weeklyTypes)) {
      $dara.Model.validateArray(this.weeklyTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules extends $dara.Model {
  durationMinutes?: number;
  enable?: boolean;
  estimatedElasticScalingDownTimeSecs?: number;
  estimatedElasticScalingUpTimeSecs?: number;
  firstScheduledTime?: number;
  repeatType?: string;
  reservedPubFlow?: number;
  reservedSubFlow?: number;
  ruleId?: number;
  ruleName?: string;
  scheduleType?: string;
  timeZone?: string;
  weeklyTypes?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes;
  static names(): { [key: string]: string } {
    return {
      durationMinutes: 'DurationMinutes',
      enable: 'Enable',
      estimatedElasticScalingDownTimeSecs: 'EstimatedElasticScalingDownTimeSecs',
      estimatedElasticScalingUpTimeSecs: 'EstimatedElasticScalingUpTimeSecs',
      firstScheduledTime: 'FirstScheduledTime',
      repeatType: 'RepeatType',
      reservedPubFlow: 'ReservedPubFlow',
      reservedSubFlow: 'ReservedSubFlow',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      scheduleType: 'ScheduleType',
      timeZone: 'TimeZone',
      weeklyTypes: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationMinutes: 'number',
      enable: 'boolean',
      estimatedElasticScalingDownTimeSecs: 'number',
      estimatedElasticScalingUpTimeSecs: 'number',
      firstScheduledTime: 'number',
      repeatType: 'string',
      reservedPubFlow: 'number',
      reservedSubFlow: 'number',
      ruleId: 'number',
      ruleName: 'string',
      scheduleType: 'string',
      timeZone: 'string',
      weeklyTypes: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes,
    };
  }

  validate() {
    if(this.weeklyTypes && typeof (this.weeklyTypes as any).validate === 'function') {
      (this.weeklyTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules extends $dara.Model {
  scheduledScalingRules?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules[];
  static names(): { [key: string]: string } {
    return {
      scheduledScalingRules: 'ScheduledScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledScalingRules: { 'type': 'array', 'itemType': GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledScalingRules)) {
      $dara.Model.validateArray(this.scheduledScalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBodyData extends $dara.Model {
  scheduledScalingRules?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules;
  static names(): { [key: string]: string } {
    return {
      scheduledScalingRules: 'ScheduledScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledScalingRules: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules,
    };
  }

  validate() {
    if(this.scheduledScalingRules && typeof (this.scheduledScalingRules as any).validate === 'function') {
      (this.scheduledScalingRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScalingConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAutoScalingConfigurationResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7A39AE5-0B36-4442-A304-E0885265***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetAutoScalingConfigurationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

