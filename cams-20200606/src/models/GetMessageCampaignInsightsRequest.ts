// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCampaignInsightsRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23***
   */
  adAccountId?: string;
  /**
   * @remarks
   * The ID of the campaign.
   * 
   * This parameter is required.
   * 
   * @example
   * 23**
   */
  campaignId?: string;
  /**
   * @remarks
   * The Space ID of the Independent Software Vendor (ISV) sub-customer or the instance ID of the direct customers. This is the channel ID. You can find the channel ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * The Page ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 323**
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

