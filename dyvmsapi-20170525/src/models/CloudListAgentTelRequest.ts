// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListAgentTelRequest extends $dara.Model {
  /**
   * @remarks
   * 座席工号；3-10位数字
   * 
   * This parameter is required.
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7122600
   */
  enterpriseId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 座席电话
   * 
   * @example
   * 41008502
   */
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tel: 'Tel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      enterpriseId: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

