// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The environment alias.
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
   * Indicates whether this is the default ingress address of the gateway.
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
   * nlb-xoh3pghru7c***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The load balancing mode of the gateway. Valid values:
   * - Managed: managed by Cloud-native API Gateway.
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * The list of listening ports.
   */
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
  /**
   * @remarks
   * The status of load balancing. Valid values:
   * - Ready: active.
   * - NotCreate: not associated with an instance.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The load balancing type. Valid values:
   * - NLB: Network Load Balancer (NLB).
   * - CLB: Classic Load Balancer (CLB).
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
   * The O&M end time (HH:mm).
   * 
   * @example
   * 06:00
   */
  endTime?: string;
  /**
   * @remarks
   * The O&M start time (HH:mm).
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

export class GetGatewayResponseBodyDataSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * APIG-sg-gw-cq7ke5ll***
   */
  name?: string;
  /**
   * @remarks
   * The security group ID.
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
   * The vSwitch name.
   * 
   * @example
   * Hangzhou VPC vSwitch
   */
  name?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
   * The VPC name.
   * 
   * @example
   * Hangzhou VPC
   */
  name?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * The vSwitch name.
   * 
   * @example
   * Hangzhou VPC vSwitch
   */
  name?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
   * The zone name.
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
   * - POSTPAY: pay-as-you-go.
   * - PREPAY: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The source from which the gateway was created. Valid values:
   * - Console: the console.
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
   * The gateway instance edition. Valid values:
   * 
   * - Professional: standard instance.
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
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The running mode of AI multi-tenant V2. Default value: ENTERPRISE. Only AI + MultiTenantServerless allows this parameter.
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
   * The type of the network service provider.
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * The list of ingress addresses of the gateway.
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
   * The resource tags.
   */
  tags?: GetGatewayResponseBodyDataTags[];
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
      replicas: 'replicas',
      resourceGroupId: 'resourceGroupId',
      securityGroup: 'securityGroup',
      spec: 'spec',
      status: 'status',
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
      replicas: 'string',
      resourceGroupId: 'string',
      securityGroup: GetGatewayResponseBodyDataSecurityGroup,
      spec: 'string',
      status: 'string',
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
    if(this.securityGroup && typeof (this.securityGroup as any).validate === 'function') {
      (this.securityGroup as any).validate();
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

