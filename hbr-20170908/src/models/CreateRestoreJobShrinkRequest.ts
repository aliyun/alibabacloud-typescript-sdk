// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM role created in the source account for cross-account backup managed by the current account.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The cross-account backup type. Valid values: 
   * - SELF_ACCOUNT: backup within the current account.
   * - CROSS_ACCOUNT: cross-account backup.
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source account for cross-account backup managed by the current account.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * The Cloud Backup feature edition. Valid values:
   * - **STANDARD**: Standard Edition. This is the default value.
   * - **BASIC**: Essential Edition. Currently, only ECS File Backup Essential Edition is supported.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The path to exclude from restoration. All files under this path are not restored. Maximum length: 255 characters.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * The details of the restoration to the local host.
   */
  failbackDetailShrink?: string;
  /**
   * @remarks
   * The path to restore. All files under this path are restored. Maximum length: 255 characters.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * Specifies whether the operation is invoked by Container Service. Default value: false.
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * The restore job parameters.
   * 
   * @example
   * {\\"includes\\":[],\\"excludes\\":[],\\"conflictPolicy\\":\\"OVERWRITE_EXISTING\\"}
   */
  options?: string;
  /**
   * @remarks
   * The details of the Tablestore instance.
   */
  otsDetailShrink?: string;
  /**
   * @remarks
   * The data source type of the restore destination. Valid values:
   *   - **ECS_FILE**: restores to an ECS file.
   *   - **OSS**: restores to Alibaba Cloud OSS.
   *   - **NAS**: restores to Alibaba Cloud NAS.
   *   - **COMMON_FILE_SYSTEM**: restores to CPFS.
   *   - **OTS_TABLE**: restores to Alibaba Cloud OTS.
   *   - **UDM_ECS_ROLLBACK**: restores to an Alibaba Cloud ECS instance (full-copy migration).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  restoreType?: string;
  /**
   * @remarks
   * The hash value of the backup snapshot.
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
   * The data source type. Valid values:
   *   - **ECS_FILE**: restores ECS files.
   *   - **OSS**: restores Alibaba Cloud OSS.
   *   - **NAS**: restores Alibaba Cloud NAS.
   *   - **COMMON_FILE_SYSTEM**: restores to CPFS.
   *   - **OTS_TABLE**: restores to Alibaba Cloud OTS.
   *   - **UDM_ECS**: restores to an Alibaba Cloud ECS instance (full-copy migration).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_FILE
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is valid only when **RestoreType** is set to **OSS**. The name of the destination OSS bucket.
   * 
   * @example
   * hbr-backup-oss
   */
  targetBucket?: string;
  /**
   * @remarks
   * The details of the target container for restoration.
   * 
   * @example
   * {\\"host\\":\\"k8s-node1\\",\\"hostPrefix\\":\\"/var/lib/kubelet/pods/4acb31fe-8577-40ff-bc8c-eccabd835f73/volumes/kubernetes.io~csi/pvc-b050b00e-ef17-4792-aab1-1642355cf1f4/mount\\",\\"pvPath\\":\\"/\\"}
   */
  targetContainer?: string;
  /**
   * @remarks
   * The ID of the target container cluster for restoration.
   * 
   * @example
   * cc-000amjsc7o1h9506oob7
   */
  targetContainerClusterId?: string;
  /**
   * @remarks
   * This parameter is valid only when **RestoreType** is set to **NAS**. The creation time of the destination file system. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  targetCreateTime?: number;
  /**
   * @remarks
   * This parameter is valid only when **RestoreType** is set to **NAS**. The file system ID of the restore destination.
   * 
   * @example
   * 005494
   */
  targetFileSystemId?: string;
  /**
   * @remarks
   * This parameter is valid only when **RestoreType** is set to **ECS_FILE**. The ECS instance ID of the restore destination.
   * 
   * @example
   * i-*********************
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the target Tablestore instance for restoration.
   * 
   * @example
   * instancename
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * This parameter is valid only when **RestoreType** is set to **ECS_FILE**. The file path of the restore destination.
   * 
   * @example
   * C:\\
   */
  targetPath?: string;
  /**
   * @remarks
   * This parameter is valid only when **RestoreType** is set to **OSS**. The object prefix of the restore destination.
   * 
   * @example
   * hbr
   */
  targetPrefix?: string;
  /**
   * @remarks
   * The name of the target data table in Tablestore for restoration.
   * 
   * @example
   * tablename
   */
  targetTableName?: string;
  /**
   * @remarks
   * The point in time to which the Tablestore data is restored. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1642496881
   */
  targetTime?: number;
  /**
   * @remarks
   * This parameter is valid only when SourceType is set to UDM_ECS. The details of the full-copy migration backup. This parameter is a JSON string. The details vary depending on the value of RestoreType:
   * - **UDM_ECS_DISK**: ECS cloud disk clone.
   *   - **targetInstanceId**: string type, required. Instance ID of the target ECS instance to which the cloned cloud disk is attached.
   *   - **diskCategory**: string type, required. The type of the target cloud disk.
   *   - **diskPerformanceLevel**: string type. If diskCategory is set to essd, this parameter specifies the performance level (PL) of the cloud disk. Valid values: PL0, PL1, PL2, and PL3. Default value: PL1.
   * - **UDM_ECS_DISK_ROLLBACK**: ECS cloud disk restoration.
   *   - **sourceInstanceId**: string type, required. Instance ID of the source ECS instance.
   *   - **foreceRestore**: bool type. Default value: false. Specifies whether to forcibly restore. If foreceRestore is set to true, the restore job still restores the cloud disk even if the backed-up cloud disk has been unmounted from the original ECS instance or attached to a new ECS instance. Proceed with caution.
   *   - **bootAfterRestore**: bool type. Default value: false. Specifies whether to start the ECS instance after restoration.
   * - **UDM_ECS**: ECS full-copy clone.
   *   - **bootAfterRestore**: bool type. Default value: false. Specifies whether to start the ECS instance after restoration.
   *   - **diskCategory**: string type, required. The type of the target cloud disk.
   *   - **diskPerformanceLevel**: string type. If diskCategory is set to essd, this parameter specifies the performance level (PL) of the cloud disk. Valid values: PL0, PL1, PL2, and PL3. Default value: PL1.
   *   - **instanceType**: string type, required. The instance type of the target ECS instance.
   *   - **restoredNetwork**: string type, required. The vSwitch ID of the target ECS instance.
   *   - **securityGroup**: string type, required. The security group ID of the target ECS instance.
   *   - **restoredName**: string type, required. The instance name of the target ECS instance.
   *   - **restoredHostName**: string type, required. The hostname of the target ECS instance.
   *   - **allocatePublicIp**: bool type. Default value: false. Specifies whether to assign a public IP address to the target ECS instance.
   *   - **privateIpAddress**: string type. The internal IP address of the target ECS instance. If this parameter is not specified, DHCP is used to randomly assign an IP address.
   * - **UDM_ECS_ROLLBACK**: ECS full-copy restoration.
   *   - **sourceInstanceId**: string type, required. Instance ID of the source ECS instance.
   *   - **forceRestore**: bool type. Default value: false. Specifies whether to forcibly restore. If foreceRestore is set to true, the restore job still restores the cloud disk even if the backed-up cloud disk has been unmounted from the original ECS instance or attached to a new ECS instance. Proceed with caution.
   *   - **bootAfterRestore**: bool type. Default value: false. Specifies whether to start the ECS instance after restoration.
   * 
   * @example
   * {\\"sourceInstanceId\\":\\"i-uf62te6pm3iwsyxyz66q\\",\\"bootAfterRestore\\":false}
   */
  udmDetailShrink?: string;
  /**
   * @remarks
   * This parameter is valid only when **SourceType** is set to **UDM_ECS**. The destination region for restoration.
   * 
   * @example
   * cn-shanghai
   */
  udmRegionId?: string;
  /**
   * @remarks
   * The ID of the backup vault to which the backup snapshot belongs.
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
      edition: 'Edition',
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
      edition: 'string',
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

