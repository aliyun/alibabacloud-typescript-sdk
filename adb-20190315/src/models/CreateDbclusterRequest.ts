// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the cluster. You can use tags to filter clusters. Valid values of N: 1 to 20. The values that you specify for N must be unique and consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * >  The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the cluster. You can use tags to filter clusters. Valid values of N: 1 to 20. The values that you specify for N must be unique and consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * >  The tag value can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
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
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  backupSetID?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The value is case-sensitive and can contain a maximum of 64 ASCII characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-t7241****
   */
  clientToken?: string;
  /**
   * @remarks
   * The computing resources of the cluster. You can use computing resources to compute data. The increase in the computing resources can accelerate data queries. The computing resources are available for Cluster Edition and Basic Edition.
   * 
   * *   Computing resources for Cluster Edition include 16 cores and 64 GB memory, 24 cores and 96 GB memory, and 32 cores or more. Cluster Edition supports resource isolation, scheduled scaling, and tiered storage of hot and cold data.
   * *   Computing resources for Basic Edition include 8 cores and 32 GB memory and 16 cores and 64 GB memory. Alibaba Cloud does not provide an SLA guarantee for Basic Edition, and 4 to 8 hours are required for a failover. We recommend that you do not use Basic Edition in production environments.
   * 
   * > 
   * 
   * *   You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/190632.html) operation to query the available computing resources in a region.
   * 
   * *   This parameter must be specified when Mode is set to **Flexible**.
   * 
   * @example
   * 32Core128GB
   */
  computeResource?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Cluster**: reserved mode for Cluster Edition
   * 
   * <!---->
   * 
   * *   **MixedStorage**: elastic mode for Cluster Edition
   * 
   * >  If the DBClusterCategory parameter is set to Cluster, you must set the Mode parameter to Reserver. If the DBClusterCategory parameter is set to MixedStorage, you must set the Mode parameter to Flexible. Otherwise, the cluster fails to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * Cluster
   */
  DBClusterCategory?: string;
  /**
   * @remarks
   * The specification of the cluster. Valid values:
   * 
   * *   **C8**
   * *   **C32**
   * 
   * >  This parameter is required if the Mode parameter is set to Reserver.
   * 
   * @example
   * C8
   */
  DBClusterClass?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https`.
   * *   The description must be 2 to 256 characters in length.
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
   * The version of the cluster. Set the value to **3.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The number of node groups. Valid values: 1 to 200 (integer).
   * 
   * >  This parameter is required if the Mode parameter is set to Reserver.
   * 
   * @example
   * 2
   */
  DBNodeGroupCount?: string;
  /**
   * @remarks
   * The storage capacity of the cluster. Unit: GB.
   * 
   * *   Valid values when DBClusterClass is set to C8: 100 to 1000
   * *   Valid values when DBClusterClass is set to C32: 100 to 8000
   * 
   * > * This parameter is required if the Mode parameter is set to Reserver.
   * > * 1000 The storage capacity less than 1,000 GB increases in 100 GB increments. The storage capacity greater than 1,000 GB increases in 1,000 GB increments.
   * 
   * @example
   * 200
   */
  DBNodeStorage?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * The number of elastic I/O units (EIUs). For more information, see [Elasticity of the storage layer](https://help.aliyun.com/document_detail/189505.html).
   * 
   * @example
   * 0
   */
  elasticIOResource?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  executorCount?: string;
  /**
   * @remarks
   * The Key Management Service (KMS) ID that is used for disk encryption. This parameter takes effect only when DiskEncryption is set to true.
   * 
   * @example
   * xxxxxxxx-xxxx-xxxx-xxxx-xxxx
   */
  kmsId?: string;
  /**
   * @remarks
   * The mode of the cluster. Valid values:
   * 
   * *   **Reserver**: the reserved mode.
   * *   **Flexible**: the elastic mode.
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
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis
   * *   **Month**: subscription on a monthly basis
   * 
   * >  This parameter is required if the PayType parameter is set to Prepaid.
   * 
   * @example
   * Year
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the cluster belongs.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  restoreTime?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  restoreType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  storageResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  storageType?: string;
  /**
   * @remarks
   * The tags to add to the cluster.
   */
  tag?: CreateDBClusterRequestTag[];
  /**
   * @remarks
   * The subscription period of the subscription cluster.
   * 
   * *   Valid values when Period is set to Year: 1, 2, and 3 (integer)
   * *   Valid values when Period is set to Month: 1 to 9 (integer)
   * 
   * > * This parameter is required if the PayType parameter is set to Prepaid.
   * > * Longer subscription periods offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent zone list.
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

