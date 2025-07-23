// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupsResponseBodyBackups extends $dara.Model {
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
   * The backup time on the hour that is in the 24-hour clock.
   * 
   * @example
   * 13
   */
  backupHourInDay?: string;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * @example
   * backup-1648438****
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
   * 1637229596000
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
   * The ID of the HSM that is associated with the backup.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of images.
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
   * The time when the image is created next time. The value is accurate to the millisecond. The value is a UNIX timestamp.
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
   * hsm-cn-vj30bil8****
   */
  ownerInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * ap-southeast-1
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
   * normal backup
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the backup. This parameter is available only for HSM backups in the Chinese mainland.
   * 
   * @example
   * backup-fdb897sdfg534-****
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The status of the backup. Valid values:
   * 
   * *   NEW: The backup is disabled.
   * *   EXPIRED: The backup expired.
   * *   ENABLED: The backup is enabled.
   * 
   * @example
   * ENABLED
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
   * NORMAL
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

export class ListBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backups returned.
   */
  backups?: ListBackupsResponseBodyBackups[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      backups: 'Backups',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backups: { 'type': 'array', 'itemType': ListBackupsResponseBodyBackups },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.backups)) {
      $dara.Model.validateArray(this.backups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

