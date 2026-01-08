// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAudienceShrinkRequest extends $dara.Model {
  /**
   * @example
   * 339**
   */
  adAccountId?: string;
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
   * 239**
   */
  customAudienceId?: string;
  /**
   * @example
   * name
   */
  customAudienceName?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3939**
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
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

