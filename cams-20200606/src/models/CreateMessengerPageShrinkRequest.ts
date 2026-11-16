// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessengerPageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the authorized ad accounts.
   * 
   * This parameter is required.
   */
  adAccountIdsShrink?: string;
  /**
   * @remarks
   * The authorization code obtained after the embedding process is completed.
   * 
   * This parameter is required.
   * 
   * @example
   * EAA****
   */
  authenticationCode?: string;
  /**
   * @remarks
   * The ID of the Business platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 293***
   */
  businessId?: string;
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-s***
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Page ID of the Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 19283***
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      adAccountIdsShrink: 'AdAccountIds',
      authenticationCode: 'AuthenticationCode',
      businessId: 'BusinessId',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountIdsShrink: 'string',
      authenticationCode: 'string',
      businessId: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      pageId: 'string',
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

