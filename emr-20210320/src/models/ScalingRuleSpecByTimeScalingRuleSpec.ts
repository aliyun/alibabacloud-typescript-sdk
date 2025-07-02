// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingRuleSpecByTimeScalingRuleSpec extends $dara.Model {
  /**
   * @remarks
   * 重复执行定时任务的结束时间戳。单位为毫秒。
   * 
   * @example
   * 1639714800000
   */
  endTime?: number;
  /**
   * @remarks
   * 启动时间戳。单位为毫秒。
   * 
   * This parameter is required.
   * 
   * @example
   * 1639714634819
   */
  launchTime?: number;
  /**
   * @remarks
   * 指定时间规则的执行类型。
   * 
   * @example
   * WEEKLY
   */
  recurrenceType?: string;
  /**
   * @remarks
   * 重复执行定时任务的数值。具体取值取决于 recurrenceType 设置。
   * 
   * @example
   * MON,FRI,SUN
   */
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

