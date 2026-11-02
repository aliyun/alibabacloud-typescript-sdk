// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubDomainInfo } from "./SubDomainInfo";


export class GetGatewayResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The alias of the environment.
   * 
   * @example
   * Default environment
   */
  alias?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cp9uhudlht***
   */
  environmentId?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * default-gw-cp9ugg5***
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      environmentId: 'environmentId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      environmentId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataLoadBalancersPorts extends $dara.Model {
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
   * - TCP: TCP.
   * - UDP: UDP.
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

export class GetGatewayResponseBodyDataLoadBalancers extends $dara.Model {
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
   * The type of the load balancing address. Valid values:
   * - Internet: Internet-facing.
   * - Intranet: Private network.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether the address is the default ingress address for the gateway.
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
   * nlb-xoh3pghru7c***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The load balancing pattern of the gateway. Valid values:
   * - Managed: Managed by Cloud-native API Gateway.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * The list of listener ports.
   */
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
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
   * The type of the load balancing. Valid values:
   * - NLB: Network Load Balancer (NLB).
   * - CLB: Classic Load Balancer.
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
      ports: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancersPorts },
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

export class GetGatewayResponseBodyDataMaintenancePeriod extends $dara.Model {
  /**
   * @remarks
   * The end time of the O&M window in the HH:mm format.
   * 
   * @example
   * 06:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the O&M window in the HH:mm format.
   * 
   * @example
   * 02:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResponseBodyDataNetworkAccessConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group configured for the private endpoint. The security group belongs to the VPC selected by the user and is an unmanaged security group.
   * 
   * @example
   * sg-bp1example123456789
   */
  endpointSecurityGroupId?: string;
  /**
   * @remarks
   * The access endpoint type of the gateway. Valid values:
   * - Intranet: Private endpoint only.
   * - InternetAndIntranet: Both Internet and private endpoints.
   * 
   * @example
   * InternetAndIntranet
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

export class GetGatewayResponseBodyDataPrivateLinkZones extends $dara.Model {
  /**
   * @remarks
   * The connection status of the private endpoint in the zone. A value of Connected indicates that the endpoint is connected.
   * 
   * @example
   * Connected
   */
  status?: string;
  /**
   * @remarks
   * The zone ID of the private endpoint.
   * 
   * @example
   * cn-hangzhou-h
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

export class GetGatewayResponseBodyDataPrivateLink extends $dara.Model {
  /**
   * @remarks
   * The connection status between the private endpoint and the endpoint service. A value of Connected indicates that the endpoint is connected.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The access domain name of the private endpoint, which can be used to access the gateway from the user VPC.
   * 
   * @example
   * ep-bp1example123456789.epsrv-bp1example123456789.cn-hangzhou.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The ID of the private endpoint.
   * 
   * @example
   * ep-bp1example123456789
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the security group configured for the private endpoint.
   * 
   * @example
   * sg-bp1example123456789
   */
  endpointSecurityGroupId?: string;
  /**
   * @remarks
   * The status of the private endpoint. A value of Active indicates that the endpoint is available.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The error code of the most recent error that occurred during the creation or delete operations of the private endpoint. This parameter is not returned if no error message is available.
   * 
   * @example
   * Forbidden.RAM
   */
  lastErrorCode?: string;
  /**
   * @remarks
   * The description of the most recent error that occurred during the creation or delete operations of the private endpoint. You can use this description along with the error code to troubleshoot the issue. This parameter is not returned if no error message is available.
   * 
   * @example
   * private ingress CheckProductOpen failed (Forbidden.RAM)
   */
  lastErrorMessage?: string;
  /**
   * @remarks
   * The time when the system last retrieved the status of the private endpoint. The time is in RFC 3339 format. This parameter is not returned if the status has not been retrieved.
   * 
   * @example
   * 2026-11-02T10:00:00Z
   */
  observedAt?: string;
  /**
   * @remarks
   * Indicates whether the private endpoint may continue to incur fees. A value of true indicates that the endpoint is created and its release is not confirmed. A value of false indicates that no fee prompt is available. The actual fees are subject to the bill.
   * 
   * @example
   * true
   */
  resourceMayBeCharged?: boolean;
  /**
   * @remarks
   * The current processing stage of the private endpoint. A value of Ready indicates that the private endpoint is ready.
   * 
   * @example
   * Ready
   */
  stage?: string;
  /**
   * @remarks
   * The list of zone information for the private endpoint.
   */
  zones?: GetGatewayResponseBodyDataPrivateLinkZones[];
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
      zones: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataPrivateLinkZones },
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

export class GetGatewayResponseBodyDataSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * APIG-sg-gw-cq7ke5ll***
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp16tafq9***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetGatewayResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
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

