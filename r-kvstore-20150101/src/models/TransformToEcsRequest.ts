// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToEcsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: enables auto-renewal.
   * 
   * - **false**: disables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal cycle. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required if you set **AutoRenew** to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the target instance. Valid values:
   * 
   * - **PostPaid**: pay-as-you-go
   * 
   * - **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run to check the request. The check items include the required parameters, request format, service limits, and available resources. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request and creates an instance after the request passes the check.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when to switch the database after data migration. Valid values:
   * 
   * - **Immediately**: The database is immediately switched after the migration is complete.
   * 
   * - **MaintainTime**: The database is switched within the maintenance window.
   * 
   * > Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The Redis-compatible version of the instance. Valid values: **5.0**, **6.0**, and **7.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance type of the target cloud-native instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/26350.html).
   * 
   * > If you want to convert a cluster instance, you must specify the corresponding cloud-native cluster instance type that includes .with.proxy in its name and specify the ShardCount parameter.
   * >
   * > - For a cluster instance, you must provide the corresponding cloud-native cluster specification that includes `.proxy`. You must also specify the number of shards by using the `ShardCount` parameter.
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
   * The ID of the classic instance that you want to convert.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to deploy the instance across availability zones. This feature is supported only for cluster instances.
   */
  isAcrossZone?: boolean;
  /**
   * @remarks
   * The ID of the availability zone.
   */
  izNo?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration. Unit: month. Valid values: **1**, **2**, **3**, **4**, **5**, 6, 7, 8, 9, 12, 24, and 36.
   * 
   * > This parameter is available and required only if you set the **ChargeType** parameter to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the secondary availability zone.
   */
  secondaryIzNo?: string;
  /**
   * @remarks
   * The number of data shards in the cloud-native cluster instance.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   */
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

