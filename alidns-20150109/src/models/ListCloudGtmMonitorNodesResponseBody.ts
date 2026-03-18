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
  cityCode?: string;
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  defaultSelected?: boolean;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  groupName?: string;
  groupType?: string;
  ips?: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps;
  ispCode?: string;
  ispName?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      defaultSelected: 'DefaultSelected',
      enableStatus: 'EnableStatus',
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
      enableStatus: 'string',
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
  cityCode?: string;
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  defaultSelected?: boolean;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  groupName?: string;
  groupType?: string;
  ips?: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps;
  ispCode?: string;
  ispName?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      defaultSelected: 'DefaultSelected',
      enableStatus: 'EnableStatus',
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
      enableStatus: 'string',
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
  ipv4IspCityNodes?: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes;
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

