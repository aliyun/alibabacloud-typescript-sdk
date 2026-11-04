// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomAudienceUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3939**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The last batch flag.
   * 
   * @example
   * false
   */
  batchLastFlag?: boolean;
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer.
   * 
   * - The instance ID of the direct customer.
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
   * This parameter is required.
   * 
   * @example
   * 399**
   */
  customAudienceId?: string;
  /**
   * @remarks
   * The estimated phone number data.
   * 
   * @example
   * 26
   */
  estimatedNumTotal?: number;
  ownerId?: number;
  /**
   * @remarks
   * The Page ID of Messenger.
   * 
   * This parameter is required.
   * 
   * @example
   * 239**
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of users.
   * 
   * This parameter is required.
   */
  usersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      batchLastFlag: 'BatchLastFlag',
      custSpaceId: 'CustSpaceId',
      customAudienceId: 'CustomAudienceId',
      estimatedNumTotal: 'EstimatedNumTotal',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      usersShrink: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      batchLastFlag: 'boolean',
      custSpaceId: 'string',
      customAudienceId: 'string',
      estimatedNumTotal: 'number',
      ownerId: 'number',
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      usersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

