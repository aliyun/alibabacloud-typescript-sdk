// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which you can retain the backup data.
   * 
   * @example
   * 8
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-2ze0eb0w182xh8549
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (`,`).
   * 
   * This parameter is required.
   * 
   * @example
   * Monday,Friday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time window within which the backup task is performed. The time is displayed in `UTC`. For example, `12:00Z-13:00Z` indicates that the backup time window ranges from `12:00` (UTC) to `13:00` `(UTC)`.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00Z-11:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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

