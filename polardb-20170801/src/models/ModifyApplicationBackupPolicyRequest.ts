// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type, such as polarclaw. This parameter is required. If it is not provided, the service returns InvalidApplicationType.Malformed. Valid values: polarclaw, supabase, and polarclawsaas. Note: The ApplicationType field in the DescribeApplications response contains the polardb_ prefix (such as polardb_polarclaw). When you call this operation, remove the prefix and use the short format.
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
   * The retention period of level-1 backups. Unit: days.
   * 
   * @example
   * 7
   */
  preferredBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The time window when automatic backups are performed. Specify the time in the HH:mmZ-HH:mmZ format in UTC. The start time and end time must be on the hour and exactly one hour apart.
   * 
   * @example
   * 07:00Z-08:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The region ID of the application.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupRetentionPeriod: 'PreferredBackupRetentionPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupRetentionPeriod: 'string',
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

