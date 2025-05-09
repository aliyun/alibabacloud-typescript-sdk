// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the city to which the IP address belongs.
   * 
   * @example
   * 510100
   */
  cityId?: string;
  /**
   * @remarks
   * The name of the city to which the IP address belongs.
   * 
   * @example
   * Chengdu, Sichuan Province
   */
  cityName?: string;
  /**
   * @remarks
   * The ID of the country to which the IP address belongs.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The name of the country to which the IP address belongs.
   * 
   * @example
   * China
   */
  countryName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
      countryId: 'CountryId',
      countryName: 'CountryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'string',
      cityName: 'string',
      countryId: 'string',
      countryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

