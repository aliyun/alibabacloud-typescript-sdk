// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVendorRequest extends $dara.Model {
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
   * The region of the Data Management center for threat analysis. Select the region based on where your asset is located. Valid values:
   * 
   * - cn-hangzhou: The asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: The asset is outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter allows an administrator to switch to the perspective of a member.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The ID of the vendor.
   * 
   * @example
   * vd-qlsw5eocx94w9
   */
  vendorId?: string;
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
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      vendorId: 'VendorId',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
      vendorId: 'string',
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

