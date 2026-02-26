// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressForStory extends $dara.Model {
  /**
   * @remarks
   * The city.
   */
  city?: string;
  /**
   * @remarks
   * The country.
   */
  country?: string;
  /**
   * @remarks
   * The district.
   */
  district?: string;
  /**
   * @remarks
   * The province.
   */
  province?: string;
  /**
   * @remarks
   * The township.
   */
  township?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      country: 'Country',
      district: 'District',
      province: 'Province',
      township: 'Township',
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

