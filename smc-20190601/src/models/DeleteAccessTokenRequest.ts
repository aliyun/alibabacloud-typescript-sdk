// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * This parameter is required.
   * 
   * @example
   * at-bp1akz2zp67r0k6r****
   */
  accessTokenId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenId: 'AccessTokenId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

