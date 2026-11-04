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
   * The number of entries per page.
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
   * The Meta ad account ID.
   * 
   * @example
   * 239**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The budget ID.
   * 
   * @example
   * 233**
   */
  campaignId?: string;
  /**
   * @remarks
   * The budget name.
   * 
   * @example
   * test-campaign
   */
  campaignName?: string;
  /**
   * @remarks
   * The SpaceId or instance ID of the ISV sub-customer. This is the channel ID, which can be viewed on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * The pagination parameter object.
   * 
   * This parameter is required.
   */
  page?: ListMessageCampaignRequestPage;
  /**
   * @remarks
   * The Page ID of Messenger.
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
   * The budget status.
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

