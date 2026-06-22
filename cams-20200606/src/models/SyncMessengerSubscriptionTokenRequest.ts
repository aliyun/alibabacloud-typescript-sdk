// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMessengerSubscriptionTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The Space ID of the Independent Software Vendor (ISV) sub-customer or the instance ID of the direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-xi****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The custom audience ID.
   * 
   * @example
   * 20399***
   */
  customAudienceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Page ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2030***
   */
  pageId?: string;
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
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      customAudienceId: 'string',
      ownerId: 'number',
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

