// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The start position of the next page for pagination.
   * 
   * @example
   * kdkii48jfjjei3
   */
  after?: string;
  /**
   * @remarks
   * The end position of the previous page for pagination.
   * 
   * @example
   * wiidkd939kek93
   */
  before?: string;
  /**
   * @remarks
   * The ID of the business platform where the WABA is located. You can view the business platform ID in the Chat App Message Service console after WABA registration is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * 105048970863****
   */
  businessId?: number;
  /**
   * @remarks
   * The space ID of the ISV sub-customer.
   * 
   * @example
   * C29398882929
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The list of fields, separated by commas (,).
   * For specific fields, see [Catalog fields](https://help.aliyun.com/document_detail/2579419.html).
   * 
   * @example
   * id,name
   */
  fields?: string;
  /**
   * @remarks
   * The number of entries to query. Valid values: 1 to 1000.
   * 
   * @example
   * 73
   */
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
      businessId: 'BusinessId',
      custSpaceId: 'CustSpaceId',
      fields: 'Fields',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
      businessId: 'number',
      custSpaceId: 'string',
      fields: 'string',
      limit: 'number',
      ownerId: 'number',
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

