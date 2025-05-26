// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDBClusterRequestTag } from "./CreateDbclusterRequestTag";


export class CreateDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set that you want to use to restore data.
   * 
   * >  You can call the [DescribeBackups](https://help.aliyun.com/document_detail/612318.html) operation to query the backup sets of the cluster.
   * 
   * @example
   * 1880808684
   */
  backupSetId?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * 
   * >  This parameter must be specified for cloning clusters across regions.
   * 
   * @example
   * cn-beijing
   */
  cloneSourceRegionId?: string;
  /**
   * @remarks
   * The amount of reserved computing resources. Valid values: 0ACU to 4096ACU. The value must be in increments of 16ACU. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Set the value to **VPC**.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The version of the cluster. Set the value to **5.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  diskEncryption?: boolean;
  /**
   * @remarks
   * Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  /**
   * @remarks
   * The ID of the key that is used to encrypt disk data.
   * 
   * >  This parameter must be specified only when disk encryption is enabled.
   * 
   * @example
   * e1935511-cf88-1123-a0f8-1be8d251****
   */
  kmsId?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
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
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * >  This parameter must be specified when PayType is set to Prepaid.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The product form of the cluster. Valid values:
   * 
   * *   **IntegrationForm**: integrated.
   * *   **LegacyForm**: Data Lakehouse Edition.
   * 
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BasicVersion**: Basic Edition.
   * *   **EnterpriseVersion**: Enterprise Edition.
   * 
   * >  This parameter must be specified only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
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
   * The number of reserved resource nodes.
   * 
   * *   For Enterprise Edition, the default value is 3 and the step size is 3.
   * *   For Basic Edition, the default value is 1.
   * 
   * >  This parameter must be specified only when ProductForm is set to IntegrationForm.
   * 
   * @example
   * 3
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * The specifications of reserved resource nodes. Unit: ACUs.
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
   * The method that you want to use to restore data. Valid values:
   * 
   * *   **backup**: restores data from a backup set. You must also specify the **BackupSetId** and **SourceDBClusterId** parameters.
   * *   **timepoint**: restores data to a point in time. You must also specify the **RestoreToTime** and **SourceDBClusterId** parameters.
   * 
   * @example
   * backup
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of the secondary vSwitch.
   * 
   * >  You cannot set this parameter to a value that is the same as that of the VSwitchId parameter.
   * 
   * @example
   * vsw-bp1aadw9k19x451gx****
   */
  secondaryVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * >  You cannot set this parameter to a value that is the same as that of the ZoneId parameter.
   * 
   * @example
   * cn-beijing-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  sourceDbClusterId?: string;
  /**
   * @remarks
   * The amount of reserved storage resources. Valid values: 0ACU to 2064ACU. The value must be in increments of 24ACU. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
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
   * This parameter is required.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      cloneSourceRegionId: 'CloneSourceRegionId',
      computeResource: 'ComputeResource',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      diskEncryption: 'DiskEncryption',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
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
      backupSetId: 'string',
      cloneSourceRegionId: 'string',
      computeResource: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      diskEncryption: 'boolean',
      enableDefaultResourcePool: 'boolean',
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

