// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Address extends $dara.Model {
  /**
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @example
   * 中国
   */
  country?: string;
  /**
   * @example
   * 余杭区
   */
  district?: string;
  /**
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @example
   * 文一西路
   */
  township?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
      country: 'country',
      district: 'district',
      province: 'province',
      township: 'township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      country: 'string',
      district: 'string',
      province: 'string',
      township: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

