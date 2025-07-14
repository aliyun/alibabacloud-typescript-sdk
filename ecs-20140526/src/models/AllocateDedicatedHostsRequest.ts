// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDedicatedHostsRequestNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The timeout period for a UDP session between a Server Load Balancer (SLB) instance and the dedicated host. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  slbUdpTimeout?: number;
  /**
   * @remarks
   * The timeout period for a UDP session between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateDedicatedHostsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the dedicated host. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the dedicated host. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * Production
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

export class AllocateDedicatedHostsRequest extends $dara.Model {
  networkAttributes?: AllocateDedicatedHostsRequestNetworkAttributes;
  /**
   * @remarks
   * The policy used to migrate the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online. Valid values:
   * 
   * *   Migrate: The instances are migrated to another physical server and restarted.
   * 
   *     If cloud disks are attached to the dedicated host, the default value is Migrate.
   * 
   * *   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.
   * 
   *     If local disks are attached to the dedicated host, the default value is Stop.
   * 
   * @example
   * Migrate
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * Specifies whether to add the dedicated host to the resource pool for automatic deployment. If you create an ECS instance on a dedicated host without specifying the **DedicatedHostId** parameter, Alibaba Cloud selects a dedicated host from the resource pool to host the instance. For more information, see [Automatic deployment](https://help.aliyun.com/document_detail/118938.html). Valid values:
   * 
   * *   on: adds the dedicated host to the resource pool for automatic deployment.
   * *   off: does not add the dedicated host to the resource pool for automatic deployment.
   * 
   * Default value: on.
   * 
   * > If you do not want to add the dedicated host to the resource pool for automatic deployment, set this parameter to off.
   * 
   * @example
   * off
   */
  autoPlacement?: string;
  /**
   * @remarks
   * The time when to automatically release the dedicated host. Specify the time in the `ISO 8601` standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   It must be at least half an hour later than the current time.
   * 
   * *   It must be at most three years later than the current time.
   * 
   * *   If the value of seconds (ss) is not 00, it is automatically set to 00.
   * 
   * @example
   * 2019-08-21T12:30:24Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to automatically renew the subscription dedicated host.
   * 
   * > The **AutoRenew** parameter takes effect only when the **ChargeType** parameter is set to PrePaid.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration of the dedicated host. The **AutoRenewPeriod** parameter takes effect and is required only when the **AutoRenew** parameter is set to true. Valid values:
   * 
   * Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the dedicated host. Valid values:
   * 
   * *   PrePaid: subscription. If you set this parameter to PrePaid, make sure that you have sufficient account balance or credits. Otherwise, `InvalidPayMethod` is returned.
   * *   PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The CPU overcommit ratio. You can configure CPU overcommit ratios only for the following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
   * 
   * The CPU overcommit ratio affects the number of available vCPUs on a dedicated host. You can use the following formula to calculate the number of available vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU cores × 2 × CPU overcommit ratio. For example, the number of physical CPU cores on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s dedicated host to 4, the number of available vCPUs on the dedicated host is 416. For scenarios that have minimal requirements on CPU stability or where CPU load is not heavy, such as development and test environments, you can increase the number of available vCPUs on a dedicated host by increasing the CPU overcommit ratio. This way, you can deploy more ECS instances of the same specifications on the dedicated host and reduce the unit deployment cost.
   * 
   * @example
   * 1
   */
  cpuOverCommitRatio?: number;
  /**
   * @remarks
   * The ID of the dedicated host cluster in which to create the dedicated host.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated host. The name must be 2 to 128 characters in length and can contain letters and digits. The name can contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * myDDH
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The dedicated host type. You can call the [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) operation to query the most recent list of dedicated host types.
   * 
   * This parameter is required.
   * 
   * @example
   * ddh.c5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The description of the dedicated host. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This-is-my-DDH
   */
  description?: string;
  /**
   * @remarks
   * The minimum number of dedicated hosts to create. Valid values: 1 to 100.
   * 
   * > If the number of available dedicated hosts is less than the minimum number of dedicated hosts to create, the dedicated hosts fail to be created.
   * 
   * @example
   * 2
   */
  minQuantity?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the dedicated host. The `Period` parameter is required and takes effect only when the `ChargeType` parameter is set to `PrePaid`. Valid values:
   * 
   * *   Valid values when the PeriodUnit parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * *   Valid values when the PeriodUnit parameter is set to Year: 1, 2, 3, 4, and 5.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the dedicated host. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The number of dedicated hosts that you want to create. Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 2
   */
  quantity?: number;
  /**
   * @remarks
   * The ID of the region in which to create the dedicated host. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the dedicated host.
   * 
   * @example
   * rg-bp67acfmxazb4ph***
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags to add to the dedicated host.
   */
  tag?: AllocateDedicatedHostsRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which to create the dedicated host.
   * 
   * This parameter is empty by default. If you do not specify a zone, the system selects a zone.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAttributes: 'NetworkAttributes',
      actionOnMaintenance: 'ActionOnMaintenance',
      autoPlacement: 'AutoPlacement',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostName: 'DedicatedHostName',
      dedicatedHostType: 'DedicatedHostType',
      description: 'Description',
      minQuantity: 'MinQuantity',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAttributes: AllocateDedicatedHostsRequestNetworkAttributes,
      actionOnMaintenance: 'string',
      autoPlacement: 'string',
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      clientToken: 'string',
      cpuOverCommitRatio: 'number',
      dedicatedHostClusterId: 'string',
      dedicatedHostName: 'string',
      dedicatedHostType: 'string',
      description: 'string',
      minQuantity: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': AllocateDedicatedHostsRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

