// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNodeIps extends $dara.Model {
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode extends $dara.Model {
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
   * The IP addresses of the health check nodes.
   */
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNodeIps;
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
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNodeIps,
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes extends $dara.Model {
  domainIpv4IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      domainIpv4IspCityNode: 'DomainIpv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv4IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.domainIpv4IspCityNode)) {
      $dara.Model.validateArray(this.domainIpv4IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNodeIps extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode extends $dara.Model {
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
   * false
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
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNodeIps;
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
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNodeIps,
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes extends $dara.Model {
  domainIpv6IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      domainIpv6IspCityNode: 'DomainIpv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv6IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.domainIpv6IspCityNode)) {
      $dara.Model.validateArray(this.domainIpv6IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps extends $dara.Model {
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode extends $dara.Model {
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
   * *   BGP: Border Gateway Protocol (BGP) node
   * *   OVERSEAS: node outside the Chinese mainland
   * *   ISP: ISP node
   * 
   * @example
   * BGP
   */
  groupType?: string;
  /**
   * @remarks
   * The IP addresses of the health check nodes.
   */
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps;
  /**
   * @remarks
   * The Internet service provider (ISP) code.
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
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps,
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes extends $dara.Model {
  ipv4IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNode: 'Ipv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode },
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps extends $dara.Model {
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes extends $dara.Model {
  ipv6IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv6IspCityNode: 'Ipv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode },
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nodes that perform health checks on domain names that use public IPv4 addresses.
   */
  domainIpv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes;
  /**
   * @remarks
   * The nodes that perform health checks on domain names that use public IPv6 addresses.
   */
  domainIpv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes;
  /**
   * @remarks
   * The nodes that perform health checks on public IPv4 addresses.
   */
  ipv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes;
  /**
   * @remarks
   * The nodes that perform health checks on public IPv6 addresses.
   */
  ipv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainIpv4IspCityNodes: 'DomainIpv4IspCityNodes',
      domainIpv6IspCityNodes: 'DomainIpv6IspCityNodes',
      ipv4IspCityNodes: 'Ipv4IspCityNodes',
      ipv6IspCityNodes: 'Ipv6IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes,
      domainIpv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes,
      ipv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes,
      ipv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainIpv4IspCityNodes && typeof (this.domainIpv4IspCityNodes as any).validate === 'function') {
      (this.domainIpv4IspCityNodes as any).validate();
    }
    if(this.domainIpv6IspCityNodes && typeof (this.domainIpv6IspCityNodes as any).validate === 'function') {
      (this.domainIpv6IspCityNodes as any).validate();
    }
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

