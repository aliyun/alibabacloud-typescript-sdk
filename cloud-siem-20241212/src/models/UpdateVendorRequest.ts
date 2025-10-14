// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVendorRequest extends $dara.Model {
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  /**
   * @example
   * vd-qlsw5eocx94w9。
   */
  vendorId?: string;
  /**
   * @example
   * 111。
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

