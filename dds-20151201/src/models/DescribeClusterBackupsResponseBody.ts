// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The node specifications.
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
   * The storage space of the node. Unit: MB.
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
   * The public endpoint used to download the backup file. If the backup file cannot be downloaded, an empty string is returned.
   * 
   * @example
   * http://oss.com/xxx
   */
  backupDownloadURL?: string;
  /**
   * @remarks
   * The end time of the backup. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 738025367
   */
  backupId?: string;
  /**
   * @remarks
   * The internal endpoint used to download the backup file. If the backup file cannot be downloaded, a null value is returned.
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
   * The start time of the backup. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup status. Valid values:
   * - **Success**: The backup is successful.
   * - **Failed**: The backup fails.
   * 
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @remarks
   * The information about the instance node associated with the backup.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsBackupsExtraInfo;
  /**
   * @remarks
   * The name of the MongoDB shard.
   * 
   * @example
   * d-bp16cb162771****
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates whether the backup set is available. Valid values:
   * * **0**: unavailable.
   * * **1**: available.
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
   * Indicates whether the backup set is migrated from a historical backup set. A value of **1** indicates that the backup set is migrated from a historical backup set.
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
   * - **Init**: The attached log backup is being initialized.
   * - **No_Need**: No attached log backup is required.
   * - **Running**: The attached log backup is in progress.
   * - **Ready**: The attached log backup is complete.
   * - **Failed**: The attached log backup fails.
   * 
   * > When the **ClusterBackupStatus** parameter is set to OK, it only indicates that the full backup phase is successful. For cluster instances with log backup enabled, the attached log backup must be complete to perform point-in-time recovery or achieve consistent recovery.
   * 
   * @example
   * Ready
   */
  attachLogStatus?: string;
  /**
   * @remarks
   * The expire time of the backup. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * 
   * >Notice: A value of "9999-01-01T00:00:00Z" indicates long-term retention (LTR).</notice>
   * 
   * @example
   * 2025-03-29T03:47:12Z
   */
  backupExpireTime?: string;
  /**
   * @remarks
   * The backup sets of child nodes in a single cluster backup set.
   */
  backups?: DescribeClusterBackupsResponseBodyClusterBackupsBackups[];
  /**
   * @remarks
   * The end time of the cluster backup. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  clusterBackupEndTime?: string;
  /**
   * @remarks
   * The cluster backup set ID.
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
   * The start time of the cluster backup. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The instance version at the time of backup. Valid values:
   * 
   * - **7.0**
   * - **6.0**
   * - **5.0**
   * - **4.4**
   * - **4.2**
   * - **4.0**
   * - **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The supplementary information in JSON format.
   */
  extraInfo?: DescribeClusterBackupsResponseBodyClusterBackupsExtraInfo;
  /**
   * @remarks
   * Indicates whether the cluster backup set is valid. Valid values:
   * - **1**: The cluster backup set is valid.
   * - **0**: The backup sets of the child nodes are incomplete or failed.
   * 
   * @example
   * 1
   */
  isAvail?: number;
  /**
   * @remarks
   * The backup progress. Unit: %.
   * The progress is displayed only for running backups.
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
   * The cluster backup sets. A cluster backup set contains the backup sets of all nodes.
   */
  clusterBackups?: DescribeClusterBackupsResponseBodyClusterBackups[];
  /**
   * @remarks
   * The maximum number of entries returned for the request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page.
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

