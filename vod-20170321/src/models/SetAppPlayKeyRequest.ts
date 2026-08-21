// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAppPlayKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-1000231
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The playback key.
   * - Only uppercase letters, lowercase letters, and digits are supported. The length must be 8 to 20 characters.
   * - UTF-8 encoding.
   * 
   * @example
   * yzNgTUtAl6HAuosIA
   */
  playKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      playKey: 'PlayKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      playKey: 'string',
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

