// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMobileRequest extends $dara.Model {
  /**
   * @remarks
   * The token obtained by the SDK for your app.
   * 
   * This parameter is required.
   * 
   * @example
   * Dfafdafad542****
   */
  accessCode?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 123456
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 13800****00
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessCode: 'AccessCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
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

