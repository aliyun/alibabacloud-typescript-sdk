// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockedRegionsResponseBodyInfoListInfoItem extends $dara.Model {
  /**
   * @remarks
   * The district to which the country or region belongs.
   * 
   * @example
   * Asia
   */
  continent?: string;
  /**
   * @remarks
   * The abbreviation of the name of the country or region.
   * 
   * @example
   * AF
   */
  countriesAndRegions?: string;
  /**
   * @remarks
   * The name of the country or region.
   * 
   * @example
   * Afghanistan
   */
  countriesAndRegionsName?: string;
  static names(): { [key: string]: string } {
    return {
      continent: 'Continent',
      countriesAndRegions: 'CountriesAndRegions',
      countriesAndRegionsName: 'CountriesAndRegionsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continent: 'string',
      countriesAndRegions: 'string',
      countriesAndRegionsName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

