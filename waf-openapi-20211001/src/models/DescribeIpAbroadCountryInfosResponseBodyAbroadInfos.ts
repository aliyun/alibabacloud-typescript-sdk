// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions } from "./DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions";


export class DescribeIpAbroadCountryInfosResponseBodyAbroadInfos extends $dara.Model {
  /**
   * @example
   * 北美洲
   */
  continent?: string;
  /**
   * @example
   * US
   */
  country?: string;
  /**
   * @example
   * 美国
   */
  countryName?: string;
  regions?: DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions[];
  static names(): { [key: string]: string } {
    return {
      continent: 'Continent',
      country: 'Country',
      countryName: 'CountryName',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continent: 'string',
      country: 'string',
      countryName: 'string',
      regions: { 'type': 'array', 'itemType': DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

