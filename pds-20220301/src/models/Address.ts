// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Address extends $dara.Model {
  /**
   * @remarks
   * The city.
   * 
   * @example
   * None
   */
  city?: string;
  /**
   * @remarks
   * The country or region.
   * 
   * @example
   * None
   */
  country?: string;
  /**
   * @remarks
   * The district.
   * 
   * @example
   * None
   */
  district?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * None
   */
  province?: string;
  /**
   * @remarks
   * The street.
   * 
   * @example
   * None
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

