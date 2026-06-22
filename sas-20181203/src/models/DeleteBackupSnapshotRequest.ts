// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupSnapshotRequestBackupSnapshotList extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup client.
   * 
   * > You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * c-000a4h33w14ka8xa****
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the server instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6cj8vyajp1fo4at****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the Security Center instance. Valid values:
   * 
   * - **cn-hangzhou**: China (Hangzhou).
   * - **ap-southeast-1**: Singapore.
   * - **cn-beijing**: China (Beijing).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot to delete.
   * >You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * s-000f9p6r5trm6u4d****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * - **ECS_FILE**: backup snapshot of ECS files.
   * - **OSS**: backup snapshot of Alibaba Cloud OSS.
   * - **NAS**: backup snapshot of Alibaba Cloud NAS.
   * - **OTS_TABLE**: backup snapshot of Alibaba Cloud Tablestore.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault for the restoration task.
   * >You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0004vhwcs2pmacfz****
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      instanceId: 'string',
      regionId: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The backup regions.
   */
  backupRegionIdList?: string[];
  /**
   * @remarks
   * The backup snapshots.
   */
  backupSnapshotList?: DeleteBackupSnapshotRequestBackupSnapshotList[];
  /**
   * @remarks
   * Specifies whether to retain the latest snapshot. Valid values:
   * - **true**: retains the latest snapshot.
   * - **false**: does not retain the latest snapshot.
   * 
   * @example
   * true
   */
  retainLatestSnapshot?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupRegionIdList: 'BackupRegionIdList',
      backupSnapshotList: 'BackupSnapshotList',
      retainLatestSnapshot: 'RetainLatestSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRegionIdList: { 'type': 'array', 'itemType': 'string' },
      backupSnapshotList: { 'type': 'array', 'itemType': DeleteBackupSnapshotRequestBackupSnapshotList },
      retainLatestSnapshot: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.backupRegionIdList)) {
      $dara.Model.validateArray(this.backupRegionIdList);
    }
    if(Array.isArray(this.backupSnapshotList)) {
      $dara.Model.validateArray(this.backupSnapshotList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

