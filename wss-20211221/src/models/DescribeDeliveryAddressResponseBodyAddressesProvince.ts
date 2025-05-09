// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeliveryAddressResponseBodyAddressesProvince extends $dara.Model {
  /**
   * @example
   * 330000
   */
  provinceId?: number;
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      provinceId: 'ProvinceId',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provinceId: 'number',
      provinceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

