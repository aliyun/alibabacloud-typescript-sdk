// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductDataRedundancyTypeStatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * This parameter is required.
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
  resourceOwnerIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      resourceCategoryId: 'ResourceCategoryId',
      resourceOwnerIdsShrink: 'ResourceOwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceCategoryId: 'string',
      resourceOwnerIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

