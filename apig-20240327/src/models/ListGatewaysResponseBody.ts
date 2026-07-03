// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubDomainInfo } from "./SubDomainInfo";


export class ListGatewaysResponseBodyDataItemsLoadBalancersPorts extends $dara.Model {
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol. Valid values:
   * - TCP
   * - UDP
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
   * The load balancing address.
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The protocol version. Valid values:
   * - ipv4: IPv4.
   * - ipv6: IPv6.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The load balancing address type. Valid values:
   * - Internet: public network.
   * - Intranet: private network.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether this is the default entry address of the gateway.
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * The list of IPv4 addresses.
   */
  ipv4Addresses?: string[];
  /**
   * @remarks
   * The list of IPv6 addresses.
   */
  ipv6Addresses?: string[];
  /**
   * @remarks
   * The load balancing instance ID.
   * 
   * @example
   * nlb-xqwioje1c91r***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The load balancing provisioning pattern of the gateway. Valid values:
   * - Managed: Managed by Cloud-native API Gateway.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * The list of listening ports.
   */
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @remarks
   * The load balancing status. Valid values:
   * - Ready: Active.
   * - NotCreate: No associated instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The load balancing type of the gateway. Valid values:
   * - NLB: Network load balancing.
   * - CLB: Classic load balancing.
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
   * The security group ID.
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
   * The tag key.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The vSwitch ID.
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
   * The VPC ID.
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
   * The vSwitch ID.
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
   * The vSwitch.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsZonesVSwitch;
  /**
   * @remarks
   * The zone ID.
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
   * The billing type. Valid values:
   * 
   * - POSTPAY: Pay-as-you-go.
   * - PREPAY: Subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The source from which the gateway was created. Valid values:
   * - Console: The gateway was created from the console.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The creation timestamp, in milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The subscription expiration timestamp, in milliseconds.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The gateway instance edition. Valid values:
   * 
   * - Professional: Standard instance.
   * 
   * - Serverless: Serverless instance.
   * 
   * @example
   * Serverless
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cpv54p5***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway type.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * Indicates whether the gateway instance was created before the AI gateway feature was launched.
   * 
   * @example
   * true
   */
  legacy?: boolean;
  /**
   * @remarks
   * The list of gateway entry addresses.
   */
  loadBalancers?: ListGatewaysResponseBodyDataItemsLoadBalancers[];
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * The number of gateway instance nodes.
   * 
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group information of the gateway.
   */
  securityGroup?: ListGatewaysResponseBodyDataItemsSecurityGroup;
  /**
   * @remarks
   * The gateway specification. Valid values:
   * - apigw.small.x1: small specification.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * The gateway status. Valid values:
   * - Running: The gateway is running.
   * - Creating: The gateway is being created.
   * - CreateFailed: The gateway failed to be created.
   * - Upgrading: The gateway is being upgraded.
   * - UpgradeFailed: The gateway failed to be upgraded.
   * - Restarting: The gateway is being restarted.
   * - RestartFailed: The gateway failed to be restarted.
   * - Deleting: The gateway is being released.
   * - DeleteFailed: The gateway failed to be released.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of second-level domain names.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListGatewaysResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The target version of the gateway. When this value differs from version, a version upgrade can be performed.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The update timestamp, in milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The vSwitch information.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsVSwitch;
  /**
   * @remarks
   * The gateway version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The VPC information of the gateway.
   */
  vpc?: ListGatewaysResponseBodyDataItemsVpc;
  /**
   * @remarks
   * The zone information of the gateway.
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
   * The gateway list.
   */
  items?: ListGatewaysResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of gateways.
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
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The query result of the gateway list.
   */
  data?: ListGatewaysResponseBodyData;
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

