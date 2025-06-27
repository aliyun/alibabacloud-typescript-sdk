// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 572
   */
  cityCode?: string;
  /**
   * @remarks
   * The display name of the city.
   * 
   * @example
   * Qingdao
   */
  cityName?: string;
  /**
   * @remarks
   * The code of the country or region.
   * 
   * @example
   * 001
   */
  countryCode?: string;
  /**
   * @remarks
   * The display name of the country or region.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) code.
   * 
   * @example
   * 123
   */
  ispCode?: string;
  /**
   * @remarks
   * The display name of the ISP.
   * 
   * @example
   * Alibaba
   */
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      ispCode: 'string',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

