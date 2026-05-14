// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkStatIbRequest extends $dara.Model {
  /**
   * @remarks
   * 同步日期，时间格式(yyyyMMdd)
   * 
   * This parameter is required.
   * 
   * @example
   * 20240303
   */
  date?: string;
  /**
   * @remarks
   * 同步日期截止，时间格式(yyyyMMdd) ，默认与date相同，查询时间范围最大支持6个月
   * 
   * @example
   * 20240303
   */
  dateEnd?: string;
  /**
   * @remarks
   * 查询结束时间 (单位：小时，范围：0-23)，缺省值为23
   * 
   * @example
   * 23
   */
  endHour?: number;
  /**
   * @remarks
   * 查询结束分钟 (单位：分，范围：0、15、30、45、59)，缺省值为59 注：由startHour:startMinute和endHour:endMinute组成的开始时间和结束时间，开始时间不得晚于或等于结束时间。 只使用startHour或endHour时，请注意startMinute与endMinute的缺省值。
   * 
   * @example
   * 59
   */
  endMinute?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 指定需要显示的字段 (默认全部)
   * 
   * @example
   * ibTotalCount,ibAnsweredCount
   */
  fields?: string;
  /**
   * @remarks
   * 热线号码，指定需要查询的热线号码 (默认全部热线号码)
   * 
   * @example
   * xxxx,xxxx
   */
  hotlines?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 查询开始时间 (单位：小时，范围：0-23)，缺省值为0
   * 
   * @example
   * 0
   */
  startHour?: number;
  /**
   * @remarks
   * 查询开始分钟 (单位：分，范围：0、15、30、45)，缺省值为0
   * 
   * @example
   * 0
   */
  startMinute?: number;
  /**
   * @remarks
   * 统计方式 (默认为2) 取值范围为[2,3]; 2:汇总统计;3:分时统计 注：分时统计下只会返回存在队列工作情况的数据，若队列在该时段没有工作或来电，则不会返回该时段的数据
   * 
   * @example
   * 2
   */
  statisticMethod?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      dateEnd: 'DateEnd',
      endHour: 'EndHour',
      endMinute: 'EndMinute',
      enterpriseId: 'EnterpriseId',
      fields: 'Fields',
      hotlines: 'Hotlines',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startHour: 'StartHour',
      startMinute: 'StartMinute',
      statisticMethod: 'StatisticMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      dateEnd: 'string',
      endHour: 'number',
      endMinute: 'number',
      enterpriseId: 'number',
      fields: 'string',
      hotlines: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startHour: 'number',
      startMinute: 'number',
      statisticMethod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

