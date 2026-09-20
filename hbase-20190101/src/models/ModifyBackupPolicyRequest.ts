// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * The UTC time when the backup ends.
   * 
   * @example
   * 18:00Z
   */
  preferredBackupEndTimeUTC?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * - Monday: performs backup every Monday.
   * - Tuesday: performs backup every Tuesday.
   * - Wednesday: performs backup every Wednesday.
   * - Thursday: performs backup every Thursday.
   * - Friday: performs backup every Friday.
   * - Saturday: performs backup every Saturday.
   * - Sunday: performs backup every Sunday.
   * 
   * This parameter is required.
   * 
   * @example
   * Thursday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The UTC time when the backup starts.
   * 
   * @example
   * 17:00Z
   */
  preferredBackupStartTimeUTC?: string;
  /**
   * @remarks
   * The backup time range in the current time zone. The interval is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 01:00-02:00
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      preferredBackupEndTimeUTC: 'PreferredBackupEndTimeUTC',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTimeUTC: 'PreferredBackupStartTimeUTC',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      preferredBackupEndTimeUTC: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTimeUTC: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

