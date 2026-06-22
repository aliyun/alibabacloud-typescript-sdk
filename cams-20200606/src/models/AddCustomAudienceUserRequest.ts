// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomAudienceUserRequestUsers extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * Example
   */
  email?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * Example
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomAudienceUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Meta ad account.
   * 
   * This parameter is required.
   * 
   * @example
   * 3939**
   */
  adAccountId?: string;
  /**
   * @remarks
   * Indicates whether this is the last batch of data.
   * 
   * @example
   * false
   */
  batchLastFlag?: boolean;
  /**
   * @remarks
   * The space ID of the Independent Software Vendor (ISV) sub-customer or the instance ID of a direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ID of the custom audience.
   * 
   * This parameter is required.
   * 
   * @example
   * 399**
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The estimated total number of users.
   * 
   * @example
   * 26
   */
  estimatedNumTotal?: number;
  ownerId?: number;
  /**
   * @remarks
   * The Page ID for Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 239**
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A list of users.
   * 
   * This parameter is required.
   */
  users?: AddCustomAudienceUserRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      batchLastFlag: 'BatchLastFlag',
      custSpaceId: 'CustSpaceId',
      customAudienceId: 'CustomAudienceId',
      estimatedNumTotal: 'EstimatedNumTotal',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      batchLastFlag: 'boolean',
      custSpaceId: 'string',
      customAudienceId: 'string',
      estimatedNumTotal: 'number',
      ownerId: 'number',
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      users: { 'type': 'array', 'itemType': AddCustomAudienceUserRequestUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

