// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductCatalogRequest extends $dara.Model {
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
   * The Business Manager ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 28
   */
  businessId?: number;
  /**
   * @remarks
   * The space ID of the user within the independent software vendor (ISV) account.
   * 
   * @example
   * 293483938849493
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The fields. Separate multiple fields with commas (,).
   * see  [catalog fields](https://help.aliyun.com/document_detail/2579419.html)
   * 
   * @example
   * id,name
   */
  fields?: string;
  /**
   * @remarks
   * The number of catalogs to be queried. Valid values: 1 to 1000.
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

