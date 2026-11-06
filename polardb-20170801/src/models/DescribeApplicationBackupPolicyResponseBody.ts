// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type, such as polarclaw.
   * 
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The days of the week when automatic backups are performed. Separate multiple values with commas. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
   * 
   * @example
   * Monday,Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The retention period of level-1 backups, in days.
   * 
   * @example
   * 7
   */
  preferredBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The time window when automatic backups are performed. The time follows the HH:mmZ-HH:mmZ format in UTC.
   * 
   * @example
   * 07:00Z-08:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupRetentionPeriod: 'PreferredBackupRetentionPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupRetentionPeriod: 'number',
      preferredBackupTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

