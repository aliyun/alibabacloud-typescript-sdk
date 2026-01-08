// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessengerSubscriptionTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @example
   * 233**
   */
  customAudienceId?: string;
  /**
   * @example
   * 67
   */
  limit?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 239***
   */
  pageId?: string;
  /**
   * @example
   * 2ie**
   */
  pageKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
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

