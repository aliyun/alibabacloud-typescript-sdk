// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDedicatedHostsRequestNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The timeout period of a UDP session for load balancing connections to the dedicated host. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  slbUdpTimeout?: number;
  /**
   * @remarks
   * The timeout period of a UDP session between a user and a cloud service running on the dedicated host. Unit: seconds. Valid values: 15 to 310.
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
   * The tag key of the dedicated host. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated host. Valid values of N: 1 to 20.
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
   * - Migrate: The instances are migrated to another physical server and restarted.
   * 
   *   Default value when cloud disks are attached to the dedicated host: Migrate.
   * 
   * - Stop: The instances are stopped on the current dedicated host. After the dedicated host is confirmed to be irreparable, the instances are migrated to another physical server and restarted.
   * 
   *   Default value when local disks are attached to the dedicated host: Stop.
   * 
   * @example
   * Migrate
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * Specifies whether to add the dedicated host to the automatic deployment resource pool. If you create an instance on a dedicated host without specifying **DedicatedHostId**, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see [Automatic deployment](https://help.aliyun.com/document_detail/118938.html). Valid values:
   * 
   * - on: adds the dedicated host to the automatic deployment resource pool.
   * 
   * - off: does not add the dedicated host to the automatic deployment resource pool.
   * 
   * Default value: on.
   * 
   * > If you do not want the dedicated host to be added to the automatic deployment resource pool, set this parameter to off.
   * 
   * @example
   * off
   */
  autoPlacement?: string;
  /**
   * @remarks
   * The automatic release time of the dedicated host. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC+0.
   * 
   * > - The earliest release time must be at least half an hour from the current time.
   * > - The latest release time must be at most three years from the current time.
   * > - If the value of seconds (ss) is not 00, it is automatically set to 00.
   * 
   * @example
   * 2019-08-21T12:30:24Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription dedicated host.
   * > The **AutoRenew** parameter takes effect only when **ChargeType** is set to PrePaid.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. The **AutoRenewPeriod** parameter takes effect and is required only when **AutoRenew** is set to true. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week: 1, 2, and 3.
   * - If PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * 
   * 
   * <props="intl">If PeriodUnit is set to Month: 1, 2, 3, 6, and 12.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the dedicated host. Valid values:
   * 
   * <props="china">
   * - PrePaid: subscription. If you set this parameter to PrePaid, confirm that your payment method supports balance payment or credit payment. Otherwise, the `InvalidPayMethod` error is returned.
   * 
   * - PostPaid: pay-as-you-go.
   * 
   * 
   * 
   * 
   * <props="intl">
   * - PrePaid: subscription. If you set this parameter to PrePaid, confirm that your payment method supports credit payment. Otherwise, the `InvalidPayMethod` error is returned.
   * 
   * - PostPaid: pay-as-you-go.
   * 
   * 
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The CPU overcommit ratio. Only the custom instance types g6s, c6s, and r6s support the CPU overcommit ratio. Valid values: 1 to 5.
   * 
   * The CPU overcommit ratio affects the number of available vCPUs on a dedicated host. The number of available vCPUs on a dedicated host = Number of physical CPU cores × 2 × CPU overcommit ratio. For example, the number of physical CPU cores on each g6s host is 52. If you set the CPU overcommit ratio to 4, the total number of vCPUs on the dedicated host is 416. For scenarios that do not require strict CPU stability or have low CPU loads, such as development and testing environments, you can increase the CPU overcommit ratio to increase the number of available vCPUs and deploy more ECS instances of the same specifications, which reduces the unit deployment cost.
   * 
   * @example
   * 1
   */
  cpuOverCommitRatio?: number;
  /**
   * @remarks
   * The ID of the dedicated host cluster to which the dedicated host belongs.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated host. The name must be 2 to 128 characters in length and can contain Unicode characters under the Letter category, which includes characters from various scripts such as English, Chinese, and digits. The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * myDDH
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The type of the dedicated host. You can call [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) to query the most recent list of dedicated host types.
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
   * > If the active stock of dedicated hosts is less than the minimum number, the dedicated host creation fails.
   * 
   * @example
   * 2
   */
  minQuantity?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the dedicated host. The `Period` parameter takes effect and is required only when `ChargeType` is set to `PrePaid`. Valid values:
   * 
   * <props="china">
   * - If PeriodUnit is set to Week: 1, 2, 3, and 4.
   * - If PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * - If PeriodUnit is set to Year: 1, 2, 3, 4, and 5.
   * 
   * 
   * 
   * <props="intl">
   * - If PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * - If PeriodUnit is set to Year: 1, 2, 3, 4, and 5.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * <props="china">
   * - Week
   * - Month
   * - Year
   * 
   * 
   * 
   * <props="intl">
   * - Month
   * - Year
   * 
   * 
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The number of dedicated hosts to create. Valid values: 1 to 100.
   * 
   * Default value: 1.
   * 
   * @example
   * 2
   */
  quantity?: number;
  /**
   * @remarks
   * The region ID of the dedicated host. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph***
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: AllocateDedicatedHostsRequestTag[];
  /**
   * @remarks
   * The zone ID of the dedicated host.
   * 
   * Default value: empty, which indicates that the system selects a zone.
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

