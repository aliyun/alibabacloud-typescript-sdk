// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAppPlayKeyRequest extends $dara.Model {
  /**
   * @example
   * app-1000231
   */
  appId?: string;
  ownerId?: number;
  /**
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

