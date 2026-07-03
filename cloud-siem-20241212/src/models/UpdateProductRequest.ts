// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The product ID.
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
   * The region of the Data Management center for threat analysis. Select the region for the Data Management center based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: The Chinese mainland.
   * 
   * - ap-southeast-1: Regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can specify this parameter to switch to the perspective of the member.
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

