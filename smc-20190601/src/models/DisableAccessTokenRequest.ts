// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the activation code.
   * 
   * This parameter is required.
   * 
   * @example
   * at-bp12g5gwup0yzmce****
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

