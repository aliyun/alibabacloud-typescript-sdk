// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HwD97InG
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @example
   * 示例值
   */
  ip?: string;
  /**
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  province?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MIGfMA0********3DQEBAQUAA4GNADCB
   */
  token?: string;
  /**
   * @example
   * Md****a3Em
   */
  userGrantId?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      ip: 'Ip',
      outId: 'OutId',
      ownerId: 'OwnerId',
      province: 'Province',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      token: 'Token',
      userGrantId: 'UserGrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      ip: 'string',
      outId: 'string',
      ownerId: 'number',
      province: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      token: 'string',
      userGrantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

