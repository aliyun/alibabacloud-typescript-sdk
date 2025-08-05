// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the role created in the RAM of the original account for cross-account backup managed by the current account.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Cross-account backup type. Supported values:
   * - SELF_ACCOUNT: Backup within the same account
   * - CROSS_ACCOUNT: Cross-account backup
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The original account ID managed by the current account for cross-account backup.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The path not to be restored. All documents under this path will not be restored. Maximum length is 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * Details of restoring to the local environment.
   */
  failbackDetailShrink?: string;
  /**
   * @remarks
   * The path to be restored. All documents under this path will be restored. Maximum length is 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Indicates whether it is called by the container service. Default is false.
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * Parameters for the restore job.
   * 
   * @example
   * {\\"includes\\":[],\\"excludes\\":[],\\"conflictPolicy\\":\\"OVERWRITE_EXISTING\\"}
   */
  options?: string;
  /**
   * @remarks
   * Details of the Table Store instance.
   */
  otsDetailShrink?: string;
  /**
   * @remarks
   * The type of the restore destination data source. Possible values:
   *   - **ECS_FILE**: Restore to ECS file.
   *   - **OSS**: Restore to Alibaba Cloud OSS.
   *   - **NAS**: Restore to Alibaba Cloud NAS.
   *   - **OTS_TABLE**: Restore to Alibaba Cloud OTS.
   *   - **UDM_ECS_ROLLBACK**: Restore to Alibaba Cloud ECS whole machine.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The HASH value of the backup snapshot.
   * 
   * @example
   * f2fe...
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The ID of the backup snapshot.
   * 
   * @example
   * s-********************
   */
  snapshotId?: string;
  /**
   * @remarks
   * The type of the data source. Possible values:
   *   - **ECS_FILE**: Restore ECS file.
   *   - **OSS**: Restore Alibaba Cloud OSS.
   *   - **NAS**: Restore Alibaba Cloud NAS.
   *   - **OTS_TABLE**: Restore to Alibaba Cloud OTS.
   *   - **UDM_ECS**: Restore to Alibaba Cloud ECS whole machine.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **OSS**. Indicates the name of the OSS bucket at the restore destination.
   * 
   * @example
   * hbr-backup-oss
   */
  targetBucket?: string;
  /**
   * @remarks
   * Details of the target container.
   * 
   * @example
   * {\\"host\\":\\"k8s-node1\\",\\"hostPrefix\\":\\"/var/lib/kubelet/pods/4acb31fe-8577-40ff-bc8c-eccabd835f73/volumes/kubernetes.io~csi/pvc-b050b00e-ef17-4792-aab1-1642355cf1f4/mount\\",\\"pvPath\\":\\"/\\"}
   */
  targetContainer?: string;
  /**
   * @remarks
   * The ID of the target container cluster.
   * 
   * @example
   * cc-000amjsc7o1h9506oob7
   */
  targetContainerClusterId?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **NAS**. Indicates the creation time of the file system at the restore destination.
   * 
   * @example
   * 1554347313
   */
  targetCreateTime?: number;
  /**
   * @remarks
   * Valid only when **RestoreType** is **NAS**. Indicates the ID of the file system at the restore destination.
   * 
   * @example
   * 005494
   */
  targetFileSystemId?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **ECS_FILE**. Indicates the ECS instance ID at the restore destination.
   * 
   * @example
   * i-*********************
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the target Table Store instance.
   * 
   * @example
   * instancename
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **ECS_FILE**. Indicates the file path at the restore destination.
   * 
   * @example
   * C:\\
   */
  targetPath?: string;
  /**
   * @remarks
   * Valid only when **RestoreType** is **OSS**. Indicates the object prefix at the restore destination.
   * 
   * @example
   * hbr
   */
  targetPrefix?: string;
  /**
   * @remarks
   * The name of the data table in the target Table Store.
   * 
   * @example
   * tablename
   */
  targetTableName?: string;
  /**
   * @remarks
   * The time of the Table Store to be restored. UNIX timestamp, in seconds.
   * 
   * @example
   * 1642496881
   */
  targetTime?: number;
  /**
   * @remarks
   * The parameter is valid only when the SourceType is set to UDM_ECS. It represents the details of the entire machine backup and is a JSON string. Depending on the value of RestoreType, different details must be passed as follows:
   * - **UDM_ECS_DISK**: ECS disk cloning.
   *   - **targetInstanceId**: string (required). Specifies the target ECS instance ID to which the cloned disk will be attached.
   *   - **diskCategory**: string (required). Specifies the type of the target disk.
   *   - **diskPerformanceLevel**: string. When diskCategory is "essd", this indicates the disk performance level, supporting PL0, PL1, PL2, and PL3, with PL1 as the default.
   * - **UDM_ECS_DISK_ROLLBACK**: ECS disk rollback.
   *   - **sourceInstanceId**: string (required). Specifies the source ECS instance ID.
   *   - **forceRestore**: bool (default: false). Indicates whether to force restore. NOTE: If forceRestore is set to true, the disk restoration will proceed even if the backup disk has been unmounted from the original ECS instance or mounted to another instance. Exercise caution when using this option.
   *   - **bootAfterRestore**: bool (default: false). Indicates whether to start the ECS instance after restoration.
   * - **UDM_ECS**: Full ECS cloning.
   *   - **bootAfterRestore**: bool (default: false). Indicates whether to start the ECS instance after restoration.
   *   - **diskCategory**: string (required). Specifies the type of the target disk.
   *   - **diskPerformanceLevel**: string. When diskCategory is "essd", this indicates the disk performance level (PL0/PL1/PL2/PL3), defaulting to PL1.
   *   - **instanceType**: string (required). Specifies the specification of the target ECS instance.
   *   - **restoredNetwork**: string (required). Specifies the vSwitch ID for the target ECS instance.
   *   - **securityGroup**: string (required). Specifies the security group ID for the target ECS instance.
   *   - **restoredName:** string (required). Specifies the instance name of the target ECS instance.
   *   - **restoredHostName**: string (required). Specifies the host name of the target ECS instance.
   *   - **allocatePublicIp**: bool (default: false). Indicates whether to assign a public IP to the target ECS instance.
   *   - **privateIpAddress**: string. Specifies the internal IP address of the target ECS instance. If not specified, an IP will be assigned via DHCP.
   * - **UDM_ECS_ROLLBACK**: Full ECS rollback.
   *   - **sourceInstanceId**: string (required). Specifies the source ECS instance ID.
   *   - **forceRestore**: bool (default: false). Indicates whether to force restore. NOTE: If forceRestore is set to true, the disk restoration will proceed even if the backup disk has been unmounted from the original ECS instance or mounted to another instance. Exercise caution when using this option.
   *   - **bootAfterRestore**: bool (default: false). Indicates whether to start the ECS instance after restoration.
   * 
   * @example
   * {\\"sourceInstanceId\\":\\"i-uf62te6pm3iwsyxyz66q\\",\\"bootAfterRestore\\":false}
   */
  udmDetailShrink?: string;
  /**
   * @remarks
   * Valid only when **SourceType** is **UDM_ECS**. Indicates the target region for the restore.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * The ID of the backup vault that the snapshot belongs to.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      exclude: 'Exclude',
      failbackDetailShrink: 'FailbackDetail',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      options: 'Options',
      otsDetailShrink: 'OtsDetail',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      sourceType: 'SourceType',
      targetBucket: 'TargetBucket',
      targetContainer: 'TargetContainer',
      targetContainerClusterId: 'TargetContainerClusterId',
      targetCreateTime: 'TargetCreateTime',
      targetFileSystemId: 'TargetFileSystemId',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      targetPath: 'TargetPath',
      targetPrefix: 'TargetPrefix',
      targetTableName: 'TargetTableName',
      targetTime: 'TargetTime',
      udmDetailShrink: 'UdmDetail',
      udmRegionId: 'UdmRegionId',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      exclude: 'string',
      failbackDetailShrink: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      options: 'string',
      otsDetailShrink: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      sourceType: 'string',
      targetBucket: 'string',
      targetContainer: 'string',
      targetContainerClusterId: 'string',
      targetCreateTime: 'number',
      targetFileSystemId: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      targetPath: 'string',
      targetPrefix: 'string',
      targetTableName: 'string',
      targetTime: 'number',
      udmDetailShrink: 'string',
      udmRegionId: 'string',
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

