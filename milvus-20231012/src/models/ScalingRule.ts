// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingRuleAdjustInfos extends $dara.Model {
  componentType?: string;
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
  adjustInfos?: ScalingRuleAdjustInfos[];
  cronStr?: string;
  disabled?: boolean;
  endTime?: number;
  ruleId?: string;
  scalingRuleName?: string;
  startTime?: number;
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

