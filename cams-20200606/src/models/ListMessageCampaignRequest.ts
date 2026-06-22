// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageCampaignRequestPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  index?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 55
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageCampaignRequest extends $dara.Model {
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
  page?: ListMessageCampaignRequestPage;
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
      page: 'Page',
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
      page: ListMessageCampaignRequestPage,
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

