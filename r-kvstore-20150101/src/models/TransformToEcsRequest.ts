// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToEcsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * * **true**: enabled.
   * * **false**: disabled.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required when **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method to convert to. Valid values:
   * * **PostPaid**: pay-as-you-go.
   * * **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this operation. Valid values:
   * * **true**: performs a dry run without creating the cloud-native instance. The system checks items such as the request parameters, request format, service limits, and available inventory. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * * **false** (default): sends the request. If the check succeeds, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the database switchover is performed after data migration. Valid values: 
   * * **Immediately**: The switchover is performed immediately after the migration is complete.
   * * **MaintainTime**: The switchover is performed during the maintenance window.
   * 
   * > Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The Redis-compatible engine version of the instance. Valid values: **5.0**, **6.0**, and **7.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type of the target cloud-native instance. For more information, see [Overview of instance specifications](https://help.aliyun.com/document_detail/26350.html).
   * 
   * > This is the description content.
   * > - For cluster instances, specify the corresponding cloud-native cluster instance type with .proxy, and specify the ShardCount parameter for the number of shards.
   * 
   * This parameter is required.
   * 
   * @example
   * tair.rdb.1g
   * tair.rdb.with.proxy.1g
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the classic architecture instance to convert.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  isAcrossZone?: boolean;
  izNo?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * > This parameter is available and required only when **ChargeType** is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  secondaryIzNo?: string;
  /**
   * @remarks
   * The number of data shard nodes in the cloud-native cluster instance.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      dryRun: 'DryRun',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      isAcrossZone: 'IsAcrossZone',
      izNo: 'IzNo',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryIzNo: 'SecondaryIzNo',
      shardCount: 'ShardCount',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      dryRun: 'boolean',
      effectiveTime: 'string',
      engineVersion: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      isAcrossZone: 'boolean',
      izNo: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryIzNo: 'string',
      shardCount: 'number',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

