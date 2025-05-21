// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGatewayResponseBodyDataEnvironments } from "./GetGatewayResponseBodyDataEnvironments";
import { GetGatewayResponseBodyDataLoadBalancers } from "./GetGatewayResponseBodyDataLoadBalancers";
import { GetGatewayResponseBodyDataSecurityGroup } from "./GetGatewayResponseBodyDataSecurityGroup";
import { GetGatewayResponseBodyDataTags } from "./GetGatewayResponseBodyDataTags";
import { GetGatewayResponseBodyDataVSwitch } from "./GetGatewayResponseBodyDataVswitch";
import { GetGatewayResponseBodyDataVpc } from "./GetGatewayResponseBodyDataVpc";
import { GetGatewayResponseBodyDataZones } from "./GetGatewayResponseBodyDataZones";


export class GetGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Charge type
   * - POSTPAY: Postpaid (pay-as-you-go)
   * - PREPAY: Prepaid (subscription)
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Source of gateway creation:
   * - Console: Console.
   * 
   * @example
   * Console
   */
  createFrom?: string;
  /**
   * @remarks
   * Creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * List of environments associated with the gateway.
   */
  environments?: GetGatewayResponseBodyDataEnvironments[];
  /**
   * @remarks
   * Expiration timestamp for subscription. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * Gateway ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * List of entry addresses for the gateway.
   */
  loadBalancers?: GetGatewayResponseBodyDataLoadBalancers[];
  /**
   * @remarks
   * Gateway name.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
  /**
   * @remarks
   * Number of gateway instance nodes.
   * 
   * @example
   * 2
   */
  replicas?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2s3cvc4jzfxi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group of the gateway.
   */
  securityGroup?: GetGatewayResponseBodyDataSecurityGroup;
  /**
   * @remarks
   * Gateway specification:
   * - apigw.small.x1: Small specification.
   * 
   * @example
   * apigw.small.x1
   */
  spec?: string;
  /**
   * @remarks
   * Gateway status:
   * - Running: Running.
   * - Creating: Creating.
   * - CreateFailed: Creation failed.
   * - Upgrading: Upgrading.
   * - UpgradeFailed: Upgrade failed.
   * - Restarting: Restarting.
   * - RestartFailed: Restart failed.
   * - Deleting: Deleting.
   * - DeleteFailed: Deletion failed.
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
   * Target version of the gateway. When it is inconsistent with the current version, an upgrade can be performed.
   * 
   * @example
   * 2.0.2
   */
  targetVersion?: string;
  /**
   * @remarks
   * Update timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The virtual switch associated with the gateway.
   */
  vSwitch?: GetGatewayResponseBodyDataVSwitch;
  /**
   * @remarks
   * Gateway version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  /**
   * @remarks
   * The VPC (Virtual Private Cloud) associated with the gateway.
   */
  vpc?: GetGatewayResponseBodyDataVpc;
  /**
   * @remarks
   * List of availability zones associated with the gateway.
   */
  zones?: GetGatewayResponseBodyDataZones[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      createFrom: 'createFrom',
      createTimestamp: 'createTimestamp',
      environments: 'environments',
      expireTimestamp: 'expireTimestamp',
      gatewayId: 'gatewayId',
      loadBalancers: 'loadBalancers',
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
      gatewayId: 'string',
      loadBalancers: { 'type': 'array', 'itemType': GetGatewayResponseBodyDataLoadBalancers },
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

