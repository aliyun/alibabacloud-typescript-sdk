// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveReplyMailAddressRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Email address Ticket credential, part of the string in the verification email\\"s URL.
   * 
   * This parameter is required.
   * 
   * @example
   * a724068dac9a45d19574375adeca0d7d
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

