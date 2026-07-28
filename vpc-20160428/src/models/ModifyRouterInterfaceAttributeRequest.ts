// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the health check IP addresses configured on the router interface. Valid values:
   * 
   * - **true**: Deletes the health check IP addresses.
   *  
   * - **false** (default): Does not delete the health check IP addresses.
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
   * 路由器接口
   */
  description?: string;
  /**
   * @remarks
   * The health check rate. Unit: milliseconds. Recommended value: **2000**. This parameter specifies the interval between consecutive probe packets sent during a health check.
   * 
   * In this example, **HcThreshold** is set to **8** and **HcRate** is set to **2000**. This means that during a health check, a probe packet is sent from **HealthCheckSourceIp** (the source IP address for health checks) to **HealthCheckTargetIp** (the destination IP address for health checks) every 2000 milliseconds. If 8 consecutive probe packets receive no response, the health check fails.
   * 
   * @example
   * 2000
   */
  hcRate?: number;
  /**
   * @remarks
   * The health check threshold. Unit: packets. Recommended value: **8**. This parameter specifies the number of probe packets sent during a health check.
   * 
   * @example
   * 8
   */
  hcThreshold?: number;
  /**
   * @remarks
   * The source IP address for health checks. The IP address must be an unused IP address in the local VPC.
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
   * > This parameter is required if **HealthCheckSourceIp** is specified.
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
   * The ID of the account to which the peer router interface belongs.
   * 
   * @example
   * 28768383240243****
   */
  oppositeInterfaceOwnerId?: number;
  /**
   * @remarks
   * The ID of the peer router.
   * 
   * @example
   * vrt-bp1jcg5cmxjbl9xgc****
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of the router to which the peer router interface belongs. Valid values:
   * 
   * - **VRouter**: vRouter.
   * 
   * - **VBR** (default): Virtual Border Router.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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

