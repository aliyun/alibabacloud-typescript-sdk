// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TIME_TRIGGER
   */
  newTriggerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TIME_TRIGGER
   */
  oldTriggerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *   "nodeNumber": 1,
   *   "scalingRuleName": "test1",
   *   "scalingOutRule": {
   *     "year": 2026,
   *     "month": 3,
   *     "day": 2,
   *     "hour": 5,
   *     "minute": 50,
   *     "second": 0,
   *     "recurrenceInterval": 1,
   *     "recurrenceType": "DAILY",
   *     "recurrenceValues": null
   *   },
   *   "scalingInRule": {
   *     "year": 2026,
   *     "month": 3,
   *     "day": 2,
   *     "hour": 6,
   *     "minute": 50,
   *     "second": 0,
   *     "recurrenceInterval": 1,
   *     "recurrenceType": "DAILY",
   *     "recurrenceValues": null
   *   }
   * }
   */
  rule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asr-bp10s4t9l21u9qtyrtco
   */
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      newTriggerType: 'NewTriggerType',
      nodeGroupId: 'NodeGroupId',
      oldTriggerType: 'OldTriggerType',
      rule: 'Rule',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newTriggerType: 'string',
      nodeGroupId: 'string',
      oldTriggerType: 'string',
      rule: 'string',
      scalingRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

