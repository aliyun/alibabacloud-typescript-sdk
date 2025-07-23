// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBackupResponseBodyBackup extends $dara.Model {
  /**
   * @remarks
   * The number of images that are automatically backed up.
   * 
   * @example
   * 1
   */
  autoImageCount?: number;
  /**
   * @remarks
   * The backup time in the 24-hour format.
   * 
   * @example
   * 10
   */
  backupHourInDay?: string;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-fdb897sdf****
   */
  backupId?: string;
  /**
   * @remarks
   * The automatic backup cycle. Unit: days.
   * 
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @remarks
   * The time when the backup is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  createTime?: number;
  /**
   * @remarks
   * The expiration time of the backup. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the hardware security module (HSM) that is associated with the backup.
   * 
   * @example
   * hsm-cn-5yd35431****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of images.
   * 
   * @example
   * 3
   */
  maxImageCount?: string;
  /**
   * @remarks
   * The name of the backup.
   * 
   * @example
   * backup-te****
   */
  name?: string;
  /**
   * @remarks
   * The next time when the image is created. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1682417553781
   */
  nextImageCreateTime?: number;
  /**
   * @remarks
   * The ID of the HSM to which the backup belongs. This parameter is available only for HSM backups outside the Chinese mainland and the value of this parameter is consistent with the value of InstanceId.
   * 
   * @example
   * hsm-cn-huoahd****
   */
  ownerInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the backup is released. The value is accurate to the millisecond. The value is a UNIX timestamp.
   * 
   * @example
   * 1641275680000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The description of the backup.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the backup. This parameter is available only for HSM backups in the Chinese mainland.
   * 
   * @example
   * backup-fdb897sdfg53****
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The status of the backup. Valid values:
   * 
   * *   NEW
   * *   EXPIRED
   * *   ENABLED
   * 
   * @example
   * NEW
   */
  status?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   DEFAULT
   * *   NORMAL
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoImageCount: 'AutoImageCount',
      backupHourInDay: 'BackupHourInDay',
      backupId: 'BackupId',
      backupPeriod: 'BackupPeriod',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      maxImageCount: 'MaxImageCount',
      name: 'Name',
      nextImageCreateTime: 'NextImageCreateTime',
      ownerInstanceId: 'OwnerInstanceId',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      remark: 'Remark',
      spInstanceId: 'SpInstanceId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoImageCount: 'number',
      backupHourInDay: 'string',
      backupId: 'string',
      backupPeriod: 'number',
      createTime: 'number',
      expireTime: 'number',
      instanceId: 'string',
      maxImageCount: 'string',
      name: 'string',
      nextImageCreateTime: 'number',
      ownerInstanceId: 'string',
      regionId: 'string',
      releaseTime: 'number',
      remark: 'string',
      spInstanceId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backup.
   */
  backup?: GetBackupResponseBodyBackup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: GetBackupResponseBodyBackup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backup && typeof (this.backup as any).validate === 'function') {
      (this.backup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

