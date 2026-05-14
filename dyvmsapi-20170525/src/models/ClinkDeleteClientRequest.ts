// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDeleteClientRequest extends $dara.Model {
  /**
   * @remarks
   * 座席工号，长度为4-11个字符，必须全部为数字
   * 
   * This parameter is required.
   * 
   * @example
   * 14
   */
  cno?: number;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 28
   */
  enterpriseId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'number',
      enterpriseId: 'number',
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

