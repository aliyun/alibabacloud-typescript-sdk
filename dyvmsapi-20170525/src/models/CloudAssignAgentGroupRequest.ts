// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAssignAgentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 说明：多个座席编号之间以英文逗号( , )分隔，一次最多支持1000个cno；同一座席只能存在于一个外呼组，重复分配会自动移动到新的外呼组中
   * 
   * @example
   * 1000,1111
   */
  cnos?: string;
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
   * 外呼组编号；说明：添加此gno对应的外呼组与cnos对应的座席的绑定从属关系; 同一外呼组最多可包含1000个座席
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
      cnos: 'Cnos',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
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

