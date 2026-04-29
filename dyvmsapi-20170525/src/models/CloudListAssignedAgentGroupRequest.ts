// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListAssignedAgentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 查询条件座席名称；说明：以座席名称为筛选条件查询
   * 
   * @example
   * 111111111
   */
  cname?: string;
  /**
   * @remarks
   * 查询条件座席编号；说明：以座席编号为筛选条件查询
   * 
   * @example
   * 111111111
   */
  cno?: string;
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
   * 外呼组编号；说明：获取此gno下绑定的座席信息列表
   * 
   * This parameter is required.
   * 
   * @example
   * WH113
   */
  gno?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      cno: 'string',
      enterpriseId: 'number',
      gno: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

