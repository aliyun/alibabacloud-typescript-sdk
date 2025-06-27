// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmMonitorTemplatesResponseBodyTemplatesTemplateIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @example
   * 503
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 001
   */
  countryCode?: string;
  countryName?: string;
  /**
   * @example
   * BGP
   */
  groupName?: string;
  /**
   * @remarks
   * The group type of health check nodes. Valid values:
   * 
   * *   BGP: BGP node
   * *   OVERSEAS: node outside the Chinese mainland
   * *   ISP: Internet service provider (ISP) node
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @example
   * 465
   */
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      groupName: 'GroupName',
      groupType: 'GroupType',
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
      groupName: 'string',
      groupType: 'string',
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

