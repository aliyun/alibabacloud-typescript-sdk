// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAttributeRequestNodePoolStrategyRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @remarks
   * 资源数量。
   * 
   * @example
   * 2
   */
  amount?: number;
  /**
   * @remarks
   * 结束时间。格式为HH:mm。
   * 
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @remarks
   * 开始时间。格式为HH:mm。
   * 
   * @example
   * 12:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

