// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessengerPageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  adAccountIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authenticationCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  businessId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  custSpaceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      adAccountIds: 'AdAccountIds',
      authenticationCode: 'AuthenticationCode',
      businessId: 'BusinessId',
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountIds: { 'type': 'array', 'itemType': 'string' },
      authenticationCode: 'string',
      businessId: 'string',
      custSpaceId: 'string',
      ownerId: 'number',
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.adAccountIds)) {
      $dara.Model.validateArray(this.adAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

