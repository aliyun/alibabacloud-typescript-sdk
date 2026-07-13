// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The product type of the resource. If you omit this parameter, the API returns resources of all product types. For example, specify `oss` to query resources from Object Storage Service.
   * 
   * @example
   * oss
   */
  productType?: string;
  /**
   * @remarks
   * The resource category ID.
   * 
   * @example
   * rc-000***123
   */
  resourceCategoryId?: string;
  /**
   * @remarks
   * A list of resource owner IDs for cross-account resource queries. If you omit this parameter, the API returns resources from the current account.
   * 
   * @example
   * [123***7890]
   */
  resourceOwnerIds?: number[];
  /**
   * @remarks
   * The ID of the resource\\"s region. If you omit this parameter, the API returns resources from all regions.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      resourceCategoryId: 'ResourceCategoryId',
      resourceOwnerIds: 'ResourceOwnerIds',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceCategoryId: 'string',
      resourceOwnerIds: { 'type': 'array', 'itemType': 'number' },
      resourceRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceOwnerIds)) {
      $dara.Model.validateArray(this.resourceOwnerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

