// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAudienceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * @example
   * 339**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer. This is the channel ID. You can view it on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The custom audience ID.
   * 
   * @example
   * 239**
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The custom audience name.
   * 
   * @example
   * name
   */
  customAudienceName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination information.
   * 
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * The page ID of Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 3939**
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The token type.
   * 
   * @example
   * custom
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      custSpaceId: 'CustSpaceId',
      customAudienceId: 'CustomAudienceId',
      customAudienceName: 'CustomAudienceName',
      ownerId: 'OwnerId',
      pageShrink: 'Page',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      custSpaceId: 'string',
      customAudienceId: 'string',
      customAudienceName: 'string',
      ownerId: 'number',
      pageShrink: 'string',
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

