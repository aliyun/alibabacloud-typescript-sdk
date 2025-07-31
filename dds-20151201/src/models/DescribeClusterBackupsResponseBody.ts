// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The instance type of the node.
   * 
   * @example
   * mdb.shard.4x.large.d
   */
  instanceClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * d-2ze75ab1fa5d****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * db
   */
  nodeType?: string;
  /**
   * @remarks
   * The storage capacity of the node. Unit: MB.
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
   * The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 738025367
   */
  backupId?: string;
  /**
   * @remarks
   * The URL that is used to download the backup set over an internal network. If the backup set cannot be downloaded, null is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupIntranetDownloadURL?: string;
  /**
   * @remarks
   * The backup name.
   * 
   * @example
   * 12345678.tar.gz
   */
  backupName?: string;
  /**
   * @remarks
   * The size of the backup file. Unit: bytes.
   * 
   * @example
   * 77544597650
   */
  backupSize?: string;
  /**
   * @remarks
   * The start time of the backup. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The status of the backup task. Valid values:
   * 
   * *   **Success**: The backup task is successful.
   * *   **Failed**: The backup task failed.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The information of the node associated with the backup.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo;
  /**
   * @remarks
   * The shard name.
   * 
   * @example
   * d-bp16cb162771****
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
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
   * Indicates whether the cluster backups are migrated from the historical backup sets. If the value of this parameter is **1**, the cluster backups are migrated from the historical backup sets.
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
   * The backup status. Valid values:
   * 
   * *   **init**: The backup is being initialized.
   * *   **No_Need**: Log backup is not performed.
   * *   **Running**: Log backup is being performed.
   * *   **Ready**: Log backup is complete.
   * *   **Failed**: Log backup failed.
   * 
   * >  If the **ClusterBackupStatus** parameter is set to OK, full backup is successful. If you want to perform point-in-time-restoration on an instance for which log backup is enabled or to implement consistency restoration, make sure that log backup is complete.
   * 
   * @example
   * Ready
   */
  attachLogStatus?: string;
  backupExpireTime?: string;
  /**
   * @remarks
   * The collection of the backup sets of each child node in a cluster backup set.
   */
  backups?: DescribeClusterBackupsResponseBodyClusterBackupsBackups[];
  /**
   * @remarks
   * The end of the time range within which the cluster backup is performed.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupEndTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * cb-o8c2ugnxo26kx***
   */
  clusterBackupId?: string;
  /**
   * @remarks
   * The cluster backup mode.
   * 
   * @example
   * Automated
   */
  clusterBackupMode?: string;
  /**
   * @remarks
   * The size of the cluster backup set. Unit: bytes.
   * 
   * @example
   * 107374182400
   */
  clusterBackupSize?: string;
  /**
   * @remarks
   * The beginning of the time range within which the cluster backup is performed.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupStartTime?: string;
  /**
   * @remarks
   * The status of the cluster backup set.
   * 
   * @example
   * OK
   */
  clusterBackupStatus?: string;
  /**
   * @remarks
   * Version of the backuped instance.
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The additional information in the JSON format.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo;
  /**
   * @remarks
   * Indicates whether the cluster backup sets take effect. Valid values:
   * 
   * *   **1**: The cluster backup sets take effect.
   * *   **0**: The backup sets of child nodes are incomplete or fail.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The progress of the backup task. Unit: %. The progress is returned only for running backup tasks.
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
   * The cluster backup sets. A cluster backup file contains the backup sets of each node.
   */
  clusterBackups?: DescribeClusterBackupsResponseBodyClusterBackups[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
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

