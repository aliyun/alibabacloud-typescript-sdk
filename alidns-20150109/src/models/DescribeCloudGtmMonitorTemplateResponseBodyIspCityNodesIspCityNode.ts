// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @remarks
   * City code
   * 
   * @example
   * 357
   */
  cityCode?: string;
  /**
   * @remarks
   * City name
   * 
   * @example
   * Shanghai
   */
  cityName?: string;
  /**
   * @remarks
   * Country Code
   * 
   * @example
   * 629
   */
  countryCode?: string;
  /**
   * @remarks
   * Country Name
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * Probe node group type name
   * 
   * @example
   * BGP Nodes
   */
  groupName?: string;
  /**
   * @remarks
   * Probe node group types:
   * - BGP: BGP nodes
   * - OVERSEAS: International nodes
   * - ISP: Carrier nodes
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @remarks
   * Operator Code
   * 
   * @example
   * 465
   */
  ispCode?: string;
  /**
   * @remarks
   * Operator Name
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

