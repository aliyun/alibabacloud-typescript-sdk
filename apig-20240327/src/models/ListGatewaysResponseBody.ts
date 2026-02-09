// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubDomainInfo } from "./SubDomainInfo";


export class ListGatewaysResponseBodyDataItemsLoadBalancersPorts extends $dara.Model {
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * vpc-xxxxx
   * 
   * @example
   * TCP
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

export class ListGatewaysResponseBodyDataItemsLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * vsw-xxxxx
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The vSwitch information.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * sg-xxxx
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * vsw-xxxxx
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * The IPv4 addresses
   */
  ipv4Addresses?: string[];
  /**
   * @remarks
   * The IPv6 addresses
   */
  ipv6Addresses?: string[];
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * nlb-xqwioje1c91r***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) information of the instance.
   */
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * NLB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      addressIpVersion: 'addressIpVersion',
      addressType: 'addressType',
      gatewayDefault: 'gatewayDefault',
      ipv4Addresses: 'ipv4Addresses',
      ipv6Addresses: 'ipv6Addresses',
      loadBalancerId: 'loadBalancerId',
      mode: 'mode',
      ports: 'ports',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      gatewayDefault: 'boolean',
      ipv4Addresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Addresses: { 'type': 'array', 'itemType': 'string' },
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Addresses)) {
      $dara.Model.validateArray(this.ipv4Addresses);
    }
    if(Array.isArray(this.ipv6Addresses)) {
      $dara.Model.validateArray(this.ipv6Addresses);
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * sg-bp1apxihjdbt3***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The tag value
   * 
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsVSwitch extends $dara.Model {
  /**
   * @remarks
   * List Gateways
   * 
   * @example
   * vsw-bp14efv***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsVpc extends $dara.Model {
  /**
   * @remarks
   * The VPC ID
   * 
   * @example
   * vpc-uf664ny***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsZonesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The second-level domain name.
   * 
   * @example
   * vsw-bp14efvkcfbrt4***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsZones extends $dara.Model {
  /**
   * @remarks
   * The second-level domain names.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsZonesVSwitch;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitch: ListGatewaysResponseBodyDataItemsZonesVSwitch,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether the address is the default ingress address of the instance.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The load balancer IP address.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The mode in which the load balancer is provided. Valid values:
   * 
   * *   Managed: Cloud-native API Gateway manages and provides the load balancer.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The gateway edition
   * 
   * @example
   * Serverless
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The information about a gateway.
   * 
   * @example
   * gw-cpv54p5***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The instance state. Valid values:
   * 
   * *   Running: The instance is running.
   * *   Creating: The instance is being created.
   * *   CreateFailed: The instance fails to be created.
   * *   Upgrading: The instance is being upgraded.
   * *   UpgradeFailed: The instance fails to be upgraded.
   * *   Restarting: The instance is being restarted.
   * *   RestartFailed: The instance fails to be restarted.
   * *   Deleting: The instance is being released.
   * *   DeleteFailed: The instance failed to be released.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * Whether the gateway is a legacy instance
   * 
   * @example
   * true
   */
  legacy?: boolean;
  /**
   * @remarks
   * The port number.
   */
  loadBalancers?: ListGatewaysResponseBodyDataItemsLoadBalancers[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * The load balancer status. Valid values:
   * 
   * *   Ready: The load balancer is available.
   * *   NotCreate: The load balancer is not associated with the instance.
   * 
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @remarks
   * The resource group ID
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * rg-xxx
   */
  securityGroup?: ListGatewaysResponseBodyDataItemsSecurityGroup;
  /**
   * @remarks
   * The load balancer type. Valid values:
   * 
   * *   NLB: Network Load Balancer
   * *   CLB: Classic Load Balancer
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The subdomain information
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The tags
   */
  tags?: ListGatewaysResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   TCP
   * *   UDP
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The IP version of the address. Valid values:
   * 
   * *   ipv4: IPv4
   * *   ipv6: IPv6
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the gateway instance was created before AI Gateway launch.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsVSwitch;
  /**
   * @remarks
   * The information about the port.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The VPC information
   */
  vpc?: ListGatewaysResponseBodyDataItemsVpc;
  /**
   * @remarks
   * The tag.
   */
  zones?: ListGatewaysResponseBodyDataItemsZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      expireTimestamp: 'expireTimestamp',
      gatewayEdition: 'gatewayEdition',
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      legacy: 'legacy',
      loadBalancers: 'loadBalancers',
      name: 'name',
      replicas: 'replicas',
      resourceGroupId: 'resourceGroupId',
      securityGroup: 'securityGroup',
      spec: 'spec',
      status: 'status',
      subDomainInfos: 'subDomainInfos',
      tags: 'tags',
      targetVersion: 'targetVersion',
      updateTimestamp: 'updateTimestamp',
      vSwitch: 'vSwitch',
      version: 'version',
      vpc: 'vpc',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createFrom: 'string',
      createTimestamp: 'number',
      expireTimestamp: 'number',
      gatewayEdition: 'string',
      gatewayId: 'string',
      gatewayType: 'string',
      legacy: 'boolean',
      loadBalancers: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancers },
      name: 'string',
      replicas: 'string',
      resourceGroupId: 'string',
      securityGroup: ListGatewaysResponseBodyDataItemsSecurityGroup,
      spec: 'string',
      status: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      tags: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsTags },
      targetVersion: 'string',
      updateTimestamp: 'number',
      vSwitch: ListGatewaysResponseBodyDataItemsVSwitch,
      version: 'string',
      vpc: ListGatewaysResponseBodyDataItemsVpc,
      zones: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsZones },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
    }
    if(Array.isArray(this.subDomainInfos)) {
      $dara.Model.validateArray(this.subDomainInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.vSwitch && typeof (this.vSwitch as any).validate === 'function') {
      (this.vSwitch as any).validate();
    }
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   */
  items?: ListGatewaysResponseBodyDataItems[];
  /**
   * @remarks
   * The gateway list query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
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

export class ListGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   */
  data?: ListGatewaysResponseBodyData;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Schema of Response
   * 
   * @example
   * 5B626361-070A-56A7-B127-ADAC8F3655DB
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
      data: ListGatewaysResponseBodyData,
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

