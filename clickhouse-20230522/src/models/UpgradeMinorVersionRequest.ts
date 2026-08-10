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
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The specified upgrade time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * > This parameter is required when SwitchTimeMode is set to SpecifyTime.
   * 
   * @example
   * 2023-01-09T05:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * Specifies when to upgrade. Valid values:
   * - **Immediate**: upgrades immediately.
   * - **MaintainTime**: upgrades during the O&M window.
   * - **SpecifyTime**: upgrades at a specified time.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * The target minor engine version.
   * >By default, leave this parameter empty to upgrade to the latest minor engine version.
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

