// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageCampaignRequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  index?: number;
  /**
   * @remarks
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
   * @example
   * 239**
   */
  adAccountId?: string;
  /**
   * @example
   * 233**
   */
  campaignId?: string;
  /**
   * @example
   * test-campaign
   */
  campaignName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListMessageCampaignRequestPage;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 239***
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
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

