// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods } from "./ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods";


export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedules extends $dara.Model {
  /**
   * @remarks
   * 策略执行周期的类型。必须同时指定`RecurrenceType`和`RecurrenceValues`。
   * 
   * @example
   * weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * 策略执行周期的数值列表。
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * 策略执行周期的时间段列表。时间段设置要求：
   * 
   * - 最多可添加3个时间段。
   * - 时间段之间不重叠。
   * - 时间段之间的间隔大于或等于5分钟。
   * - 单个时间段的时长大于或等于15分钟。
   * - 所有时间段累计不跨天。
   */
  timerPeriods?: ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods },
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    if(Array.isArray(this.timerPeriods)) {
      $dara.Model.validateArray(this.timerPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

