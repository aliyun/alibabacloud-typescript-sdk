// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup task.
   * > If you called the [CreateBackup](https://help.aliyun.com/document_detail/473819.html) operation to perform a manual backup, you can pass the returned backup ID to query the backup progress.
   * 
   * @example
   * 1162****
   */
  backupJobId?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * * **Automated**: automated backup. You can call the [DescribeBackupPolicy](https://help.aliyun.com/document_detail/473822.html) operation to query the automatic backup policy.
   * * **Manual**: manual backup.
   * > By default, task information for all backup modes is returned.
   * 
   * @example
   * Manual
   */
  jobMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      instanceId: 'InstanceId',
      jobMode: 'JobMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'string',
      instanceId: 'string',
      jobMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

