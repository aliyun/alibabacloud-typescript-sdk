// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsShrinkRequest extends $dara.Model {
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
  resourceOwnerIdsShrink?: string;
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
      resourceOwnerIdsShrink: 'ResourceOwnerIds',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceCategoryId: 'string',
      resourceOwnerIdsShrink: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

