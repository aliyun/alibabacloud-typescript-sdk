// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouterInterfaceRequest extends $dara.Model {
  accessPointId?: string;
  autoPay?: boolean;
  clientToken?: string;
  description?: string;
  healthCheckSourceIp?: string;
  healthCheckTargetIp?: string;
  instanceChargeType?: string;
  name?: string;
  oppositeAccessPointId?: string;
  oppositeInterfaceId?: string;
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  oppositeRegionId?: string;
  oppositeRouterId?: string;
  oppositeRouterType?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: number;
  pricingCycle?: string;
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
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routerType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      description: 'Description',
      healthCheckSourceIp: 'HealthCheckSourceIp',
      healthCheckTargetIp: 'HealthCheckTargetIp',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      oppositeAccessPointId: 'OppositeAccessPointId',
      oppositeInterfaceId: 'OppositeInterfaceId',
      oppositeInterfaceOwnerId: 'OppositeInterfaceOwnerId',
      oppositeRegionId: 'OppositeRegionId',
      oppositeRouterId: 'OppositeRouterId',
      oppositeRouterType: 'OppositeRouterType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      routerId: 'RouterId',
      routerType: 'RouterType',
      spec: 'Spec',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      autoPay: 'boolean',
      clientToken: 'string',
      description: 'string',
      healthCheckSourceIp: 'string',
      healthCheckTargetIp: 'string',
      instanceChargeType: 'string',
      name: 'string',
      oppositeAccessPointId: 'string',
      oppositeInterfaceId: 'string',
      oppositeInterfaceOwnerId: 'string',
      oppositeRegionId: 'string',
      oppositeRouterId: 'string',
      oppositeRouterType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      pricingCycle: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      routerId: 'string',
      routerType: 'string',
      spec: 'string',
      userCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

