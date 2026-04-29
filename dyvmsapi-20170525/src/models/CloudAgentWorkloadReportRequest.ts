// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentWorkloadReportRequest extends $dara.Model {
  /**
   * @remarks
   * 座席号；说明：根据座席工号查询指定座席的工作量统计支持按照多个座席工号进行查询，多个座席工号之间使用英文逗号","分隔，默认查询账户下所有座席的工作量统计
   * 
   * @example
   * 1111,2222
   */
  cnos?: string;
  /**
   * @remarks
   * 说明：统计日期的结束时间，格式：yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-15
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
   * 说明：根据外呼编号查询指定座席的工作量统计,默认查询账户下所有座席的工作量统计
   * 
   * @example
   * WH12
   */
  gnos?: string;
  /**
   * @remarks
   * 查询条数；取值：最大不能超过1000，默认10
   * 
   * @example
   * 10
   */
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * 说明：统计日期的开始时间，格式：yyyy-MM-dd
   * 
   * This parameter is required.
   * 
   * @example
   * 2025-06-13
   */
  startTime?: string;
  /**
   * @remarks
   * 统计方法；说明：0：分时1：分日2：汇总 10：队列汇总
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  statisticMethod?: number;
  /**
   * @remarks
   * 说明：统计报表类型，1：日报表2：周报表3：月报表4：自定义时间
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeRangeType?: number;
  static names(): { [key: string]: string } {
    return {
      cnos: 'Cnos',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      gnos: 'Gnos',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      start: 'Start',
      startTime: 'StartTime',
      statisticMethod: 'StatisticMethod',
      timeRangeType: 'TimeRangeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
      endTime: 'string',
      enterpriseId: 'number',
      gnos: 'string',
      limit: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      start: 'number',
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

