// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can use tags to filter clusters. You can specify up to 20 tags. N in `Tag.N.Key` must be a unique and consecutive integer that starts from 1. `Tag.N.Key` is paired with `Tag.N.Value`.
   * 
   * > The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can use tags to filter clusters. You can specify up to 20 tags. N in `Tag.N.Value` must be a unique and consecutive integer that starts from 1. `Tag.N.Value` is paired with `Tag.N.Key`.
   * 
   * > The tag value can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * test1
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

export class CreateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  backupSetID?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. The token must be unique across requests, case-sensitive, and up to 64 ASCII characters long.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The compute resources for the cluster. Compute resources are used for data queries. A larger amount of compute resources can provide better query performance. Compute resources are available in cluster and single-node editions:
   * 
   * - Cluster edition: includes specifications such as 16 cores/64 GB, 24 cores/96 GB, and 32 cores or more. The cluster edition supports resource pool isolation, scheduled scaling, and tiered storage of hot and cold data.
   * 
   * - Single-node edition: includes specifications such as 8 cores/32 GB and 16 cores/64 GB. The single-node edition does not provide an SLA guarantee and has a long recovery time from failures (4 to 8 hours). We do not recommend that you use the single-node edition in production environments.
   * 
   * > * You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/190632.html) operation to query the compute resources that are available in a specific region.
   * >
   * > * This parameter is required when `Mode` is set to `Flexible` (flexible mode).
   * 
   * @example
   * 32Core128GBNEW
   */
  computeResource?: string;
  /**
   * @remarks
   * The cluster edition. Valid values:
   * 
   * - **Cluster**: reserved cluster.
   * 
   * <props="china">
   * 
   * > Reserved clusters are available only in the Chinese mainland and Singapore regions. In the Singapore region, you can purchase reserved clusters only with the pay-as-you-go billing method.
   * 
   * 
   * 
   * - **MixedStorage**: elastic cluster (new).
   * 
   * > If you set `DBClusterCategory` to `Cluster`, you must set the `Mode` parameter to `Reserved`. If you set `DBClusterCategory` to `MixedStorage`, you must set the `Mode` parameter to `Flexible`. Otherwise, cluster creation will fail.
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The cluster specification. Valid values:
   * 
   * - **C8**
   * 
   * - **C32**
   * 
   * > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
   * 
   * @example
   * C8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * - The description cannot start with `http://` or `https://`.
   * 
   * - The description must be 2 to 256 characters long.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Set the value to **VPC**.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL cluster. Set the value to **3.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The number of node groups. The value must be an integer from 1 to 200.
   * 
   * > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
   * 
   * @example
   * 2
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The node storage capacity. Unit: GB. The valid values vary based on the cluster specification:
   * 
   * - For the `C8` specification, the value ranges from 100 to 1,000.
   * 
   * - For the `C32` specification, the value ranges from 100 to 8,000.
   * 
   * > * This parameter is required when `Mode` is set to `Reserved` (reserved mode).
   * >
   * > * The value must be a multiple of 100 for storage sizes under 1,000 GB, and a multiple of 1,000 for storage sizes of 1,000 GB or more.
   * 
   * @example
   * 200
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption. Valid values:
   * 
   * - `true`: enables disk encryption.
   * 
   * - `false`: disables disk encryption.
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The number of Elastic IO Units (EIUs). For more information, see [EIU details](https://help.aliyun.com/document_detail/189505.html).
   * 
   * @example
   * 0
   */
  elasticIOResource?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * - **true**: enables SSL encryption.
   * 
   * - **false**: disables SSL encryption.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  executorCount?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used for disk encryption. This parameter is valid only when `DiskEncryption` is set to `true`.
   * 
   * @example
   * xxxxxxxx-xxxx-xxxx-xxxx-xxxx
   */
  kmsId?: string;
  /**
   * @remarks
   * The cluster mode. Valid values:
   * 
   * - **Reserved**: reserved mode.
   * 
   * - **Flexible**: flexible mode.
   * 
   * @example
   * Reserver
   */
  mode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period unit. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * > This parameter is required when `PayType` is set to `Prepaid` (subscription).
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the IDs of available regions.
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
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  restoreTime?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  restoreType?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  storageResource?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * 无
   */
  storageType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateDBClusterRequestTag[];
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If `Period` is set to `Year`, the value can be 1, 2, 3, or 5.
   * 
   * - If `Period` is set to `Month`, the value can be an integer from 1 to 11.
   * 
   * > * This parameter is required when `PayType` is set to `Prepaid` (subscription).
   * >
   * > * The longer the subscription duration, the greater the savings. For example, a one-year subscription is more cost-effective than a 10- or 11-month subscription.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The Virtual Private Cloud (VPC) ID.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The availability zone ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the IDs of available availability zones.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetID: 'BackupSetID',
      clientToken: 'ClientToken',
      computeResource: 'ComputeResource',
      DBClusterCategory: 'DBClusterCategory',
      DBClusterClass: 'DBClusterClass',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      DBNodeGroupCount: 'DBNodeGroupCount',
      DBNodeStorage: 'DBNodeStorage',
      diskEncryption: 'DiskEncryption',
      elasticIOResource: 'ElasticIOResource',
      enableSSL: 'EnableSSL',
      executorCount: 'ExecutorCount',
      kmsId: 'KmsId',
      mode: 'Mode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      sourceDBInstanceName: 'SourceDBInstanceName',
      storageResource: 'StorageResource',
      storageType: 'StorageType',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetID: 'string',
      clientToken: 'string',
      computeResource: 'string',
      DBClusterCategory: 'string',
      DBClusterClass: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      DBNodeGroupCount: 'string',
      DBNodeStorage: 'string',
      diskEncryption: 'boolean',
      elasticIOResource: 'string',
      enableSSL: 'boolean',
      executorCount: 'string',
      kmsId: 'string',
      mode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      sourceDBInstanceName: 'string',
      storageResource: 'string',
      storageType: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBClusterRequestTag },
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

