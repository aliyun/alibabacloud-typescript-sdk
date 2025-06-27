// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6ispCityNodesIpv6ispCityNodeIps";


export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode extends $dara.Model {
  /**
   * @remarks
   * The city code.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * The display name of the city.
   * 
   * @example
   * Zhangjiakou
   */
  cityName?: string;
  /**
   * @remarks
   * Indicates whether the health check node is selected by default.
   * 
   * @example
   * true
   */
  defaultSelected?: boolean;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * BGP Nodes
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * *   BGP: BGP node
   * *   OVERSEAS: node outside the Chinese mainland
   * *   ISP: ISP node
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @remarks
   * This parameter is not returned.
   */
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps;
  /**
   * @remarks
   * The ISP code.
   * 
   * @example
   * 465
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
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ips: 'Ips',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps,
      ispCode: 'string',
      ispName: 'string',
    };
  }

  validate() {
    if(this.ips && typeof (this.ips as any).validate === 'function') {
      (this.ips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

