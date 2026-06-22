// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAudienceRequestPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  index?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 95
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

export class ListCustomAudienceRequest extends $dara.Model {
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
   * The Space ID of the Independent Software Vendor (ISV) sub-customer or the instance ID of the direct customers. This is the channel ID. Find the ID on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The ID of the custom audience.
   * 
   * @example
   * 239**
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The name of the custom audience.
   * 
   * @example
   * name
   */
  customAudienceName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination settings.
   * 
   * This parameter is required.
   */
  page?: ListCustomAudienceRequestPage;
  /**
   * @remarks
   * The Page ID for Messenger.
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
      page: 'Page',
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
      page: ListCustomAudienceRequestPage,
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tokenType: 'string',
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

