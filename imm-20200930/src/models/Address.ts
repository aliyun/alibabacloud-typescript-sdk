// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Address extends $dara.Model {
  /**
   * @remarks
   * The full address.
   * 
   * @example
   * 中国浙江省杭州市余杭区文一西路969号
   */
  addressLine?: string;
  /**
   * @remarks
   * The city.
   * 
   * @example
   * 杭州市
   */
  city?: string;
  /**
   * @remarks
   * The country or region.
   * 
   * @example
   * 中国
   */
  country?: string;
  /**
   * @remarks
   * The district.
   * 
   * @example
   * 余杭区
   */
  district?: string;
  /**
   * @remarks
   * The BCP 47 language code.
   * 
   * @example
   * zh-Hans
   */
  language?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * 浙江省
   */
  province?: string;
  /**
   * @remarks
   * The street.
   * 
   * @example
   * 文一西路
   */
  township?: string;
  static names(): { [key: string]: string } {
    return {
      addressLine: 'AddressLine',
      city: 'City',
      country: 'Country',
      district: 'District',
      language: 'Language',
      province: 'Province',
      township: 'Township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLine: 'string',
      city: 'string',
      country: 'string',
      district: 'string',
      language: 'string',
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

