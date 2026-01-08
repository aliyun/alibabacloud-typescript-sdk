// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMessageCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 293**
   */
  adAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 329**
   */
  campaignId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-x**
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
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

