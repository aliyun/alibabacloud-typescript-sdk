// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListQueueRequest extends $dara.Model {
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 示例值示例值示例值
   */
  description?: string;
  /**
   * @remarks
   * 创建时间终止时间点；取值说明："2019-10-11 23:59:59"
   * 
   * @example
   * 2026-04-20 23:00:00
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
   * 条数；正整数，大于0，最大不能超过500， 默认为500
   * 
   * @example
   * 500
   */
  limit?: number;
  /**
   * @remarks
   * 第几条开始；正整数 大于等于0 默认为0
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * 排序方式,按照创建时间排序；0正序 1倒序
   * 
   * @example
   * 0
   */
  order?: number;
  ownerId?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 233
   */
  qno?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 创建时间起始时间点；取值说明："2019-10-11 00:00:00"
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      offset: 'Offset',
      order: 'Order',
      ownerId: 'OwnerId',
      qno: 'Qno',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      enterpriseId: 'number',
      limit: 'number',
      offset: 'number',
      order: 'number',
      ownerId: 'number',
      qno: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

