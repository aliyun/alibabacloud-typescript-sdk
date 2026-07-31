// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceAttributeRequest extends $dara.Model {
  description?: string;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  name?: string;
  oppositeInterfaceId?: string;
  oppositeInterfaceOwnerId?: number;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
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

