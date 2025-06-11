// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor that points to the end of the page of the returned data.
   * 
   * @example
   * kdkii48jfjjei3
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the beginning of the page of the returned data.
   * 
   * @example
   * wiidkd939kek93
   */
  before?: string;
  /**
   * @remarks
   * The catalog ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 29398389292
   */
  catalogId?: string;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * C29398388383
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The fields. Separate multiple fields with commas (,).
   * 
   *  see [product fields](https://help.aliyun.com/document_detail/2579419.html)
   * 
   * @example
   * id,name
   */
  fields?: string;
  /**
   * @remarks
   * The number of products to be queried. Valid values: 1 to 1000.
   * 
   * @example
   * 73
   */
  limit?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the WhatsApp Business account (WABA).
   * 
   * This parameter is required.
   * 
   * @example
   * 38487474747
   */
  wabaId?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      before: 'Before',
      catalogId: 'CatalogId',
      custSpaceId: 'CustSpaceId',
      fields: 'Fields',
      limit: 'Limit',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      wabaId: 'WabaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      before: 'string',
      catalogId: 'string',
      custSpaceId: 'string',
      fields: 'string',
      limit: 'number',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      wabaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

