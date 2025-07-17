// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRulesMatchingConditions extends $dara.Model {
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

export class ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRules extends $dara.Model {
  /**
   * @remarks
   * The matching conditions.
   */
  matchingConditions?: ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRulesMatchingConditions },
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

export class ListSilencePoliciesResponseBodyPageBeanSilencePolicies extends $dara.Model {
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
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The matching rules.
   */
  matchingRules?: ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRules[];
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
   * Indicates whether the silence policy is enabled. Valid values: enable and disable.
   * 
   * @example
   * enable
   */
  state?: string;
  /**
   * @remarks
   * The effective time. Valid values: WEEK: weekly DAY: daily
   * 
   * @example
   * WEEK
   */
  timePeriod?: string;
  /**
   * @remarks
   * Effective period.
   * 
   * @example
   * [{"endTime":"00:00","endWeek":"7","startTime":"00:00","startWeek":"1"}]
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
      matchingRules: { 'type': 'array', 'itemType': ListSilencePoliciesResponseBodyPageBeanSilencePoliciesMatchingRules },
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

export class ListSilencePoliciesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The queried silence policies.
   */
  silencePolicies?: ListSilencePoliciesResponseBodyPageBeanSilencePolicies[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The number of silence policies that were returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      silencePolicies: 'SilencePolicies',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      silencePolicies: { 'type': 'array', 'itemType': ListSilencePoliciesResponseBodyPageBeanSilencePolicies },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.silencePolicies)) {
      $dara.Model.validateArray(this.silencePolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSilencePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned pages.
   */
  pageBean?: ListSilencePoliciesResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListSilencePoliciesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

