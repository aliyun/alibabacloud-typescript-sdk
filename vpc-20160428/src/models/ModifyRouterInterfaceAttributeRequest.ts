// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the health check IP addresses configured on the router interface. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  deleteHealthCheckIp?: boolean;
  /**
   * @remarks
   * The description of the router interface.
   * 
   * The value must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * The description of the router interface.
   */
  description?: string;
  /**
   * @remarks
   * The rate of health checks. Unit: milliseconds. The recommended value is **2000**. This value specifies the interval at which probe packets are sent during a health check.
   * 
   * In this example, **HcThreshold** is set to **8** and **HcRate** is set to **2000**. In this example, probe packets are sent from **HealthCheckSourceIp** (source address) to **HealthCheckTargetIp** (destination address) every 2,000 seconds. If no response is returned for eight consecutive times, the health check fails.
   * 
   * @example
   * 2000
   */
  hcRate?: number;
  /**
   * @remarks
   * The healthy threshold. Unit: packets. We recommend that you set the value to **8**. This value specifies the number of probe packets that are sent during a health check.
   * 
   * @example
   * 8
   */
  hcThreshold?: number;
  /**
   * @remarks
   * The source IP address that is used to perform health checks. The source IP address must be an idle IP address of the local virtual private cloud (VPC).
   * 
   * >  You can set this parameter when an Express Connect circuit is used.
   * 
   * @example
   * 116.62.XX.XX
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address that is used to perform health checks.
   * 
   * >  This parameter is required when **HealthCheckSourceIp** is specified.
   * 
   * @example
   * 116.62.XX.XX
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The name of the router interface.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
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
   * The ID of the Alibaba Cloud account to which the peer router interface belongs.
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
   * The type of router to which the peer router interface belongs. Valid values:
   * 
   * *   **VRouter**
   * *   **VBR** (default)
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

