// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPhoneBusinessProfileRequest extends $dara.Model {
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * business profile
   */
  about?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * The phone number.
   */
  address?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The description of the phone number.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * aa@aliyun.com
   */
  email?: string;
  ownerId?: number;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * @example
   * http://a.img
   */
  profilePictureUrl?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The industry.
   * 
   * >  Valid values: OTHER, AUTO, BEAUTY, APPAREL, EDU, ENTERTAIN, EVENT_PLAN, FINANCE, GROCERY, GOVT, HOTEL, HEALTH, NONPROFIT, PROF_SERVICES, RETAIL, TRAVEL, and RESTAURANT.
   * 
   * @example
   * OTHER
   */
  vertical?: string;
  /**
   * @remarks
   * The URLs of the websites.
   */
  websites?: string[];
  static names(): { [key: string]: string } {
    return {
      about: 'About',
      address: 'Address',
      custSpaceId: 'CustSpaceId',
      description: 'Description',
      email: 'Email',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      profilePictureUrl: 'ProfilePictureUrl',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vertical: 'Vertical',
      websites: 'Websites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      about: 'string',
      address: 'string',
      custSpaceId: 'string',
      description: 'string',
      email: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      profilePictureUrl: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vertical: 'string',
      websites: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.websites)) {
      $dara.Model.validateArray(this.websites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

