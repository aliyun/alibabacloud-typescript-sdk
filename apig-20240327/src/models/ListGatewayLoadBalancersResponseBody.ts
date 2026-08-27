// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @example
   * eip-bp1xxxx
   */
  allocationId?: string;
  /**
   * @example
   * eni-bp1xxxx
   */
  eniId?: string;
  ipv4LocalAddresses?: string[];
  /**
   * @example
   * 2408:xxxx
   */
  ipv6Address?: string;
  ipv6LocalAddresses?: string[];
  /**
   * @example
   * 192.168.x.x
   */
  privateIPv4Address?: string;
  /**
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @example
   * Healthy
   */
  privateIPv6HcStatus?: string;
  /**
   * @example
   * 47.x.x.x
   */
  publicIPv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'allocationId',
      eniId: 'eniId',
      ipv4LocalAddresses: 'ipv4LocalAddresses',
      ipv6Address: 'ipv6Address',
      ipv6LocalAddresses: 'ipv6LocalAddresses',
      privateIPv4Address: 'privateIPv4Address',
      privateIPv4HcStatus: 'privateIPv4HcStatus',
      privateIPv6HcStatus: 'privateIPv6HcStatus',
      publicIPv4Address: 'publicIPv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eniId: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4LocalAddresses)) {
      $dara.Model.validateArray(this.ipv4LocalAddresses);
    }
    if(Array.isArray(this.ipv6LocalAddresses)) {
      $dara.Model.validateArray(this.ipv6LocalAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappings extends $dara.Model {
  loadBalancerAddresses?: ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappingsLoadBalancerAddresses[];
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * vsw-bp1xxxx
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'loadBalancerAddresses',
      status: 'status',
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerAddresses)) {
      $dara.Model.validateArray(this.loadBalancerAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBodyDataItemsPorts extends $dara.Model {
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupListListeners extends $dara.Model {
  /**
   * @example
   * 443
   */
  port?: number;
  /**
   * @example
   * https
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupList extends $dara.Model {
  listeners?: ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupListListeners[];
  /**
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @example
   * 80-tcp
   */
  virtualServiceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'listeners',
      virtualServiceGroupId: 'virtualServiceGroupId',
      virtualServiceGroupName: 'virtualServiceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupListListeners },
      virtualServiceGroupId: 'string',
      virtualServiceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * true
   */
  defaultGatewayIngress?: boolean;
  /**
   * @example
   * false
   */
  editEnable?: boolean;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * 47.x.x.x
   */
  loadBalancerAddress?: string;
  /**
   * @example
   * ipv4
   */
  loadBalancerAddressIpVersion?: string;
  /**
   * @example
   * Internet
   */
  loadBalancerAddressType?: string;
  /**
   * @example
   * Active
   */
  loadBalancerAvailableStatus?: string;
  /**
   * @example
   * lb-bp1xxxx / nlb-xxxx
   */
  loadBalancerId?: string;
  /**
   * @example
   * Managed
   */
  loadBalancerMode?: string;
  /**
   * @example
   * my-nlb
   */
  loadBalancerName?: string;
  /**
   * @example
   * slb.s2.small
   */
  loadBalancerSpec?: string;
  /**
   * @example
   * Ready
   */
  loadBalancerStatus?: string;
  /**
   * @example
   * NLB
   */
  loadBalancerType?: string;
  loadBalancerZoneMappings?: ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappings[];
  ports?: ListGatewayLoadBalancersResponseBodyDataItemsPorts[];
  /**
   * @example
   * 100
   */
  serviceWeight?: number;
  /**
   * @example
   * -
   */
  vServerGroupMetaInfo?: string;
  virtualServerGroupList?: ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupList[];
  static names(): { [key: string]: string } {
    return {
      defaultGatewayIngress: 'defaultGatewayIngress',
      editEnable: 'editEnable',
      gatewayId: 'gatewayId',
      loadBalancerAddress: 'loadBalancerAddress',
      loadBalancerAddressIpVersion: 'loadBalancerAddressIpVersion',
      loadBalancerAddressType: 'loadBalancerAddressType',
      loadBalancerAvailableStatus: 'loadBalancerAvailableStatus',
      loadBalancerId: 'loadBalancerId',
      loadBalancerMode: 'loadBalancerMode',
      loadBalancerName: 'loadBalancerName',
      loadBalancerSpec: 'loadBalancerSpec',
      loadBalancerStatus: 'loadBalancerStatus',
      loadBalancerType: 'loadBalancerType',
      loadBalancerZoneMappings: 'loadBalancerZoneMappings',
      ports: 'ports',
      serviceWeight: 'serviceWeight',
      vServerGroupMetaInfo: 'vServerGroupMetaInfo',
      virtualServerGroupList: 'virtualServerGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultGatewayIngress: 'boolean',
      editEnable: 'boolean',
      gatewayId: 'string',
      loadBalancerAddress: 'string',
      loadBalancerAddressIpVersion: 'string',
      loadBalancerAddressType: 'string',
      loadBalancerAvailableStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerMode: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      loadBalancerZoneMappings: { 'type': 'array', 'itemType': ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappings },
      ports: { 'type': 'array', 'itemType': ListGatewayLoadBalancersResponseBodyDataItemsPorts },
      serviceWeight: 'number',
      vServerGroupMetaInfo: 'string',
      virtualServerGroupList: { 'type': 'array', 'itemType': ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerZoneMappings)) {
      $dara.Model.validateArray(this.loadBalancerZoneMappings);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.virtualServerGroupList)) {
      $dara.Model.validateArray(this.virtualServerGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBodyData extends $dara.Model {
  items?: ListGatewayLoadBalancersResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewayLoadBalancersResponseBodyDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayLoadBalancersResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListGatewayLoadBalancersResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C7C7C3EB-00B6-509A-B6A3-5462EE759047
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayLoadBalancersResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

