// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ByTimeScalingRule extends $dara.Model {
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
   * 定时任务触发操作失败后，在此时间内重试。单位为秒，取值范围：0~3600。
   * 
   * @example
   * 600
   */
  launchExpirationTime?: number;
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
   * - recurrenceType 取 MINUTELY 时，只能填一个数值，取值范围：1~1440。
   * - recurrenceType 取 HOURLY 时，只能填一个数值，取值范围：1~24。
   * - recurrenceType 取 DAILY 时，只能填一个数值，取值范围：1~31。
   * - recurrenceType 取 WEEKLY 时，可以填入多个值，填多个值时使用英文逗号（,）分隔。周一到周天分别用MON，TUE，WED，THU，FRI，SAT，SUN代替。 比如 MON,FRI,SUN 代表周一、周五、周天。
   * - recurrenceType 取 MONTHLY 时，格式为A-B或者A,B。A、B的取值范围为1~31，如果使用A-B时B必须大于A。
   * 
   * @example
   * MON,FRI,SUN
   */
  recurrenceValue?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchExpirationTime: 'number',
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

