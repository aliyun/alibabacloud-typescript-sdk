// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadRequest extends $dara.Model {
  adminDatabase?: string;
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to query the ID of the backup set.
   * 
   * > This parameter is required if the BakSetType parameter is set to full.
   * 
   * @example
   * 146005****
   */
  bakSetId?: string;
  /**
   * @remarks
   * The size of the full backup set. Unit: bytes. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to query the size of the full backup set.
   * 
   * @example
   * 216****
   */
  bakSetSize?: string;
  /**
   * @remarks
   * The type of the download task. Valid values:
   * 
   * *   **full**: downloads a full backup set.
   * *   **pitr**: downloads a backup set at a specific point in time.
   * 
   * @example
   * full
   */
  bakSetType?: string;
  clusterName?: string;
  /**
   * @remarks
   * The point in time at which the backup set is downloaded. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > This parameter is required if the BakSetType parameter is set to pitr.
   * 
   * @example
   * 1661331864000
   */
  downloadPointInTime?: string;
  /**
   * @remarks
   * The format to which the downloaded backup set is converted. Valid values:
   * 
   * *   **CSV**
   * *   **SQL**
   * *   **Parquet**
   * 
   * > This parameter is required.
   * 
   * @example
   * CSV
   */
  formatType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-wz994c1t1****
   */
  instanceName?: string;
  isCluster?: string;
  isPhysical?: boolean;
  primaryKeyTypeOnly?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionCode?: string;
  /**
   * @remarks
   * The name of the OSS bucket that is used to store the backup set.
   * 
   * *   This parameter is required if the TargetType parameter is set to OSS.
   * *   Make sure that your account is granted the **AliyunDBSDefaultRole** permission. For more information, see [Use RAM for resource authorization](https://help.aliyun.com/document_detail/26307.html). You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
   * 
   * @example
   * test123
   */
  targetBucket?: string;
  /**
   * @remarks
   * The region in which the OSS bucket resides.
   * 
   * > This parameter is required if the TargetType parameter is set to OSS.
   * 
   * @example
   * cn-beijing
   */
  targetOssRegion?: string;
  /**
   * @remarks
   * The destination path to which the backup set is downloaded.
   * 
   * > This parameter is required if the TargetType parameter is set to OSS.
   * 
   * @example
   * test_db/path
   */
  targetPath?: string;
  /**
   * @remarks
   * The type of the destination to which the backup set is downloaded. Valid values:
   * 
   * *   **OSS**
   * *   **URL**
   * 
   * @example
   * OSS
   */
  targetType?: string;
  useZstd?: string;
  static names(): { [key: string]: string } {
    return {
      adminDatabase: 'AdminDatabase',
      bakSetId: 'BakSetId',
      bakSetSize: 'BakSetSize',
      bakSetType: 'BakSetType',
      clusterName: 'ClusterName',
      downloadPointInTime: 'DownloadPointInTime',
      formatType: 'FormatType',
      instanceName: 'InstanceName',
      isCluster: 'IsCluster',
      isPhysical: 'IsPhysical',
      primaryKeyTypeOnly: 'PrimaryKeyTypeOnly',
      regionCode: 'RegionCode',
      targetBucket: 'TargetBucket',
      targetOssRegion: 'TargetOssRegion',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      useZstd: 'UseZstd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminDatabase: 'string',
      bakSetId: 'string',
      bakSetSize: 'string',
      bakSetType: 'string',
      clusterName: 'string',
      downloadPointInTime: 'string',
      formatType: 'string',
      instanceName: 'string',
      isCluster: 'string',
      isPhysical: 'boolean',
      primaryKeyTypeOnly: 'string',
      regionCode: 'string',
      targetBucket: 'string',
      targetOssRegion: 'string',
      targetPath: 'string',
      targetType: 'string',
      useZstd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

