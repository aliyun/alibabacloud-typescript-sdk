// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can use tags to filter the cluster list. You can specify up to 20 tag pairs. The value of N for each tag pair must be unique and must be a consecutive integer that starts from 1. The value of `Tag.N.Key` corresponds to the value of `Tag.N.Value`.
   * 
   * > The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can use tags to filter the cluster list. You can specify up to 20 tag pairs. The value of N for each tag pair must be unique and must be a consecutive integer that starts from 1. The value of `Tag.N.Key` corresponds to the value of `Tag.N.Value`.
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
   * @example
   * 1
   */
  AINodeNumber?: number;
  /**
   * @example
   * ADB.MLPlus.4
   */
  AINodeSpec?: string;
  /**
   * @remarks
   * The ID of the backup set used for restoration from a backup set.
   * 
   * > You can call the [DescribeBackups](https://help.aliyun.com/document_detail/612318.html) operation to query the backup list of the cluster.
   * 
   * @example
   * 1880808684
   */
  backupSetId?: string;
  /**
   * @remarks
   * The region of the source cluster.
   * > This parameter is required for cross-region cloning.
   * 
   * @example
   * cn-beijing
   */
  cloneSourceRegionId?: string;
  /**
   * @remarks
   * The compute reserved resources. Valid values: 0 ACU to 4096 ACU, in increments of 16. 1 ACU is approximately equivalent to 1 core and 4 GB of memory.
   * > Include the unit when specifying this parameter.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The description of the cluster.
   * - The description cannot start with `http://` or `https://`.
   * - The description must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Only **VPC** (Virtual Private Cloud) is supported.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The version of the Data Lakehouse Edition cluster. Valid values: **5.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable cloud disk encryption.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * Specifies whether to allocate all compute reserved resources to the default resource group (user_default). Valid values:
   * - **true** (default): All compute reserved resources are allocated to the default resource group.
   * - **false**: Not all compute reserved resources are allocated to the default resource group.
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  /**
   * @remarks
   * Specifies whether to enable SSL encryption. Valid values:
   * 
   * - **true**: SSL encryption is enabled.
   * - **false**: SSL encryption is disabled.
   * 
   * @example
   * false
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * The ID of the key used to encrypt cloud disk data.
   * > This parameter is used only when cloud disk encryption is enabled for the AnalyticDB for MySQL cluster.
   * 
   * @example
   * e1935511-cf88-1123-a0f8-1be8d251****
   */
  kmsId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * - **Year**: subscription on a yearly basis.
   * - **Month**: subscription on a monthly basis.
   * 
   * > This parameter is required when PayType is set to Prepaid.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The product form. Valid values:
   * - **IntegrationForm**: integrated form.
   * - **LegacyForm**: Data Lakehouse Edition.
   * 
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The product version. Valid values:
   * - **BasicVersion**: Basic Edition.
   * - **EnterpriseVersion**: Enterprise Edition.
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID of a specific Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of reserved nodes. 
   * - Enterprise Edition uses 3 nodes by default, in increments of 3.
   * - Basic Edition uses 1 node by default.
   * > This parameter is required only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 3
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * The node specifications of reserved nodes, in ACUs.
   * 
   * @example
   * 8ACU
   */
  reservedNodeSize?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The point in time to which you want to restore data from the backup set.
   * 
   * @example
   * 2023-09-20T03:13:56Z
   */
  restoreToTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * * **backup**: restores data from a backup set. You must also specify the **BackupSetId** and **SourceDBClusterId** parameters.
   * * **timepoint**: restores data to a specific point in time. You must also specify the **RestoreToTime** and **SourceDBClusterId** parameters.
   * 
   * @example
   * backup
   */
  restoreType?: string;
  /**
   * @remarks
   * The secondary vSwitch ID.
   * > The value of this parameter must be different from the value of the VSwitchId parameter.
   * 
   * @example
   * vsw-bp1aadw9k19x451gx****
   */
  secondaryVSwitchId?: string;
  /**
   * @remarks
   * The secondary zone ID.
   * > The value of this parameter must be different from the value of the ZoneId parameter.
   * 
   * @example
   * cn-beijing-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The instance ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If this parameter is specified, the Data Lakehouse Edition cluster is used to recover from the Data Warehouse Edition cluster.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  sourceDbClusterId?: string;
  /**
   * @remarks
   * The storage reserved resources. Valid values: 0 ACU to 2064 ACU, in increments of 24. 1 ACU is approximately equivalent to 1 core and 4 GB of memory.
   * > Include the unit when specifying this parameter.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateDBClusterRequestTag[];
  /**
   * @remarks
   * The subscription duration of the subscription cluster. Valid values:
   * - When **Period** is set to Year, the value of UsedTime ranges from 1 to 3 (integer).
   * - When **Period** is set to Month, the value of UsedTime ranges from 1 to 9 (integer).
   * 
   * > This parameter is required when PayType is set to **Prepaid**.
   * 
   * @example
   * 3
   */
  usedTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the zone ID of a specific Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      AINodeNumber: 'AINodeNumber',
      AINodeSpec: 'AINodeSpec',
      backupSetId: 'BackupSetId',
      cloneSourceRegionId: 'CloneSourceRegionId',
      computeResource: 'ComputeResource',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      diskEncryption: 'DiskEncryption',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
      enableSSL: 'EnableSSL',
      kmsId: 'KmsId',
      payType: 'PayType',
      period: 'Period',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceGroupId: 'ResourceGroupId',
      restoreToTime: 'RestoreToTime',
      restoreType: 'RestoreType',
      secondaryVSwitchId: 'SecondaryVSwitchId',
      secondaryZoneId: 'SecondaryZoneId',
      sourceDbClusterId: 'SourceDbClusterId',
      storageResource: 'StorageResource',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeNumber: 'number',
      AINodeSpec: 'string',
      backupSetId: 'string',
      cloneSourceRegionId: 'string',
      computeResource: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      diskEncryption: 'boolean',
      enableDefaultResourcePool: 'boolean',
      enableSSL: 'boolean',
      kmsId: 'string',
      payType: 'string',
      period: 'string',
      productForm: 'string',
      productVersion: 'string',
      regionId: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceGroupId: 'string',
      restoreToTime: 'string',
      restoreType: 'string',
      secondaryVSwitchId: 'string',
      secondaryZoneId: 'string',
      sourceDbClusterId: 'string',
      storageResource: 'string',
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

