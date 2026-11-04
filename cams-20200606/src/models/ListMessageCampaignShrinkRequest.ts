// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageCampaignShrinkRequest extends $dara.Model {
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
  pageShrink?: string;
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

