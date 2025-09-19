// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupSnapshotRequestBackupSnapshotList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * >  You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-000a4h33w14ka8xagb2s
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6cj8vyajp1fo4atxkae
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which Security Center is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: China (Hangzhou).
   * *   **ap-southeast-1**: Singapore.
   * *   **cn-beijing**: China (Beijing).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot that you want to delete.
   * 
   * >  You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-000f9p6r5trm6u4dc1iq
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **ECS_FILE**: Elastic Compute Service (ECS) files.
   * *   **OSS**: Object Storage Service (OSS) buckets.
   * *   **NAS**: File Storage NAS (NAS) file systems.
   * *   **OTS_TABLE**: Tablestore instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the backup vault that is used in the restoration task.
   * 
   * >  You can call the [DescribeSnapshots](~~DescribeSnapshots~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0004vhwcs2pmacfzrzt5
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
   * The regions for backup.
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
   * 
   * *   **true**
   * *   **false**
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

