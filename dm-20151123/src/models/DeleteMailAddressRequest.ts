// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMailAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Mail Address ID
   * 
   * This parameter is required.
   * 
   * @example
   * 23457
   */
  mailAddressId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mailAddressId: 'MailAddressId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailAddressId: 'number',
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

