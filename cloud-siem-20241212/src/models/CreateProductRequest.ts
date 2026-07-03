// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productName?: string;
  /**
   * @remarks
   * The region of the Data Management center. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: Assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. This parameter is used when an administrator operates as another member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The name of the vendor.
   * 
   * @example
   * 111
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productName: 'ProductName',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productName: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

