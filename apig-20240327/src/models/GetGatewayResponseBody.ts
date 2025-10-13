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

export class GetGatewayResponseBodyDataLoadBalancers extends $dara.Model {
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
   * *   ipv4
   * *   ipv6
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The load balancer address type. Valid values:
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
   * nlb-xoh3pghru7c***
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
  ports?: GetGatewayResponseBodyDataLoadBalancersPorts[];
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
      ports: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancersPorts },
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

export class GetGatewayResponseBodyDataMaintenancePeriod extends $dara.Model {
  /**
   * @example
   * 06:00
   */
  endTime?: string;
  /**
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

export class GetGatewayResponseBodyDataVSwitch extends $dara.Model {
  /**
   * @remarks
   * The vSwitch name.
   * 
   * @example
   * HangzhouVPCvSwitch
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
   * HangzhouVPC
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
   * HangzhouVPCvSwitch
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
   * HangzhouZoneE
   */
  name?: string;
  /**
   * @remarks
   * The vSwitch information.
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
   * The creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The list of environments associated with the instance.
   */
  environments?: GetGatewayResponseBodyDataEnvironments[];
  /**
   * @remarks
   * The time when the instance expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  expireTimestamp?: number;
  /**
   * @example
   * Serverless
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * the gateway type, which is categorized into the following two types:
   * - API: indicates an API gateway
   * - AI: Indicates an AI gateway
   * 
   * @example
   * API
   */
  gatewayType?: string;
  isp?: string;
  /**
   * @remarks
   * The ingress addresses of the instance.
   */
  loadBalancers?: GetGatewayResponseBodyDataLoadBalancers[];
  maintenancePeriod?: GetGatewayResponseBodyDataMaintenancePeriod;
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
   * rg-aek2s3cvc4jzfxi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group of the instance.
   */
  securityGroup?: GetGatewayResponseBodyDataSecurityGroup;
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
   * *   CreateFailed: The instance failed to be created.
   * *   Upgrading: The instance is being upgraded.
   * *   UpgradeFailed: The instance failed to be upgraded.
   * *   Restarting: The instance is being restarted.
   * *   RestartFailed: The instance failed to be restarted.
   * *   Deleting: The instance is being released.
   * *   DeleteFailed: The instance failed to be released.
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
   * The destination version of the instance. If the value is inconsistent with the version value, you can upgrade the instance.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * The last update timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The vSwitch associated with the instance.
   */
  vSwitch?: GetGatewayResponseBodyDataVSwitch;
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
   * The VPC associated with the instance.
   */
  vpc?: GetGatewayResponseBodyDataVpc;
  /**
   * @remarks
   * The list of zones associated with the instance.
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
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetGatewayResponseBodyData;
  /**
   * @remarks
   * The response message returned.
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

