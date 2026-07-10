// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days to retain backups.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The backup cycle.
   * 
   * This parameter is required.
   * 
   * @example
   * Monday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time.
   * 
   * This parameter is required.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBInstanceId: 'DBInstanceId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      DBInstanceId: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

