// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChatappPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The country code.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  cc?: string;
  /**
   * @remarks
   * The Space ID of the Independent Software Vendor (ISV) sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 93928389****
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The pre-verified phone number.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * 1020****
   * 
   * @deprecated
   */
  preValidateId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * Alibaba
   */
  verifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      preValidateId: 'PreValidateId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifiedName: 'VerifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      preValidateId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

