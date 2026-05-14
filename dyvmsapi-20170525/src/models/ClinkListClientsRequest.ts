// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListClientsRequest extends $dara.Model {
  /**
   * @remarks
   * 是否激活，1: 激活；0: 未激活
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 绑定电话
   * 
   * @example
   * xxx
   */
  bindTel?: string;
  /**
   * @remarks
   * 外显号码
   * 
   * @example
   * xxx
   */
  clid?: string;
  /**
   * @remarks
   * 创建时间查询范围-结束时间,秒级时间戳
   * 
   * @example
   * 1775024775
   */
  endTime?: number;
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
   * 查询记录条数，默认值为 10，最大范围 100
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * 偏移量，默认值为 0，最大范围 10000
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 12112
   */
  qno?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 创建时间查询范围-开始时间,秒级时间戳
   * 
   * @example
   * 1775024775
   */
  startTime?: number;
  /**
   * @remarks
   * 修改时间查询范围-结束时间,秒级时间戳
   * 
   * @example
   * 1775024775
   */
  updateEndTime?: number;
  /**
   * @remarks
   * 修改时间查询范围-开始时间,秒级时间戳
   * 
   * @example
   * 1775024775
   */
  updateStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      bindTel: 'BindTel',
      clid: 'Clid',
      endTime: 'EndTime',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      offset: 'Offset',
      ownerId: 'OwnerId',
      qno: 'Qno',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      updateEndTime: 'UpdateEndTime',
      updateStartTime: 'UpdateStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      bindTel: 'string',
      clid: 'string',
      endTime: 'number',
      enterpriseId: 'number',
      limit: 'number',
      offset: 'number',
      ownerId: 'number',
      qno: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'number',
      updateEndTime: 'number',
      updateStartTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

