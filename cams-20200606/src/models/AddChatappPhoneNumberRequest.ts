// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChatappPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  cc?: string;
  /**
   * @remarks
   * Adds a phone number for a WhatsApp Business account (WABA).
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
   * AddChatappPhoneNumber
   * 
   * This parameter is required.
   * 
   * @example
   * 1380000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * cams:ChatappPhoneNumberRegister
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
   * Private
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

