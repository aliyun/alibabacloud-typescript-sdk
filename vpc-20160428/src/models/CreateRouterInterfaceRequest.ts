// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouterInterfaceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 and can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * You can call the [DescribeAccessPoints](https://help.aliyun.com/document_detail/36062.html) operation to query the access point ID of the Express Connect circuit.  
   *           
   * > This parameter is required in Express Connect circuit scenarios.
   * 
   * @example
   * ap-cn-hangzhou-yh-ts-A
   */
  accessPointId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values: 
   *           
   * - **false** (default): Automatic payment is disabled. After an order is generated, go to the Order Center to complete the payment.   
   * 
   * - **true**: Automatic payment is enabled. The order is automatically paid.   
   * 
   * > This parameter is required when **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **false** (default): Auto-renewal is disabled.
   * - **true**: Auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. 
   * 
   * The client generates the value of this parameter. Ensure that the value is unique among different requests. 
   * 
   * > If you do not specify this parameter, the system uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the router interface.  
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * abcabc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the router interface on the VBR is created in fast link mode. Fast link mode allows the router interfaces on the VBR and VPC to be automatically connected after they are created. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * > - This parameter takes effect only when **RouterType** is set to **VBR** and **OppositeRouterType** is set to **VRouter**.
   * > - When **FastLinkMode** is set to **true**, **Role** must be set to **InitiatingSide**, and **AccessPointId**, **OppositeRouterType**, **OppositeRouterId**, and **OppositeInterfaceOwnerId** are required.
   * 
   * @example
   * false
   */
  fastLinkMode?: boolean;
  /**
   * @remarks
   * The source IP address for health checks. The IP address must be an unused IP address in the local VPC. 
   * 
   * > You can specify this parameter in Express Connect circuit scenarios.
   * 
   * @example
   * 192.168.0.6
   */
  healthCheckSourceIp?: string;
  /**
   * @remarks
   * The destination IP address for health checks. 
   * 
   * > This parameter is required when **HealthCheckSourceIp** is specified.
   * 
   * @example
   * 192.168.0.8
   */
  healthCheckTargetIp?: string;
  /**
   * @remarks
   * The billing method of the router interface. Valid values: 
   * 
   * - **PrePaid**: subscription.
   * 
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the router interface.  
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the access point to which the peer belongs.
   * 
   * > This parameter is required when the peer router interface is on a VBR. This parameter cannot be modified after the router interface is created.
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
   * The Alibaba Cloud account ID of the owner of the peer router interface.
   * 
   * @example
   * 253460731706911258
   */
  oppositeInterfaceOwnerId?: string;
  /**
   * @remarks
   * The region ID of the accepter.
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
   * The type of the router associated with the peer router interface. Valid values: 
   * 
   * - **VRouter**: vRouter.
   * 
   * - **VBR**: Virtual Border Router.
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
   * - If you select monthly billing, the valid values are **1** to **9**.
   * 
   * - If you select yearly billing, the valid values are **1** to **3**.
   * 
   * > This parameter is required when **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the subscription. Valid values:
   * 
   * - **Month** (default): monthly billing.
   * 
   * - **Year**: yearly billing.
   * 
   * > This parameter is required when **InstanceChargeType** is set to **PrePaid**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
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
   * - **InitiatingSide**: requester.   
   * 
   * - **AcceptingSide**: accepter.
   * 
   * This parameter is required.
   * 
   * @example
   * InitiatingSide
   */
  role?: string;
  /**
   * @remarks
   * The ID of the router associated with the router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-m5ebm6g9ptc9mly1c****
   */
  routerId?: string;
  /**
   * @remarks
   * The type of the router associated with the router interface. Valid values: 
   * 
   * - **VRouter**: vRouter.
   * 
   * - **VBR**: Virtual Border Router.
   * 
   * This parameter is required.
   * 
   * @example
   * VRouter
   */
  routerType?: string;
  /**
   * @remarks
   * The specification of the router interface. The available specifications and corresponding bandwidth values are as follows: 
   *           
   * - **Mini.2**: 2 Mbps   
   * 
   * - **Mini.5**: 5 Mbps   
   * 
   * - **Small.1**: 10 Mbps   
   * 
   * - **Small.2**: 20 Mbps   
   *  
   * - **Small.5**: 50 Mbps   
   * 
   * - **Middle.1**: 100 Mbps   
   * 
   * - **Middle.2**: 200 Mbps   
   * 
   * - **Middle.5**: 500 Mbps   
   * 
   * - **Large.1**: 1000 Mbps   
   * 
   * - **Large.2**: 2000 Mbps   
   * 
   * - **Large.5**: 5000 Mbps   
   * 
   * - **Xlarge.1**: 10000 Mbps  
   * 
   * > When **Role** is set to **AcceptingSide** (accepter), set **Spec** to **Negative**. No specification is required when you create an accepter router interface.
   * 
   * This parameter is required.
   * 
   * @example
   * Mini.2
   */
  spec?: string;
  /**
   * @remarks
   * The tags of the resource.
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

