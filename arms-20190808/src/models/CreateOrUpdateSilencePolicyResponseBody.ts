// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRulesMatchingConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition.
   * 
   * @example
   * altertname
   */
  key?: string;
  /**
   * @remarks
   * The logical operator of the matching condition. Valid values:
   * 
   * *   `eq`: equal to
   * *   `neq`: not equal to
   * *   `in`: contains
   * *   `nin`: does not contain
   * *   `re`: regular expression match
   * *   `nre`: regular expression mismatch
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The value of the matching condition.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
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

export class CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRules extends $dara.Model {
  /**
   * @remarks
   * A list of matching conditions.
   */
  matchingConditions?: CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRulesMatchingConditions },
    };
  }

  validate() {
    if(Array.isArray(this.matchingConditions)) {
      $dara.Model.validateArray(this.matchingConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseBodySilencePolicy extends $dara.Model {
  /**
   * @remarks
   * The effective type. Valid values: PERMANENT: The policy is effective permanently. CYCLE_EFFECT: The policy is effective cyclically. CUSTOM_TIME: The policy is effective during a custom time period.
   * 
   * @example
   * PERMANENT
   */
  effectiveTimeType?: string;
  /**
   * @remarks
   * The ID of the silence policy.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * A list of matching rules.
   */
  matchingRules?: CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRules[];
  /**
   * @remarks
   * The name of the silence policy.
   * 
   * @example
   * silencepolicy_test
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to enable the silence policy. Valid values: enable and disable.
   * 
   * @example
   * enable
   */
  state?: string;
  /**
   * @remarks
   * Effective period. Valid values: DAY: daily WEEK: weekly
   * 
   * @example
   * WEEK
   */
  timePeriod?: string;
  /**
   * @remarks
   * The time period during which the silence policy is effective.
   * 
   * @example
   * [{startWeek: "1", startTime: "00:00", endTime: "11:59", endWeek:"7"}]
   */
  timeSlots?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTimeType: 'EffectiveTimeType',
      id: 'Id',
      matchingRules: 'MatchingRules',
      name: 'Name',
      state: 'State',
      timePeriod: 'TimePeriod',
      timeSlots: 'TimeSlots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTimeType: 'string',
      id: 'number',
      matchingRules: { 'type': 'array', 'itemType': CreateOrUpdateSilencePolicyResponseBodySilencePolicyMatchingRules },
      name: 'string',
      state: 'string',
      timePeriod: 'string',
      timeSlots: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.matchingRules)) {
      $dara.Model.validateArray(this.matchingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateSilencePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  /**
   * @remarks
   * The silence policy.
   */
  silencePolicy?: CreateOrUpdateSilencePolicyResponseBodySilencePolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      silencePolicy: 'SilencePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      silencePolicy: CreateOrUpdateSilencePolicyResponseBodySilencePolicy,
    };
  }

  validate() {
    if(this.silencePolicy && typeof (this.silencePolicy as any).validate === 'function') {
      (this.silencePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

