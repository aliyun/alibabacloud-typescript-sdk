// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExtCodeSignRequest extends $dara.Model {
  /**
   * @remarks
   * 要修改的扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 01
   */
  existExtCode?: string;
  /**
   * @remarks
   * 修改后的扩展码A3
   * 
   * This parameter is required.
   * 
   * @example
   * 02
   */
  newExtCode?: string;
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
   * 示例值示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      existExtCode: 'ExistExtCode',
      newExtCode: 'NewExtCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existExtCode: 'string',
      newExtCode: 'string',
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

