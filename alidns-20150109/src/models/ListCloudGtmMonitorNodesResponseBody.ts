// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes extends $dara.Model {
  ipv4IspCityNode?: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNode: 'Ipv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNode: { 'type': 'array', 'itemType': ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4IspCityNode)) {
      $dara.Model.validateArray(this.ipv4IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes extends $dara.Model {
  ipv6IspCityNode?: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv6IspCityNode: 'Ipv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6IspCityNode: { 'type': 'array', 'itemType': ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6IspCityNode)) {
      $dara.Model.validateArray(this.ipv6IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmMonitorNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Public IPv4 monitoring node list.
   */
  ipv4IspCityNodes?: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes;
  /**
   * @remarks
   * List of public IPv6 monitoring nodes.
   */
  ipv6IspCityNodes?: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNodes: 'Ipv4IspCityNodes',
      ipv6IspCityNodes: 'Ipv6IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNodes: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes,
      ipv6IspCityNodes: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ipv4IspCityNodes && typeof (this.ipv4IspCityNodes as any).validate === 'function') {
      (this.ipv4IspCityNodes as any).validate();
    }
    if(this.ipv6IspCityNodes && typeof (this.ipv6IspCityNodes as any).validate === 'function') {
      (this.ipv6IspCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

