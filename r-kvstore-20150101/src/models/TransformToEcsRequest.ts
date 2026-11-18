// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToEcsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * * **true**: enables auto-renewal.
   * * **false**: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal epoch. Unit: months. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required when the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the destination instance. Valid values:
   * * **PostPaid**: pay-as-you-go.
   * * **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run before creating the instance. Valid values:
   * * **true**: performs a dry run without creating the cloud-native instance. The system checks the request parameters, request format, service limits, and inventory. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * * **false** (default): sends a normal request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when the database switchover is performed after data migration. Valid values: 
   * * **Immediately**: The switchover is performed immediately after the migration is completed.
   * * **MaintainTime**: The switchover is performed within the maintenance window.
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
   * The instance type of the destination cloud-native instance. For more information, see [Instance type query navigation](https://help.aliyun.com/document_detail/26350.html).
   * 
   * > Note:
   * > - For a cluster instance, you must specify a cloud-native cluster instance type that includes with.proxy and specify the ShardCount parameter.
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
   * The ID of the classic instance to be converted.
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
   * > This parameter is available and required only when the **ChargeType** parameter is set to **PrePaid**.
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
   * The number of data shards in the cloud-native cluster instance.
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

