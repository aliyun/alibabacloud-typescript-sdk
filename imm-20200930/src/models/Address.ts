// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Address extends $dara.Model {
  /**
   * @remarks
   * The full address.
   */
  addressLine?: string;
  /**
   * @remarks
   * The city.
   */
  city?: string;
  /**
   * @remarks
   * The country or region.
   */
  country?: string;
  /**
   * @remarks
   * The district.
   */
  district?: string;
  /**
   * @remarks
   * The BCP 47 language code.
   * 
   * @example
   * zh-hans
   */
  language?: string;
  /**
   * @remarks
   * The province.
   */
  province?: string;
  /**
   * @remarks
   * The street.
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

