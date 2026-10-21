// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English. This parameter is required. If not provided, the service returns a 400 error.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The product ID. Only products with ProductType set to custom support updates. System preset products (ProductType set to preset) cannot be modified. Calling this operation on a preset product returns a 403 error. To create a custom product, use the CreateProduct API first. This parameter is the resource identifier for the Update operation and is required. Only custom products can be updated. System preset products cannot be updated.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productName?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to another member\\"s view.
   * 
   * @example
   * 1733269771123
   */
  roleFor?: number;
  /**
   * @remarks
   * The vendor name.
   * 
   * @example
   * 111
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      productId: 'ProductId',
      productName: 'ProductName',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      productId: 'string',
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

