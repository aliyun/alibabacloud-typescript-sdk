// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidPhoneCodeRequest extends $dara.Model {
  /**
   * @remarks
   * 验证码
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  certifyCode?: string;
  ownerId?: number;
  /**
   * @remarks
   * 手机号
   * 
   * This parameter is required.
   * 
   * @example
   * 137****1234
   */
  phoneNo?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      certifyCode: 'CertifyCode',
      ownerId: 'OwnerId',
      phoneNo: 'PhoneNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyCode: 'string',
      ownerId: 'number',
      phoneNo: 'string',
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