export class GetGatewayResponseBodyDataVSwitch extends $dara.Model {
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * Hangzhou VPC vSwitch
   */
  name?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1c7ggkj***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetGatewayResponseBodyDataVpc extends $dara.Model {
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Hangzhou VPC
   */
  name?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1llj52lvj6xc***
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetGatewayResponseBodyDataZonesVSwitch extends $dara.Model {
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * Hangzhou VPC vSwitch
   */
  name?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1c7ggkj***
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetGatewayResponseBodyDataZones extends $dara.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone E
   */
  name?: string;
  /**
   * @remarks
   * The vSwitch.
   */
  vSwitch?: GetGatewayResponseBodyDataZonesVSwitch;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      vSwitch: 'vSwitch',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      vSwitch: GetGatewayResponseBodyDataZonesVSwitch,
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

export class GetGatewayResponseBodyData extends $dara.Model {
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
   * The creation source of the gateway. Valid values:
   * - Console: The console.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The creation timestamp. Unit: milliseconds.
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
   * The list of environments associated with the gateway.
   */
  environments?: GetGatewayResponseBodyDataEnvironments[];
  /**
   * @remarks
   * The expiration timestamp for subscription instances. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The edition of the gateway instance. Valid values:
   * - Professional: Professional instance.
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
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The operation mode for AI multi-tenant V2. The default value is ENTERPRISE. This parameter is applicable only to AI and MultiTenantServerless gateways.
   * 
   * @example
   * STANDARD
   */
  gatewayMode?: string;
  /**
   * @remarks
   * The gateway type. Valid values:
   * - API: API gateway.
   * - AI: AI gateway.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The type of the Internet service provider (ISP).
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The list of ingress addresses for the gateway.
   */
  loadBalancers?: GetGatewayResponseBodyDataLoadBalancers[];
  /**
   * @remarks
   * The O&M window.
   */
  maintenancePeriod?: GetGatewayResponseBodyDataMaintenancePeriod;
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
   * The network access configuration of the gateway, including the access endpoint type and the security group used by the private endpoint. This parameter is returned only when the gateway is configured with a private endpoint.
   */
  networkAccessConfig?: GetGatewayResponseBodyDataNetworkAccessConfig;
  /**
   * @remarks
   * The PrivateLink information of the gateway, including the endpoint ID, access domain name, connection status, and zone information.
   */
  privateLink?: GetGatewayResponseBodyDataPrivateLink;
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
   * rg-acfm2ij6pwxsvua
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group of the gateway.
   */
  securityGroup?: GetGatewayResponseBodyDataSecurityGroup;
  /**
   * @remarks
   * The gateway specifications. Valid values:
   * - apigw.small.x1: Small specifications.
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
   * The list of default access domain name information for the gateway. This parameter is not returned if no default domain name information is available.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The resource tags.
   */
  tags?: GetGatewayResponseBodyDataTags[];
  /**
   * @remarks
   * The target version of the gateway. If this value is different from the current version, you can upgrade the gateway.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The tenant ID returned in STANDARD mode.
   * 
   * @example
   * pt-xxx
   */
  tenantId?: string;
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
   * The vSwitch associated with the gateway.
   */
  vSwitch?: GetGatewayResponseBodyDataVSwitch;
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
   * The VPC associated with the gateway.
   */
  vpc?: GetGatewayResponseBodyDataVpc;
  /**
   * @remarks
   * The list of zones associated with the gateway.
   */
  zones?: GetGatewayResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      elasticEnabled: 'elasticEnabled',
      environments: 'environments',
      expireTimestamp: 'expireTimestamp',
      gatewayEdition: 'gatewayEdition',
      gatewayId: 'gatewayId',
      gatewayMode: 'gatewayMode',
      gatewayType: 'gatewayType',
      isp: 'isp',
      loadBalancers: 'loadBalancers',
      maintenancePeriod: 'maintenancePeriod',
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
      tenantId: 'tenantId',
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
      environments: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataEnvironments },
      expireTimestamp: 'number',
      gatewayEdition: 'string',
      gatewayId: 'string',
      gatewayMode: 'string',
      gatewayType: 'string',
      isp: 'string',
      loadBalancers: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancers },
      maintenancePeriod: GetGatewayResponseBodyDataMaintenancePeriod,
      name: 'string',
      networkAccessConfig: GetGatewayResponseBodyDataNetworkAccessConfig,
      privateLink: GetGatewayResponseBodyDataPrivateLink,
      replicas: 'string',
      resourceGroupId: 'string',
      securityGroup: GetGatewayResponseBodyDataSecurityGroup,
      spec: 'string',
      status: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      tags: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataTags },
      targetVersion: 'string',
      tenantId: 'string',
      updateTimestamp: 'number',
      vSwitch: GetGatewayResponseBodyDataVSwitch,
      version: 'string',
      vpc: GetGatewayResponseBodyDataVpc,
      zones: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataZones },
    };
  }

  validate() {
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    if(this.maintenancePeriod && typeof (this.maintenancePeriod as any).validate === 'function') {
      (this.maintenancePeriod as any).validate();
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

export class GetGatewayResponseBody extends $dara.Model {
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
   * The response data.
   */
  data?: GetGatewayResponseBodyData;
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
   * 0F138FFC-6E2B-56C1-9BAB-A67462E339D1
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
      data: GetGatewayResponseBodyData,
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

