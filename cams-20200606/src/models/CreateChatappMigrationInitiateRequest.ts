// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappMigrationInitiateRequest extends $dara.Model {
  /**
   * @remarks
   * The country code.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  countryCode?: string;
  /**
   * @remarks
   * The Space ID of the Independent Software Vendor (ISV) sub-customer.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number. Do not include the country code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobileNumber?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      countryCode: 'CountryCode',
      custSpaceId: 'CustSpaceId',
      mobileNumber: 'MobileNumber',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryCode: 'string',
      custSpaceId: 'string',
      mobileNumber: 'string',
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

