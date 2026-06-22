// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageCampaignShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Meta ad account.
   * 
   * @example
   * 239**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The ID of the budget.
   * 
   * @example
   * 233**
   */
  campaignId?: string;
  /**
   * @remarks
   * The name of the campaign.
   * 
   * @example
   * test-campaign
   */
  campaignName?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer or the instance ID of the direct customer. You can view this ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination parameters.
   * 
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * The Page ID for Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 239***
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the budget.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      campaignId: 'CampaignId',
      campaignName: 'CampaignName',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      pageShrink: 'Page',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      campaignId: 'string',
      campaignName: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      pageShrink: 'string',
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

