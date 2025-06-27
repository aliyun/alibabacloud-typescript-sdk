// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps } from "./ListCloudGtmMonitorNodesResponseBodyIpv6ispCityNodesIpv6ispCityNodeIps";


export class ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNode extends $dara.Model {
  /**
   * @remarks
   * City code.
   * 
   * @example
   * 357
   */
  cityCode?: string;
  /**
   * @remarks
   * City name.
   * 
   * @example
   * Shanghai
   */
  cityName?: string;
  /**
   * @remarks
   * Country code.
   * 
   * @example
   * 629
   */
  countryCode?: string;
  /**
   * @remarks
   * Country name.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * Monitor node default selection:
   * - true: Selected by default
   * - false: Not selected by default
   * 
   * @example
   * true
   */
  defaultSelected?: boolean;
  /**
   * @remarks
   * Monitoring probe group name.
   * 
   * @example
   * BGP
   */
  groupName?: string;
  /**
   * @remarks
   * Monitoring node group type, currently supported:
   * - BGP: BGP node
   * - OVERSEAS: International node
   * - ISP: Carrier node
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @remarks
   * List of node IP addresses.
   */
  ips?: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps;
  /**
   * @remarks
   * Operator code.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  /**
   * @remarks
   * Operator name.
   * 
   * @example
   * Alibaba
   */
  ispName?: string;
  /**
   * @remarks
   * Unique identifier ID of the probe node.
   * 
   * @example
   * node-ewze1bysndy4gf**j8
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ips: 'Ips',
      ispCode: 'IspCode',
      ispName: 'IspName',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ips: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps,
      ispCode: 'string',
      ispName: 'string',
      nodeId: 'string',
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

