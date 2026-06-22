// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The backup end time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1699600611000
   */
  backupEndTime?: number;
  /**
   * @remarks
   * The backup start time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1699514211000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The identification information of the server protected by the anti-ransomware policy that you want to query. You can enter the IP address or instance ID of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of backup task statuses. Valid values:
   * - **BACKUP_COMPLETE**: backup succeeded
   * - **BACKUP_FAILED**: backup failed
   * - **PARTIAL_COMPLETE**: partial backup succeeded.
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

