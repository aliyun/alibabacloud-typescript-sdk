// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessengerSubscriptionTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID. View the ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * 233**
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The number of entries to return. Valid values: 1 to 1000.
   * 
   * @example
   * 67
   */
  limit?: number;
  ownerId?: number;
  /**
   * @remarks
   * The page ID for Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 239***
   */
  pageId?: string;
  /**
   * @remarks
   * The pagination key.
   * 
   * @example
   * 2ie**
   */
  pageKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The token type.
   * 
   * This parameter is required.
   * 
   * @example
   * customAudience
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      customAudienceId: 'CustomAudienceId',
      limit: 'Limit',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      pageKey: 'PageKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      customAudienceId: 'string',
      limit: 'number',
      ownerId: 'number',
      pageId: 'string',
      pageKey: 'string',
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

