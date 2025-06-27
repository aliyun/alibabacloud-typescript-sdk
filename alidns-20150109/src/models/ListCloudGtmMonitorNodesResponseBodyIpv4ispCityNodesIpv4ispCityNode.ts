// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps } from "./ListCloudGtmMonitorNodesResponseBodyIpv4ispCityNodesIpv4ispCityNodeIps";


export class ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNode extends $dara.Model {
  /**
   * @remarks
   * City code.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * City name.
   * 
   * @example
   * Beijing
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
   * Monitor probe group name.
   * 
   * @example
   * BGP Nodes
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
  ips?: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps;
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
      ips: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps,
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

