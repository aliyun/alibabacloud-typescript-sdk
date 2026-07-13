// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductDataRedundancyTypeStatRequest extends $dara.Model {
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
  resourceOwnerIds?: number[];
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      resourceCategoryId: 'ResourceCategoryId',
      resourceOwnerIds: 'ResourceOwnerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceCategoryId: 'string',
      resourceOwnerIds: { 'type': 'array', 'itemType': 'number' },
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

