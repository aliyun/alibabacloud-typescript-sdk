// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor that points to the start of the next page of results.
   * 
   * @example
   * kdkii48jfjjei3
   */
  after?: string;
  /**
   * @remarks
   * The cursor that points to the end of the previous page of results.
   * 
   * @example
   * wiidkd939kek93
   */
  before?: string;
  /**
   * @remarks
   * The catalog ID. You can get it from the Meta platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 2939838xxxx
   */
  catalogId?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer.
   * 
   * @example
   * C2939838xxxx
   */
  custSpaceId?: string;
  /**
   * @remarks
   * A list of fields to return. Separate multiple fields with a comma (,).
   * For more information, see [Product fields](https://help.aliyun.com/document_detail/2579419.html).
   * 
   * @example
   * id,name
   */
  fields?: string;
  /**
   * @remarks
   * The number of items to return. Valid values: 1 to 1000.
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
   * The WhatsApp Business Account (WABA) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3848747xxxx
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

