// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExtCodeSignRequest extends $dara.Model {
  /**
   * @remarks
   * 扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  extCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      extCode: 'ExtCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extCode: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

