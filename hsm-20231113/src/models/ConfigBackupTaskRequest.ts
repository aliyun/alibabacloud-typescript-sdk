// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigBackupTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The backup time in the 24-hour format. Valid values: 1 to 24.
   * 
   * Enumeration values:
   * 
   * *   0
   * *   1
   * *   2
   * *   3
   * *   4
   * *   5
   * *   6
   * *   7
   * *   8
   * *   9
   * *   10
   * *   11
   * *   12
   * *   13
   * *   14
   * *   15
   * *   16
   * *   17
   * *   18
   * *   19
   * *   20
   * *   21
   * *   22
   * *   23
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  backupHourInDay?: number;
  /**
   * @remarks
   * The ID of the backup.
   * 
   * This parameter is required.
   * 
   * @example
   * backup-173620705****
   */
  backupId?: string;
  /**
   * @remarks
   * The automatic backup cycle. Unit: days. Valid values: 1, 3, 7, and 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  backupPeriod?: number;
  /**
   * @remarks
   * The IDs of images for which the manual backup mode is updated to the automatic backup mode.
   */
  manual2PeriodicList?: string[];
  /**
   * @remarks
   * The IDs of images for which the automatic backup mode is updated to the manual backup mode.
   */
  periodic2ManualList?: string[];
  static names(): { [key: string]: string } {
    return {
      backupHourInDay: 'BackupHourInDay',
      backupId: 'BackupId',
      backupPeriod: 'BackupPeriod',
      manual2PeriodicList: 'Manual2PeriodicList',
      periodic2ManualList: 'Periodic2ManualList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupHourInDay: 'number',
      backupId: 'string',
      backupPeriod: 'number',
      manual2PeriodicList: { 'type': 'array', 'itemType': 'string' },
      periodic2ManualList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.manual2PeriodicList)) {
      $dara.Model.validateArray(this.manual2PeriodicList);
    }
    if(Array.isArray(this.periodic2ManualList)) {
      $dara.Model.validateArray(this.periodic2ManualList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

