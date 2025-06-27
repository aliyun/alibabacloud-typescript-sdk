// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * The display name of the city where the monitored node is deployed.
   * 
   * @example
   * Zhangjiakou
   */
  cityName?: string;
  /**
   * @remarks
   * The code of the country where the monitored node is deployed.
   * 
   * @example
   * 001
   */
  countryCode?: string;
  /**
   * @remarks
   * The display name of the country where the monitored node is deployed.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * The code of the Internet service provider (ISP) to which the monitored node belongs.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  /**
   * @remarks
   * The display name of the ISP to which the monitored node belongs.
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

