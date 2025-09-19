// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the backup task ended. Unit: milliseconds.
   * 
   * @example
   * 1699600611000
   */
  backupEndTime?: number;
  /**
   * @remarks
   * The timestamp when the backup task started. Unit: milliseconds.
   * 
   * @example
   * 1699514211000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The page number. Default value: **1**. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The information that you want to use to identify the servers protected by the anti-ransomware policy. You can enter the IP address or ID of a server.
   * 
   * @example
   * 192.168.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The backup task status. Valid values:
   * 
   * *   **BACKUP_COMPLETE**: The backup task is successful.
   * *   **BACKUP_FAILED**: The backup task failed.
   * *   **PARTIAL_COMPLETE**: The backup task is partially successful.
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupStartTime: 'BackupStartTime',
      currentPage: 'CurrentPage',
      machineRemark: 'MachineRemark',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'number',
      backupStartTime: 'number',
      currentPage: 'number',
      machineRemark: 'string',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

