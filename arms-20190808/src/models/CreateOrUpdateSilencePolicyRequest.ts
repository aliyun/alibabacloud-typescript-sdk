// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSilencePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The effective duration of the silence policy. Valid values: PERMANENT, CUSTOM_TIME, and CYCLE_EFFECT.
   * 
   * @example
   * PERMANENT
   */
  effectiveTimeType?: string;
  /**
   * @remarks
   * The ID of the silence policy.
   * 
   * *   If you do not configure this parameter, a new silence policy is created.
   * *   If you configure this parameter, the specified silence policy is modified.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The matching rules. The following code shows the format of matching rules:
   * 
   *     [
   *          {
   *     	 "matchingConditions": [
   *     	 {
   *     	 "value": "test", // The value of the matching condition. 
   *     	 "key": "altertname", // The key of the matching condition. 
   *     	 "operator": "eq" // The logical operator of the matching condition, including eq (equal to), neq (not equal to), in (contains), nin (does not contain), re (regular expression match), and nre (regular expression mismatch).   
   *     	 }
   *     	 ]
   *          }
   *     	 ]
   * 
   * @example
   * [ 	 { 	 "matchingConditions": [ 	 { 	 "value": "test", 	 "key": "altertname", 	 "operator": "eq" 	 } 	 ]      } 	 ]
   */
  matchingRules?: string;
  /**
   * @remarks
   * The name of the silence policy.
   * 
   * This parameter is required.
   * 
   * @example
   * silencepolicy_test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The recurring period. This parameter is required when EffectiveTimeType is set to CYCLE_EFFECT. DAY: The silence policy is effective by day. WEEK: The silence policy is effective by week.
   * 
   * @example
   * DAY
   */
  timePeriod?: string;
  /**
   * @remarks
   * The time period during which the silence policy is effective. If you set EffectiveTimeType to CUSTOM_TIME, specify a custom time period in the following format: [{"startTime":"2024-08-04 22:13","endTime":"2024-08-04 22:21"}] If you set EffectiveTimeType to CYCLE_EFFECT and TimePeriod to DAY, specify a custom time period in the following format: [{"startTime":"22:13","endTime":"22:21"}]. The start time cannot be later than the end time. If you set EffectiveTimeType to CYCLE_EFFECT and TimePeriod to WEEK, specify a custom time period in the following format: [{"startWeek":"1", "endWeek":"2" "startTime":"22:13","endTime":"22:21"}]. Valid values of startWeek and endWeek: 1 to 7. The start time cannot be later than the end time.
   * 
   * @example
   * [{"startTime":"2024-08-04 22:13","endTime":"2024-08-04 22:21"}]
   */
  timeSlots?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTimeType: 'EffectiveTimeType',
      id: 'Id',
      matchingRules: 'MatchingRules',
      name: 'Name',
      regionId: 'RegionId',
      state: 'State',
      timePeriod: 'TimePeriod',
      timeSlots: 'TimeSlots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTimeType: 'string',
      id: 'number',
      matchingRules: 'string',
      name: 'string',
      regionId: 'string',
      state: 'string',
      timePeriod: 'string',
      timeSlots: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

