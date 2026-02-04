// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToEcsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature. Valid values:
   * 
   * *   **true**: enables auto-renewal.
   * *   **false**: does not enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The subscription duration that is supported by auto-renewal. Unit: month. Valid values: **1**, **2**, **3**, **6**, and **12**.
   * 
   * > This parameter is required if the **AutoRenew** parameter is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The new billing method. Valid values:
   * 
   * *   **PostPaid:** pay-as-you-go
   * *   **PrePaid**: subscription. If you set this parameter to PrePaid, you must also specify the **Period** parameter.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform a precheck before the system creates the instance. Valid values:
   * 
   * *   **true**: The system performs a dry run and does not create the cloud-native instance. The system prechecks the request parameters, request format, service limits, and available resources. If the request fails to pass the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The time when a database switchover is performed after data is migrated. Valid values:
   * 
   * *   **Immediately**: A database switchover is performed immediately after data is migrated.
   * *   **MaintainTime**: A database switchover is performed during the maintenance window.
   * 
   * > Default value: Immediately.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values: **5.0**, **6.0**, and **7.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance specification of the cloud-native instance. For more information, see [Overview](https://help.aliyun.com/document_detail/26350.html).
   * 
   * This parameter is required.
   * 
   * @example
   * tair.rdb.1g
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance that you want to convert.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the instance. Unit: months. Valid values: **1**, 2, 3, 4, 5, 6, 7, 8, **9**, **12**, **24**, **36**.
   * 
   * > This parameter is available and required only if the **ChargeType** parameter is set to **PrePaid**.
   * 
   * @example
   * 1
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The number of data shards in the cloud-native cluster instance.
   * 
   * @example
   * 2
   */
  shardCount?: number;
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shardCount: 'ShardCount',
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
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shardCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

