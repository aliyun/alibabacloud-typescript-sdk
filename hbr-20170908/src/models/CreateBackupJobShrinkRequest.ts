// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type. This parameter is required only if you set the SourceType parameter to UDM_ECS.
   * 
   * *   **COMPLETE**: full backup
   * 
   * @example
   * INCREMENTAL
   */
  backupType?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * cl-00068btz******oku
   */
  clusterId?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * cc-000xxxxxxxxxxxxxxi00
   */
  containerClusterId?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * [{\\"resourceType\\":\\"PV\\",\\"backupMethod\\":\\"FILE\\",\\"resourceId\\":\\"674dac6d-74cd-47e9-a675-09e2f10d2c45\\",\\"resourceInfo\\":\\"{\\\\\\"pv_name\\\\\\":\\\\\\"nas-650dac6d-74cd-47e9-a675-09e2f10d2c45\\\\\\",\\\\\\"pv_size\\\\\\":\\\\\\"8Gi\\\\\\",\\\\\\"storage_class\\\\\\":\\\\\\"alibabacloud-cnfs-nas\\\\\\",\\\\\\"pvc_name\\\\\\":\\\\\\"data-postgresql-default-0\\\\\\",\\\\\\"namespace\\\\\\":\\\\\\"database\\\\\\"}\\",\\"host\\":\\"cn-huhehaote.192.168.13.133\\",\\"hostPrefix\\":\\"6f5e758e-8d35-4584-b9ce-8333adfc7547/volumes/kubernetes.io~csi/nas-670dac6d-74cd-47e9-a675-09e2f10d2c45/mount\\",\\"pvPath\\":\\"/\\"}]
   */
  containerResources?: string;
  /**
   * @remarks
   * The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:
   * 
   * *   SELF_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
   * *   CROSS_ACCOUNT: Data is backed up across Alibaba Cloud accounts.
   * 
   * @example
   * SELF_ACCOUNT
   */
  crossAccountType?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * 158975xxxxxx4625
   */
  crossAccountUserId?: number;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **UDM_ECS**. The value is a JSON string. Valid values:
   * 
   * *   doCopy: specifies whether to enable remote replication.
   * 
   * *   destinationRegionId: the destination region for remote replication.
   * 
   * *   destinationRetention: the retention period of the backup point for remote replication.
   * 
   * *   diskIdList: the IDs of the disks that are to be backed up. If this parameter is left empty, all disks are backed up.
   * 
   * *   snapshotGroup: specifies whether to use a snapshot-consistent group. This parameter is valid only if all disks of the ECS instance are Enterprise SSDs (ESSDs).
   * 
   * *   appConsistent: specifies whether to use the application-consistent backup feature. This parameter must be used with the preScriptPath and postScriptPath parameters.
   * 
   * *   preScriptPath: the path to the pre-freeze scripts.
   * 
   * *   postScriptPath: the path to the post-thaw scripts.
   * 
   * *   enableWriters: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to create application-consistent snapshots.
   * 
   *     *   true: creates application-consistent snapshots.
   *     *   false: creates file system-consistent snapshots.
   * 
   * *   enableFsFreeze: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies whether to enable Linux fsfreeze to put file systems into the read-only state before application-consistent snapshots are created. Default value: true.
   * 
   * *   timeoutSeconds: This parameter is required only if you set the **AppConsistent** parameter to **true**. This parameter specifies the I/O freeze timeout period. Default value: 30. Unit: seconds.
   * 
   * @example
   * {
   *     "doCopy": false,
   *     "destinationRegionId": "",
   *     "destinationRetention": null,
   *     "diskIdList": [],
   *     "snapshotGroup": false,
   *     "appConsistent": false,
   *     "enableWriters": true,
   *     "preScriptPath": "",
   *     "postScriptPath": "",
   *     "enableFsFreeze": true,
   *     "timeoutInSeconds": 60
   * }
   */
  detailShrink?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the paths to the files that are excluded from the backup job. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/var", "/proc"]
   */
  exclude?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the paths to the files that are backed up. The value can be up to 255 characters in length.
   * 
   * @example
   * ["/home/alice/*.pdf", "/home/bob/*.txt"]
   */
  include?: string;
  /**
   * @remarks
   * false or left empty
   * 
   * @example
   * false
   */
  initiatedByAck?: boolean;
  /**
   * @remarks
   * This parameter is required only if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the ID of the ECS instance.
   * 
   * @example
   * i-bp1xxxxxxxxxxxxxxysm
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the backup job.
   * 
   * @example
   * k8s-backup-infra-20220131150046-hbr
   */
  jobName?: string;
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * {"UseVSS":false}
   */
  options?: string;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days.
   * 
   * @example
   * 15
   */
  retention?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: Elastic Compute Service (ECS) instance
   * 
   * This parameter is required.
   * 
   * @example
   * CONTAINER
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter does not take effect if you set the **SourceType** parameter to **UDM_ECS**. This parameter specifies the throttling rules. Format: `{start}|{end}|{bandwidth}`. Separate multiple throttling rules with vertical bars (|). A specified time range cannot overlap with another time range.
   * 
   * *   **start**: the start hour.
   * *   **end**: the end hour.
   * *   **bandwidth**: the bandwidth. Unit: KB/s.
   * 
   * @example
   * 0:24:NaN
   */
  speedLimit?: string;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is not required if you set the SourceType parameter to UDM_ECS.
   * 
   * @example
   * v-000xxxxxxxxxxxxxxy1v
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      containerClusterId: 'ContainerClusterId',
      containerResources: 'ContainerResources',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountType: 'CrossAccountType',
      crossAccountUserId: 'CrossAccountUserId',
      detailShrink: 'Detail',
      exclude: 'Exclude',
      include: 'Include',
      initiatedByAck: 'InitiatedByAck',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      options: 'Options',
      retention: 'Retention',
      sourceType: 'SourceType',
      speedLimit: 'SpeedLimit',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      clusterId: 'string',
      containerClusterId: 'string',
      containerResources: 'string',
      crossAccountRoleName: 'string',
      crossAccountType: 'string',
      crossAccountUserId: 'number',
      detailShrink: 'string',
      exclude: 'string',
      include: 'string',
      initiatedByAck: 'boolean',
      instanceId: 'string',
      jobName: 'string',
      options: 'string',
      retention: 'number',
      sourceType: 'string',
      speedLimit: 'string',
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

