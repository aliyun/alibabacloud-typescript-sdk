// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouterInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The access point ID.
   */
  accessPointId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values are `true` and `false`. The default value is `true`.
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the router interface. The description must be 2 to 256 characters long, must start with a letter, and cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The source IP address that is used for the health check.
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address that is used for the health check.
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The billing method of the instance. Set the value to `PrePaid`. This parameter is required if you also specify `PricingCycle`.
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the router interface. The name must be 2 to 128 characters long and start with a letter. It can contain letters, digits, underscores (_), and hyphens (-).
   */
  name?: string;
  /**
   * @remarks
   * The ID of the peer access point.
   */
  oppositeAccessPointId?: string;
  /**
   * @remarks
   * The ID of the peer router interface.
   */
  oppositeInterfaceId?: string;
  /**
   * @remarks
   * The ID of the account to which the peer router interface belongs.
   */
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * The ID of the peer region.
   * 
   * This parameter is required.
   */
  oppositeRegionId?: string;
  /**
   * @remarks
   * The ID of the peer router. This parameter is available only when the local and peer router interfaces belong to the same account.
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of the peer router. Valid values:
   * 
   * - **VRouter**
   * - **VBR**
   * 
   * Default value: **VRouter**.
   */
  oppositeRouterType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. This parameter is required when `InstanceChargeType` is set to `PrePaid` and `PricingCycle` is set to `Month` or `Year`. Valid values:
   * 
   * - If `PricingCycle` is set to `Month`, the valid values are 1 to 9.
   * - If `PricingCycle` is set to `Year`, the valid values are 1 to 3.
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle. This parameter is required if `InstanceChargeType` is set to `PrePaid`. Valid values are `Month` and `Year`.
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the router interface in the peering connection. Valid values:
   * 
   * - **InitiatingSide**: The router interface is the initiator.
   * - **AcceptingSide**: The router interface is the acceptor.
   * 
   * This parameter is required.
   */
  role?: string;
  /**
   * @remarks
   * The router ID.
   * 
   * This parameter is required.
   */
  routerId?: string;
  /**
   * @remarks
   * The router type. Valid values:
   * 
   * - **VRouter**
   * - **VBR**
   * 
   * This parameter is required.
   */
  routerType?: string;
  /**
   * @remarks
   * The specification of the router interface. Valid values:
   * 
   * - **Mini.2**
   * - **Mini.5**
   * - **Small.1**
   * - **Small.2**
   * - **Small.5**
   * - **Middle.1**
   * - **Middle.2**
   * - **Middle.5**
   * - **Large.1**
   * - **Large.2**
   * - **Large.5**
   * - **Xlarge.1**
   * 
   * This parameter is required.
   */
  spec?: string;
  /**
   * @remarks
   * The CIDR block of the user. This parameter is required when you create a router interface for a virtual border router (VBR) that is in the same region as the Express Connect circuit, or when both `RouterType` and `OppositeRouterType` are set to `VBR`.
   */
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

