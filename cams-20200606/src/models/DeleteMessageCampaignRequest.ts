// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMessageCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 293**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The campaign ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 329**
   */
  campaignId?: string;
  /**
   * @remarks
   * The space ID of an Independent Software Vendor (ISV) sub-customer or the instance ID of a direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-x**
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Page ID of Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 293***
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      campaignId: 'CampaignId',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      campaignId: 'string',
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

