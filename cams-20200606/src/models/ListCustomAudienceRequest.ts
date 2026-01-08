// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAudienceRequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
   */
  index?: number;
  /**
   * @remarks
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
  page?: ListCustomAudienceRequestPage;
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

