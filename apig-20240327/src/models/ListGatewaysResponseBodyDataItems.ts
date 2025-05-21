// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewaysResponseBodyDataItemsLoadBalancers } from "./ListGatewaysResponseBodyDataItemsLoadBalancers";
import { ListGatewaysResponseBodyDataItemsSecurityGroup } from "./ListGatewaysResponseBodyDataItemsSecurityGroup";
import { SubDomainInfo } from "./SubDomainInfo";
import { ListGatewaysResponseBodyDataItemsTags } from "./ListGatewaysResponseBodyDataItemsTags";
import { ListGatewaysResponseBodyDataItemsVSwitch } from "./ListGatewaysResponseBodyDataItemsVswitch";
import { ListGatewaysResponseBodyDataItemsVpc } from "./ListGatewaysResponseBodyDataItemsVpc";
import { ListGatewaysResponseBodyDataItemsZones } from "./ListGatewaysResponseBodyDataItemsZones";


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

