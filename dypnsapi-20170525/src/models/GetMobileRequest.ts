// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMobileRequest extends $dara.Model {
  /**
   * @remarks
   * The logon token obtained by the SDK for your app.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad5422****
   */
  accessToken?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 22345****
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      outId: 'string',
      ownerId: 'number',
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

