// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressForStory extends $dara.Model {
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
   * The country.
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
   * 滨江区
   */
  district?: string;
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
   * The township.
   * 
   * @example
   * 长河街道
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

