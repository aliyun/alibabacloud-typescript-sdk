// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2021-11-22T18:28:41Z
   */
  backupEndTime?: string;
  /**
   * @example
   * 117403****
   */
  backupId?: string;
  /**
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @example
   * {"shard_count"：4}
   */
  backupSetInfo?: string;
  /**
   * @example
   * 131072
   */
  backupSize?: number;
  /**
   * @example
   * 2021-11-22T18:28:22Z
   */
  backupStartTime?: string;
  /**
   * @example
   * Success
   */
  backupStatus?: string;
  /**
   * @example
   * IncrementalBackup
   */
  backupType?: string;
  /**
   * @example
   * cc-bp179i5956tih2m93
   */
  DBInstanceId?: string;
  /**
   * @example
   * 2022-07-22T18:28:41Z
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSetInfo: 'BackupSetInfo',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      backupType: 'BackupType',
      DBInstanceId: 'DBInstanceId',
      expireDate: 'ExpireDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSetInfo: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupStatus: 'string',
      backupType: 'string',
      DBInstanceId: 'string',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

