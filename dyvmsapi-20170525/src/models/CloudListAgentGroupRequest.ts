// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListAgentGroupRequest extends $dara.Model {
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
   * 外呼总组编号；说明：以外呼组编号为筛选条件查询
   * 
   * @example
   * WH123
   */
  gno?: string;
  /**
   * @remarks
   * 外呼总组名称；说明：以外呼组名称为筛选条件查询
   * 
   * @example
   * gpName
   */
  groupName?: string;
  /**
   * @remarks
   * 需要取出的数据条数；说明：大于0，最大不能超过1000，默认10
   * 
   * @example
   * 10
   */
  limit?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 从第几条开始取；说明：大于等于0，默认0
   * 
   * @example
   * 0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      groupName: 'GroupName',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      gno: 'string',
      groupName: 'string',
      limit: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

