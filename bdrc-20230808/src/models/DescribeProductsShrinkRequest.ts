// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by the product type of the resource. If this parameter is not specified, all types are queried.
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
   * The list of resource owner IDs. This parameter is used in cross-account scenarios. If this parameter is left empty, data of the current account is returned by default.
   * 
   * @example
   * [123***7890]
   */
  resourceOwnerIdsShrink?: string;
  /**
   * @remarks
   * Filters by the region where the resource resides. If this parameter is not specified, all regions are queried.
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

