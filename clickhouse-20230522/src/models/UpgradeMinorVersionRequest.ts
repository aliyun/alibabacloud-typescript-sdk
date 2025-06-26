// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMinorVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1jyis8p15we****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The update time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  If you set SwitchTimeMode to SpecifyTime, you must configure this parameter to specify the update time.
   * 
   * @example
   * 2023-01-09T05:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * Specifies whether to update the minor engine version of the cluster immediately. Valid values:
   * 
   * *   **Immediate**: The system immediately performs the update.
   * *   **MaintainTime**: The system performs the update during the specified maintenance window.
   * *   **SpecifyTime**: The system performs the update at a specified time.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * The minor engine version to which you want to update.
   * 
   * >  By default, TargetMinorVersion is not set and the minor engine version of the cluster is updated to the latest version.
   * 
   * @example
   * 23.8.1.41495_6
   */
  targetMinorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetMinorVersion: 'TargetMinorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetMinorVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

