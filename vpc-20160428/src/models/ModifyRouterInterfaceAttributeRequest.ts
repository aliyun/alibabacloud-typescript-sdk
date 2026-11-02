// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the health check IP address configured on the router interface. Valid values:
   * 
   * - **true**: deletes the health check IP address.
   *  
   * - **false** (default): does not delete the health check IP address.
   * 
   * @example
   * false
   */
  deleteHealthCheckIp?: boolean;
  /**
   * @remarks
   * The description of the router interface. 
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * Router interface
   */
  description?: string;
  /**
   * @remarks
   * The health check interval. Unit: milliseconds. The recommended value is **2000**. This value specifies the time interval at which consecutive probe packets are sent during a health check.
   * 
   * In this example, **HcThreshold** is set to **8** and **HcRate** is set to **2000**. This means that a probe packet is sent from **HealthCheckSourceIp** (the source IP address for health checks) to **HealthCheckTargetIp** (the destination IP address for health checks) every 2,000 milliseconds during a health check. If no response is received for eight consecutive probe packets, the health check fails.
   * 
   * @example
   * 2000
   */
  hcRate?: number;
  /**
   * @remarks
   * The health check threshold. Unit: packets. The recommended value is **8**. This value specifies the number of probe packets sent during a health check.
   * 
   * @example
   * 8
   */
  hcThreshold?: number;
  /**
   * @remarks
   * The source IP address for health checks. It must be an unused IP address in the local VPC.
   * 
   * > You can specify this parameter in Express Connect circuit scenarios.
   * 
   * @example
   * 116.62.XX.XX
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address for health checks. 
   * 
   * > This parameter is required after you specify **HealthCheckSourceIp**.
   * 
   * @example
   * 116.62.XX.XX
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The name of the router interface.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * TEST
   */
  name?: string;
  /**
   * @remarks
   * The ID of the peer router interface.
   * 
   * @example
   * ri-2zeo3xzyf38r4urz****
   */
  oppositeInterfaceId?: string;
  /**
   * @remarks
   * The account ID of the peer router interface.
   * 
   * @example
   * 28768383240243****
   */
  oppositeInterfaceOwnerId?: number;
  /**
   * @remarks
   * The ID of the peer vRouter.
   * 
   * @example
   * vrt-bp1jcg5cmxjbl9xgc****
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of the vRouter to which the peer router interface belongs. Valid values:
   * 
   * - **VRouter**: vRouter.
   * 
   * - **VBR** (default): Virtual Border Router (VBR).
   * 
   * @example
   * VBR
   */
  oppositeRouterType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * ri-2zeo3xzyf38r4urz****
   */
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteHealthCheckIp: 'DeleteHealthCheckIp',
      description: 'Description',
      hcRate: 'HcRate',
      hcThreshold: 'HcThreshold',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      name: 'Name',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteHealthCheckIp: 'boolean',
      description: 'string',
      hcRate: 'number',
      hcThreshold: 'number',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      name: 'string',
      oppositeInterfaceId: 'string',
      oppositeInterfaceOwnerId: 'number',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

