// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouterInterfaceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key to add to the resource. You must enter at least one tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be at most 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class CreateRouterInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access point to which the VBR belongs.
   * 
   * You can call the [DescribeAccessPoints](https://help.aliyun.com/document_detail/36062.html) operation to obtain the IDs of access points.
   * 
   * >  This parameter is required if the VBR is connected to an Express Connect circuit.
   * 
   * @example
   * ap-cn-hangzhou-yh-ts-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **false** (default): The automatic payment is disabled. If you select this option, you must go to the Order Center to complete the payment after an order is generated.
   * *   **true**: The automatic payment is enabled. Payments are automatically complete after an order is generated.
   * 
   * >  This parameter is required if **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the router interface.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * abcabc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the VBR that is created in the Fast Link mode is uplinked to the router interface. The Fast Link mode helps automatically connect router interfaces that are created for the VBR and its peer VPC. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > 
   * 
   * *   This parameter takes effect only if **RouterType** is set to **VBR** and **OppositeRouterType** is set to **VRouter**.
   * 
   * *   If **FastLinkMode** is set to **true**, **Role** must be set to **InitiatingSide**. In this case, **AccessPointId**, **OppositeRouterType**, **OpppsiteRouterId**, and **OppositeInterfaceOwnerId** are required.
   * 
   * @example
   * false
   */
  fastLinkMode?: boolean;
  /**
   * @remarks
   * The source IP address that is used to perform health checks. The source IP address must be an idle IP address of the local virtual private cloud (VPC).
   * 
   * >  You can set this parameter when an Express Connect circuit is used.
   * 
   * @example
   * 192.168.0.6
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address that is used to perform health checks.
   * 
   * >  This parameter is required if you specify **HealthCheckSourceIp**
   * 
   * @example
   * 192.168.0.8
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The billing method of the router interface. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the router interface.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the access point to which the peer belongs.
   * 
   * >  This parameter is required if the peer router interface is associated with a VBR. The specified value cannot be changed after the router interface is created.
   * 
   * @example
   * ap-cn-shanghai-nt-aligroup-C
   */
  oppositeAccessPointId?: string;
  /**
   * @remarks
   * The ID of the peer router interface.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  oppositeInterfaceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the peer router interface belongs.
   * 
   * @example
   * 253460731706911258
   */
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * The ID of the region in which the acceptor is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  oppositeRegionId?: string;
  /**
   * @remarks
   * The ID of the peer router.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  oppositeRouterId?: string;
  /**
   * @remarks
   * The type of router that is associated with the peer router interface. Valid values:
   * 
   * *   **VRouter**
   * *   **VBR**
   * 
   * @example
   * VRouter
   */
  oppositeRouterType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * *   Valid values when PricingCycle is set to Month: **1 to 9**.
   * *   Valid values when PricingCycle is set to Year: **1 to 3**.
   * 
   * >  This parameter is required if **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription. Valid values:
   * 
   * *   **Month** (default)
   * *   **Year**
   * 
   * >  This parameter is required if **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region to which the router interface belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * For more information about resource group, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the router interface. Valid values:
   * 
   * *   **InitiatingSide**: requester
   * *   **AcceptingSide**: acceptor
   * 
   * This parameter is required.
   * 
   * @example
   * InitiatingSide
   */
  role?: string;
  /**
   * @remarks
   * The ID of the router that is associated with the router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-m5ebm6g9ptc9mly1c****
   */
  routerId?: string;
  /**
   * @remarks
   * The type of router that is associated with the router interface. Valid values:
   * 
   * *   **VRouter**
   * *   **VBR**
   * 
   * This parameter is required.
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The specification of the router interface and the corresponding bandwidth. Valid values:
   * 
   * *   **Mini.2**: 2 Mbit/s
   * *   **Mini.5**: 5 Mbit/s
   * *   **Small.1**: 10 Mbit/s
   * *   **Small.2**: 20 Mbit/s
   * *   **Small.5**: 50 Mbit/s
   * *   **Middle.1**: 100 Mbit/s
   * *   **Middle.2**: 200 Mbit/s
   * *   **Middle.5**: 500 Mbit/s
   * *   **Large.1**: 1,000 Mbit/s
   * *   **Large.2**: 2,000 Mbit/s
   * *   **Large.5**: 5,000 Mbit/s
   * *   **Xlarge.1**: 10,000 Mbit/s
   * 
   * >  If **Role** is set to **AcceptingSide**, set **Spec** to **Negative**. This indicates that you do not need to specify the specification when you create an acceptor router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * Mini.2
   */
  spec?: string;
  /**
   * @remarks
   * The tag to add to the resource.
   */
  tags?: CreateRouterInterfaceRequestTags[];
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      description: 'Description',
      fastLinkMode: 'FastLinkMode',
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
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      role: 'Role',
      routerId: 'RouterId',
      routerType: 'RouterType',
      spec: 'Spec',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      clientToken: 'string',
      description: 'string',
      fastLinkMode: 'boolean',
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
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      role: 'string',
      routerId: 'string',
      routerType: 'string',
      spec: 'string',
      tags: { 'type': 'array', 'itemType': CreateRouterInterfaceRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

