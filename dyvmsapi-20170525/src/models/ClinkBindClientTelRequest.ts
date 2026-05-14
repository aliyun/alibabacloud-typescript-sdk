// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkBindClientTelRequest extends $dara.Model {
  /**
   * @remarks
   * 座席号
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
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 是否绑定 1: 是，0: 否
   * 
   * @example
   * 1
   */
  isBind?: number;
  /**
   * @remarks
   * 是否同步为备用手机 1: 是，0: 否
   * 
   * @example
   * 1
   */
  isReserveTel?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 电话号码
   * 
   * This parameter is required.
   * 
   * @example
   * 177xxxx7750
   */
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      isBind: 'IsBind',
      isReserveTel: 'IsReserveTel',
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
      isBind: 'number',
      isReserveTel: 'number',
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

