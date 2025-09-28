// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneWithTokenRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The token for phone number verification that is obtained by the JavaScript SDK. The validity period of the token is 10 minutes for China Telecom, 30 minutes for China Unicom, and 2 minutes for China Mobile. The token can be used only once.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad542****
   */
  spToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spToken: 'SpToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

