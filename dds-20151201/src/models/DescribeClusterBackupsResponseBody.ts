// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * mdb.shard.4x.large.d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * d-2ze75ab1fa5d****
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * db
   */
  nodeType?: string;
  /**
   * @remarks
   * The storage space of the node, in MB.
   * 
   * @example
   * 20480
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      nodeId: 'string',
      nodeType: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackupsBackups extends $dara.Model {
  /**
   * @remarks
   * The public URL from which you can download the backup file. If the backup file is unavailable for download, an empty string is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The time when the backup finished. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * 738025367
   */
  backupId?: string;
  /**
   * @remarks
   * The internal URL from which you can download the backup file. If the backup file is unavailable for download, an empty string is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * 12345678.tar.gz
   */
  backupName?: string;
  /**
   * @remarks
   * The size of the backup file, in bytes.
   * 
   * @example
   * 77544597650
   */
  backupSize?: string;
  /**
   * @remarks
   * The time when the backup started. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * 
   * - **Success**: The backup is successful.
   * 
   * - **Failed**: The backup failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The information about the instance node that is associated with the backup.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo;
  /**
   * @remarks
   * The name of the shard in the MongoDB cluster.
   * 
   * @example
   * d-bp16cb162771****
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * - **0**: unavailable.
   * 
   * - **1**: available.
   * 
   * @example
   * 1
   */
  isAvail?: string;
  static names(): { [key: string]: string } {
    return {
      backupDownloadURL: 'BackupDownloadURL',
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupIntranetDownloadURL: 'BackupIntranetDownloadURL',
      backupName: 'BackupName',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      extraInfo: 'ExtraInfo',
      instanceName: 'InstanceName',
      isAvail: 'IsAvail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDownloadURL: 'string',
      backupEndTime: 'string',
      backupId: 'string',
      backupIntranetDownloadURL: 'string',
      backupName: 'string',
      backupSize: 'string',
      backupStartTime: 'string',
      backupStatus: 'string',
      extraInfo: DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo,
      instanceName: 'string',
      isAvail: 'string',
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the backup set was migrated from a historical backup. A value of **1** indicates that the backup was migrated.
   * 
   * @example
   * 1
   */
  registryFromHistory?: string;
  static names(): { [key: string]: string } {
    return {
      registryFromHistory: 'RegistryFromHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryFromHistory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBodyClusterBackups extends $dara.Model {
  /**
   * @remarks
   * The status of the attached log backup. Valid values:
   * 
   * - **Init**: initialization.
   * 
   * - **No_Need**: No attached log backup is available.
   * 
   * - **Running**: The attached log backup is in progress.
   * 
   * - **Ready**: The attached log backup is complete.
   * 
   * - **Failed**: The attached log backup failed.
   * 
   * > If the value of the **ClusterBackupStatus** parameter is OK, it only indicates that the full backup was successful. For a cluster instance for which log backup is enabled, the attached log backup must be complete before you can perform a point-in-time restore or ensure data consistency.
   * 
   * @example
   * Ready
   */
  attachLogStatus?: string;
  /**
   * @remarks
   * The time when the backup expires. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format and is displayed in UTC.
   * 
   * >Notice: 
   * 
   * A value of "9999-01-01T00:00:00Z" indicates that the backup is permanently retained.
   * 
   * @example
   * 2025-03-29T03:47:12Z
   */
  backupExpireTime?: string;
  /**
   * @remarks
   * The backup sets of each child node in the cluster backup.
   */
  backups?: DescribeClusterBackupsResponseBodyClusterBackupsBackups[];
  /**
   * @remarks
   * The time when the cluster backup finished.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupEndTime?: string;
  /**
   * @remarks
   * The ID of the cluster backup.
   * 
   * @example
   * cb-o8c2ugnxo26kx***
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The mode of the cluster backup.
   * 
   * @example
   * Automated
   */
  clusterBackupMode?: string;
  /**
   * @remarks
   * The size of the cluster backup set, in bytes.
   * 
   * @example
   * 107374182400
   */
  clusterBackupSize?: string;
  /**
   * @remarks
   * The time when the cluster backup started.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupStartTime?: string;
  /**
   * @remarks
   * The status of the cluster backup.
   * 
   * @example
   * OK
   */
  clusterBackupStatus?: string;
  /**
   * @remarks
   * The database engine version of the instance when the backup was created. Valid values:
   * 
   * - **7.0**
   * 
   * - **6.0**
   * 
   * - **5.0**
   * 
   * - **4.4**
   * 
   * - **4.2**
   * 
   * - **4.0**
   * 
   * - **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The supplementary information. The value is a JSON-formatted string.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo;
  /**
   * @remarks
   * Indicates whether the cluster backup set is valid. Valid values:
   * 
   * - **1**: The cluster backup set is valid.
   * 
   * - **0**: The backup sets of child nodes are not complete or have failed.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The backup progress in percentage.
   * This parameter is returned only for backups that are in progress.
   * 
   * @example
   * 50
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      attachLogStatus: 'AttachLogStatus',
      backupExpireTime: 'BackupExpireTime',
      backups: 'Backups',
      clusterBackupEndTime: 'ClusterBackupEndTime',
      clusterBackupId: 'ClusterBackupId',
      clusterBackupMode: 'ClusterBackupMode',
      clusterBackupSize: 'ClusterBackupSize',
      clusterBackupStartTime: 'ClusterBackupStartTime',
      clusterBackupStatus: 'ClusterBackupStatus',
      engineVersion: 'EngineVersion',
      extraInfo: 'ExtraInfo',
      isAvail: 'IsAvail',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLogStatus: 'string',
      backupExpireTime: 'string',
      backups: { 'type': 'array', 'itemType': DescribeClusterBackupsResponseBodyClusterBackupsBackups },
      clusterBackupEndTime: 'string',
      clusterBackupId: 'string',
      clusterBackupMode: 'string',
      clusterBackupSize: 'string',
      clusterBackupStartTime: 'string',
      clusterBackupStatus: 'string',
      engineVersion: 'string',
      extraInfo: DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo,
      isAvail: 'number',
      progress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backups)) {
      $dara.Model.validateArray(this.backups);
    }
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the cluster backup sets. A cluster backup contains the backup sets of all nodes.
   */
  clusterBackups?: DescribeClusterBackupsResponseBodyClusterBackups[];
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F42BB4E-461F-5B55-A37C-53B1141C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterBackups: 'ClusterBackups',
      maxResults: 'MaxResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterBackups: { 'type': 'array', 'itemType': DescribeClusterBackupsResponseBodyClusterBackups },
      maxResults: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterBackups)) {
      $dara.Model.validateArray(this.clusterBackups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

