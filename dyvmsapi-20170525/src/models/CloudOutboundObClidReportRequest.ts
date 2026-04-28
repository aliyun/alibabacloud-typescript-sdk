// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudOutboundObClidReportRequest extends $dara.Model {
  /**
   * @remarks
   * 说明：根据区号查询指定区域的预览外呼被叫号码统计支持按照多个区号进行查询，多个区号之间使用英文逗号","分隔，默认查询账户下所有地区的预览外呼被叫号码统计
   * 
   * @example
   * 010
   */
  areaCodes?: string;
  /**
   * @remarks
   * 统计时段结束时间；取值：0~23,默认值为24时
   * 
   * @example
   * 23
   */
  endHour?: number;
  /**
   * @remarks
   * 说明：统计日期的结束时间，格式：yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-06-13
   */
  endTime?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 查询条数；取值：最大不能超过1000，默认10
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * 查询起始位置；取值：大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * 统计时段开始时间；取值：0~23,默认值为0时
   * 
   * @example
   * 0
   */
  startHour?: number;
  /**
   * @remarks
   * 说明：统计日期的开始时间，格式：yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2017-06-13
   */
  startTime?: string;
  /**
   * @remarks
   * 统计方法；说明：0：分时1：分日2：汇总11：中继群组汇总
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  statisticMethod?: number;
  /**
   * @remarks
   * 统计类型；说明：统计报表时间类型，1：日报表2：周报表3：月报表4：自定义时间
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeRangeType?: number;
  static names(): { [key: string]: string } {
    return {
      areaCodes: 'AreaCodes',
      endHour: 'EndHour',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      start: 'Start',
      startHour: 'StartHour',
      startTime: 'StartTime',
      statisticMethod: 'StatisticMethod',
      timeRangeType: 'TimeRangeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCodes: 'string',
      endHour: 'number',
      endTime: 'string',
      enterpriseId: 'number',
      limit: 'number',
      start: 'number',
      startHour: 'number',
      startTime: 'string',
      statisticMethod: 'number',
      timeRangeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

