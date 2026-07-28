// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingRuleAdjustInfos extends $dara.Model {
  /**
   * @remarks
   * The type of the component to be adjusted.
   */
  componentType?: string;
  /**
   * @remarks
   * The target value for the adjustment.
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'componentType',
      targetValue: 'targetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScalingRule extends $dara.Model {
  /**
   * @remarks
   * The adjustment information of the scaling rule.
   */
  adjustInfos?: ScalingRuleAdjustInfos[];
  /**
   * @remarks
   * The cron expression for the scaling schedule.
   */
  cronStr?: string;
  /**
   * @remarks
   * Indicates whether the scaling rule is disabled.
   */
  disabled?: boolean;
  /**
   * @remarks
   * The end time of the scaling rule. Unit: milliseconds.
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the scaling rule.
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the scaling rule.
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The start time of the scaling rule. Unit: milliseconds.
   */
  startTime?: number;
  /**
   * @remarks
   * The time zone of the scaling rule.
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustInfos: 'adjustInfos',
      cronStr: 'cronStr',
      disabled: 'disabled',
      endTime: 'endTime',
      ruleId: 'ruleId',
      scalingRuleName: 'scalingRuleName',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustInfos: { 'type': 'array', 'itemType': ScalingRuleAdjustInfos },
      cronStr: 'string',
      disabled: 'boolean',
      endTime: 'number',
      ruleId: 'string',
      scalingRuleName: 'string',
      startTime: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adjustInfos)) {
      $dara.Model.validateArray(this.adjustInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

