// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudUnassignAgentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 座席编号；说明：解除此cno对应座席 与 gno对应外呼组 的绑定关系
   * 
   * This parameter is required.
   * 
   * @example
   * 12221
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
   * 外呼组编号；说明：解除此gno对应外呼组 与 cno对应座席 的绑定关系
   * 
   * This parameter is required.
   * 
   * @example
   * WH123
   */
  gno?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

