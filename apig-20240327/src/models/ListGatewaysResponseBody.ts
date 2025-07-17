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
   * 
   * *   TCP
   * *   UDP
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
   * The load balancer IP address.
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the address. Valid values:
   * 
   * *   ipv4: IPv4
   * *   ipv6: IPv6
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The address type. Valid values:
   * 
   * *   Internet
   * *   Intranet
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether the address is the default ingress address of the instance.
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * The load balancer ID.
   * 
   * @example
   * nlb-xqwioje1c91r***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The mode in which the load balancer is provided. Valid values:
   * 
   * *   Managed: Cloud-native API Gateway manages and provides the load balancer.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * The list of listened ports.
   */
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @remarks
   * The load balancer status. Valid values:
   * 
   * *   Ready: The load balancer is available.
   * *   NotCreate: The load balancer is not associated with the instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The load balancer type. Valid values:
   * 
   * *   NLB: Network Load Balancer
   * *   CLB: Classic Load Balancer
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
      loadBalancerId: 'string',
      mode: 'string',
      ports: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancersPorts },
      status: 'string',
      type: 'string',
    };
  }

  validate() {
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
   * sg-xxxx
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
   * vsw-xxxxx
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
   * vpc-xxxxx
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
   * vsw-xxxxx
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
   * The vSwitch information.
   */
  vSwitch?: ListGatewaysResponseBodyDataItemsZonesVSwitch;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-f
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
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go
   * *   PREPAY: subscription
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation source of the instance. Valid values:
   * 
   * *   Console
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cpv54p5***
   */
  gatewayId?: string;
  gatewayType?: string;
  legacy?: boolean;
  /**
   * @remarks
   * The ingress addresses of the instance.
   */
  loadBalancers?: ListGatewaysResponseBodyDataItemsLoadBalancers[];
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * The node quantity of the instance.
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
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group information about the instance.
   */
  securityGroup?: ListGatewaysResponseBodyDataItemsSecurityGroup;
  /**
   * @remarks
   * The instance specification. Valid values:
   * 
   * *   apigw.small.x1
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
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
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The second-level domain names.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The tags.
   */
  tags?: ListGatewaysResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The destination version of the instance. If the value is inconsistent with the current version, you can upgrade the instance.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The time when the instance was last updated. This value is a UNIX timestamp. Unit: milliseconds.
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
   * The instance version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) information of the instance.
   */
  vpc?: ListGatewaysResponseBodyDataItemsVpc;
  /**
   * @remarks
   * The availability zones of the instance.
   */
  zones?: ListGatewaysResponseBodyDataItemsZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      expireTimestamp: 'expireTimestamp',
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
   * The instances.
   */
  items?: ListGatewaysResponseBodyDataItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The instances.
   */
  data?: ListGatewaysResponseBodyData;
  /**
   * @remarks
   * The returned message.
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

