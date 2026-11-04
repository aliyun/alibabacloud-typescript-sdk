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
   * The budget ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23**
   */
  campaignId?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer. This is the channel ID, which can be viewed on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * The page number to query.
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

