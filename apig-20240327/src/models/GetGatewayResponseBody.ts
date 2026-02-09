// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataEnvironments extends $dara.Model {
  /**
   * @remarks
   * The port information.
   * 
   * @example
   * The protocol. Valid values:
   * 
   * *   TCP
   * *   UDP
   */
  alias?: string;
  /**
   * @remarks
   * The load balancer type. Valid values:
   * 
   * *   NLB: Network Load Balancer
   * *   CLB: Classic Load Balancer
   * 
   * @example
   * env-cp9uhudlht***
   */
  environmentId?: string;
  /**
   * @remarks
   * The list of listened ports.
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
   * The listening port number
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the port
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
   * The IP address of the load balancer
   * 
   * @example
   * nlb-xoh3pghr***.cn-hangzhou.nlb.aliyuncs.com
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the load balancer address
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The address type of the load balancer
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * Whether this is the default gateway ingress
   * 
   * @example
   * true
   */
  gatewayDefault?: boolean;
  /**
   * @remarks
   * List of IPv4 addresses
   */
  ipv4Addresses?: string[];
  /**
   * @remarks
   * List of IPv6 addresses
   */
  ipv6Addresses?: string[];
  /**
   * @remarks
   * The unique identifier of the load balancer
   * 
   * @example
   * nlb-xoh3pghru7c***
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The mode of the load balancer
   * 
   * @example
   * Managed
   */
  mode?: string;
  /**
   * @remarks
   * List of port configurations for the load balancer
   */
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
  /**
   * @remarks
   * The current status of the load balancer
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The type of load balancer
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
   * The maintenance end time
   * 
   * @example
   * 06:00
   */
  endTime?: string;
  /**
   * @remarks
   * The maintenance start time
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
   * The resource group ID.
   * 
   * @example
   * APIG-sg-gw-cq7ke5ll***
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

export class GetGatewayResponseBodyDataVSwitch extends $dara.Model {
  /**
   * @remarks
   * The resource tags.
   * 
   * @example
   * The resource tag.
   */
  name?: string;
  /**
   * @remarks
   * The tag value.
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
   * =
   * 
   * @example
   * $.errorCode
   */
  name?: string;
  /**
   * @remarks
   * Query Gateway Details
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
   * The VSwitch name
   * 
   * @example
   * vswitch-name
   */
  name?: string;
  /**
   * @remarks
   * The VSwitch ID
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
   * The zone name
   * 
   * @example
   * Hangzhou Zone I
   */
  name?: string;
  /**
   * @remarks
   * The VSwitch information in the zone
   */
  vSwitch?: GetGatewayResponseBodyDataZonesVSwitch;
  /**
   * @remarks
   * The zone ID
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
   * The vSwitch associated with the instance.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The mode in which the load balancer is provided. Valid values:
   * 
   * *   Managed: Cloud-native API Gateway manages and provides the load balancer.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The IP version of the address. Valid values:
   * 
   * *   ipv4
   * *   ipv6
   */
  environments?: GetGatewayResponseBodyDataEnvironments[];
  /**
   * @remarks
   * The ingress information.
   * 
   * @example
   * 1719386834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * gatewayEdition
   * 
   * @example
   * Serverless
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The ISP type for traffic routing
   * 
   * @example
   * BGP
   */
  isp?: string;
  /**
   * @remarks
   * loadBalancers
   */
  loadBalancers?: GetGatewayResponseBodyDataLoadBalancers[];
  /**
   * @remarks
   * The maintenance period configuration
   */
  maintenancePeriod?: GetGatewayResponseBodyDataMaintenancePeriod;
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * HangzhouZoneE
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
   * rg-acfm2ij6pwxsvua
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The port number.
   */
  securityGroup?: GetGatewayResponseBodyDataSecurityGroup;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * The VPC associated with the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * List of tags associated with the gateway
   */
  tags?: GetGatewayResponseBodyDataTags[];
  /**
   * @remarks
   * The load balancer address type. Valid values:
   * 
   * *   Internet
   * *   Intranet
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The ingress addresses of the instance.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * rg-aek2s3cvc4jzfxi
   */
  vSwitch?: GetGatewayResponseBodyDataVSwitch;
  /**
   * @remarks
   * The load balancer IP address.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The tag key.
   */
  vpc?: GetGatewayResponseBodyDataVpc;
  /**
   * @remarks
   * List of zone information
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
   * The environment alias.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The security group of the instance.
   */
  data?: GetGatewayResponseBodyData;
  /**
   * @remarks
   * Default environment
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The environment name.
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

