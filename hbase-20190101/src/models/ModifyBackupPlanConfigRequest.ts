// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPlanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-m5eznlga4k5bcxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The full backup cycle, in days. Valid values: 3 to 9.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  fullBackupCycle?: string;
  /**
   * @remarks
   * The number of full backups to retain. Valid values: 3 to 8.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  minHFileBackupCount?: string;
  /**
   * @remarks
   * The time of the next full backup. The specified time must be at least 6 minutes later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-09T18:00:00Z
   */
  nextFullBackupDate?: string;
  /**
   * @remarks
   * The tables to back up. Specify one table name per line. Wildcards are supported. An asterisk (*) indicates all tables.
   * 
   * This parameter is required.
   * 
   * @example
   * *
   */
  tables?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fullBackupCycle: 'FullBackupCycle',
      minHFileBackupCount: 'MinHFileBackupCount',
      nextFullBackupDate: 'NextFullBackupDate',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fullBackupCycle: 'string',
      minHFileBackupCount: 'string',
      nextFullBackupDate: 'string',
      tables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

