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
   * - TCP.
   * - UDP.
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
   * The IP version. Valid values:
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
   * - Internet: Internet.
   * - Intranet: Private network.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether the address is the default ingress address of the gateway.
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
   * The load balancing ID.
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
   * The list of listened ports.
   */
  ports?: ListGatewaysResponseBodyDataItemsLoadBalancersPorts[];
  /**
   * @remarks
   * The status of the load balancing. Valid values:
   * - Ready: Active.
   * - NotCreate: Not associated with an instance.
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

export class ListGatewaysResponseBodyDataItemsNetworkAccessConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group configured for the internal endpoint. The security group belongs to the VPC selected by the user and is a non-managed security group.
   * 
   * @example
   * sg-bp1example123456789
   */
  endpointSecurityGroupId?: string;
  /**
   * @remarks
   * The access ingress type of the gateway.
   * 
   * @example
   * UnionSearchMCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpointSecurityGroupId: 'endpointSecurityGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointSecurityGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsPrivateLinkZones extends $dara.Model {
  /**
   * @remarks
   * The status of the endpoint in the zone.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysResponseBodyDataItemsPrivateLink extends $dara.Model {
  /**
   * @remarks
   * The connection status between the internal endpoint and the endpoint service.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The endpoint domain name used for connection configuration.
   * 
   * @example
   * ep-bp1example123456789.epsrv-bp1example123456789.cn-hangzhou.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-bp1example123456789
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the security group configured for the internal endpoint.
   * 
   * @example
   * sg-bp1example123456789
   */
  endpointSecurityGroupId?: string;
  /**
   * @remarks
   * The status of the internal endpoint.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The error code of the most recent fault that occurred during the create or delete procedure of the private network ingress. This parameter is not returned if no error message is available.
   * 
   * @example
   * Forbidden.RAM
   */
  lastErrorCode?: string;
  /**
   * @remarks
   * The description of the most recent fault that occurred during the create or delete procedure of the private network ingress. You can use this description along with the error code to troubleshoot the issue. This parameter is not returned if no error message is available.
   * 
   * @example
   * private ingress CheckProductOpen failed (Forbidden.RAM)
   */
  lastErrorMessage?: string;
  /**
   * @remarks
   * The time when the system last obtained the status of the internal endpoint. The time is in RFC 3339 format, such as 2026-11-02T10:00:00Z. This parameter is not returned if the status has not been obtained.
   * 
   * @example
   * 2026-11-02T10:00:00Z
   */
  observedAt?: string;
  /**
   * @remarks
   * Indicates whether the internal endpoint may continue to incur charges. A value of true indicates that the endpoint has been created and its release has not been confirmed. A value of false indicates that there is no such charge prompt currently. The actual charges are subject to the bill.
   * 
   * @example
   * true
   */
  resourceMayBeCharged?: boolean;
  /**
   * @remarks
   * The current processing stage of the internal ingress. A value of Ready indicates that the internal ingress is ready.
   * 
   * @example
   * Ready
   */
  stage?: string;
  /**
   * @remarks
   * The zone names.
   */
  zones?: ListGatewaysResponseBodyDataItemsPrivateLinkZones[];
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      endpointDomain: 'endpointDomain',
      endpointId: 'endpointId',
      endpointSecurityGroupId: 'endpointSecurityGroupId',
      endpointStatus: 'endpointStatus',
      lastErrorCode: 'lastErrorCode',
      lastErrorMessage: 'lastErrorMessage',
      observedAt: 'observedAt',
      resourceMayBeCharged: 'resourceMayBeCharged',
      stage: 'stage',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointSecurityGroupId: 'string',
      endpointStatus: 'string',
      lastErrorCode: 'string',
      lastErrorMessage: 'string',
      observedAt: 'string',
      resourceMayBeCharged: 'boolean',
      stage: 'string',
      zones: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsPrivateLinkZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
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
   * The billing method. Valid values:
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
   * - Console: Alibaba Cloud Management Console.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The timestamp when the gateway was created. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates whether elastic scaling is enabled. A value of true indicates that elastic scaling is enabled. A value of false indicates that elastic scaling is disabled. A value of null or a missing value indicates that the status is unknown. This parameter is for query and display purposes only.
   * 
   * @example
   * false
   */
  elasticEnabled?: boolean;
  /**
   * @remarks
   * The expiration timestamp of the subscription gateway. Unit: milliseconds.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The edition of the gateway instance. Valid values:
   * - Professional: Regular instance.
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
   * The running mode of the AI MultiTenantServerless gateway. Valid values:
   * - ENTERPRISE: Enterprise Edition.
   * - STANDARD: Standard Edition.
   * This parameter is returned only for AI MultiTenantServerless gateways.
   * 
   * @example
   * ENTERPRISE
   */
  gatewayMode?: string;
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
   * Indicates whether the gateway instance was created before the AI gateway feature was released.
   * 
   * @example
   * true
   */
  legacy?: boolean;
  /**
   * @remarks
   * The list of ingress addresses for the gateway.
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
   * The network access configuration of the gateway, including the access ingress type and the security group used by the internal endpoint. This parameter is returned only when the gateway is configured with an internal ingress.
   */
  networkAccessConfig?: ListGatewaysResponseBodyDataItemsNetworkAccessConfig;
  /**
   * @remarks
   * The private connection information of the gateway, including the endpoint ID, access domain name, connection status, and zone information.
   */
  privateLink?: ListGatewaysResponseBodyDataItemsPrivateLink;
  /**
   * @remarks
   * The number of nodes in the gateway instance.
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
   * - apigw.small.x1: Small.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * The gateway status. Valid values:
   * - Running: Running.
   * - Creating: Creating.
   * - CreateFailed: Creation failed.
   * - Upgrading: Upgrading.
   * - UpgradeFailed: Upgrade failed.
   * - Restarting: Restarting.
   * - RestartFailed: Restart failed.
   * - Deleting: Releasing.
   * - DeleteFailed: Release failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of subdomains.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListGatewaysResponseBodyDataItemsTags[];
  /**
   * @remarks
   * The target version of the gateway. If this value differs from the current version, you can upgrade the gateway.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The update timestamp. Unit: milliseconds.
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
      elasticEnabled: 'elasticEnabled',
      expireTimestamp: 'expireTimestamp',
      gatewayEdition: 'gatewayEdition',
      gatewayId: 'gatewayId',
      gatewayMode: 'gatewayMode',
      gatewayType: 'gatewayType',
      legacy: 'legacy',
      loadBalancers: 'loadBalancers',
      name: 'name',
      networkAccessConfig: 'networkAccessConfig',
      privateLink: 'privateLink',
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
      elasticEnabled: 'boolean',
      expireTimestamp: 'number',
      gatewayEdition: 'string',
      gatewayId: 'string',
      gatewayMode: 'string',
      gatewayType: 'string',
      legacy: 'boolean',
      loadBalancers: { 'type': 'array', 'itemType': ListGatewaysResponseBodyDataItemsLoadBalancers },
      name: 'string',
      networkAccessConfig: ListGatewaysResponseBodyDataItemsNetworkAccessConfig,
      privateLink: ListGatewaysResponseBodyDataItemsPrivateLink,
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
    if(this.networkAccessConfig && typeof (this.networkAccessConfig as any).validate === 'function') {
      (this.networkAccessConfig as any).validate();
    }
    if(this.privateLink && typeof (this.privateLink as any).validate === 'function') {
      (this.privateLink as any).validate();
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
   * The total count.
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
   * The gateway list query results.
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

