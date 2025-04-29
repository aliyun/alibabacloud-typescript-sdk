// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UAIDCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @example
   * 示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
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
   * 示例值示例值
   */
  token?: string;
  /**
   * @example
   * 示例值示例值
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

