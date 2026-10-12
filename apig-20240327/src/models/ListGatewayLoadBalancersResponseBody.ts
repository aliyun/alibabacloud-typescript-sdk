// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @remarks
   * The Elastic IP Address (EIP) allocation ID that corresponds to the public address.
   * 
   * @example
   * eip-bp1xxxx
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp1xxxx
   */
  eniId?: string;
  /**
   * @remarks
   * The list of private IPv4 addresses.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * The public IPv6 address.
   * 
   * @example
   * 2408:xxxx
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The list of private IPv6 addresses.
   */
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private IPv4 address.
   * 
   * @example
   * 192.168.x.x
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The health check status of the private IPv4 address.
   * 
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @remarks
   * The health check status of the private IPv6 address.
   * 
   * @example
   * Healthy
   */
  privateIPv6HcStatus?: string;
  /**
   * @remarks
   * The public IPv4 address.
   * 
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
  /**
   * @remarks
   * The list of load balancer addresses in the zone.
   */
  loadBalancerAddresses?: ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID that corresponds to the zone.
   * 
   * @example
   * vsw-bp1xxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
   * @remarks
   * The port.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The port protocol.
   * 
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
   * @remarks
   * The listener port.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The listener protocol. No backend enumeration validation is performed. The actual values are returned from SLB or NLB OpenAPI. Common values include tcp, udp, http, https, and tls.
   * 
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
  /**
   * @remarks
   * The list of associated listeners.
   */
  listeners?: ListGatewayLoadBalancersResponseBodyDataItemsVirtualServerGroupListListeners[];
  /**
   * @remarks
   * The virtual server group ID. For CLB, this is the VServerGroupId. For NLB, this is the ServerGroupId.
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The group name.
   * 
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
   * @remarks
   * Indicates whether this is the default ingress of the gateway.
   * 
   * @example
   * true
   */
  defaultGatewayIngress?: boolean;
  /**
   * @remarks
   * Indicates whether the load balancer can be edited. This parameter serves as an edit switch for load balancers that are being migrated.
   * 
   * @example
   * false
   */
  editEnable?: boolean;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The load balancer address (IP address or domain name).
   * 
   * @example
   * 47.x.x.x
   */
  loadBalancerAddress?: string;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * ipv4
   */
  loadBalancerAddressIpVersion?: string;
  /**
   * @remarks
   * The address type.
   * 
   * @example
   * Internet
   */
  loadBalancerAddressType?: string;
  /**
   * @remarks
   * The load balancer availability status.
   * 
   * @example
   * Active
   */
  loadBalancerAvailableStatus?: string;
  /**
   * @remarks
   * The load balancer instance ID.
   * 
   * @example
   * lb-bp1xxxx / nlb-xxxx
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The binding mode.
   * 
   * @example
   * Managed
   */
  loadBalancerMode?: string;
  /**
   * @remarks
   * The load balancer name.
   * 
   * @example
   * my-nlb
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The load balancer specification.
   * 
   * @example
   * slb.s2.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The association status.
   * 
   * @example
   * Ready
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The load balancer type.
   * 
   * @example
   * NLB
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The zone mappings.
   */
  loadBalancerZoneMappings?: ListGatewayLoadBalancersResponseBodyDataItemsLoadBalancerZoneMappings[];
  /**
   * @remarks
   * The list of listener ports.
   */
  ports?: ListGatewayLoadBalancersResponseBodyDataItemsPorts[];
  /**
   * @remarks
   * The gateway service weight, which ranges from 0 to 100. This parameter is used in migration and traffic shifting scenarios.
   * 
   * @example
   * 100
   */
  serviceWeight?: number;
  /**
   * @remarks
   * The VServerGroup metadata.
   * 
   * @example
   * -
   */
  vServerGroupMetaInfo?: string;
  /**
   * @remarks
   * The list of virtual server groups.
   */
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
  /**
   * @remarks
   * The instances.
   */
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
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListGatewayLoadBalancersResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

