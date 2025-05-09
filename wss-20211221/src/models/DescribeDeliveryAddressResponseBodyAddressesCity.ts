// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeliveryAddressResponseBodyAddressesCity extends $dara.Model {
  /**
   * @example
   * 33****
   */
  cityId?: number;
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'number',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

