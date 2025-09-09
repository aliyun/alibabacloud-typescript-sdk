// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackupLocalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgag23d13fds
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature to forcibly delete binary log files if the used storage space reaches 90% of the total storage space or the remaining storage space is less than 5 GB. Valid values: 1 and 0. A value of 1 specifies to enable this feature. A value of 0 specifies not to enable this feature.
   * 
   * @example
   * 80
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The number of hours for which log backup files are retained on the instance. Valid values: 0 to 168. Default value: 18. A value of 0 indicates that log backup files are not retained.
   * 
   * @example
   * 12
   */
  localLogRetentionHours?: string;
  /**
   * @remarks
   * The maximum storage space usage that is allowed for log files on the instance. Valid values: 0 to 50. Default value: 30.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

