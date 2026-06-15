// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the router interface. The description must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The source IP address used for the health check.
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address used for the health check.
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The new name of the router interface. The name must be 2 to 128 characters long and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the opposite router interface.
   */
  oppositeInterfaceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the opposite router interface.
   */
  oppositeInterfaceOwnerId?: number;
  /**
   * @remarks
   * The ID of the opposite router.
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of the opposite router. Valid values: `VRouter` and `VBR`. The default value is `VRouter`.
   */
  oppositeRouterType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the router interface is deployed.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the router interface that you want to modify.
   * 
   * This parameter is required.
   */
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
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
      description: 'string',
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

