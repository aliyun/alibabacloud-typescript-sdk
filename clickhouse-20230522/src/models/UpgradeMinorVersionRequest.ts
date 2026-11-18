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
   * > If SwitchTimeMode is set to SpecifyTime, you must use this parameter to specify the upgrade time.
   * 
   * @example
   * 2023-01-09T05:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * Specifies whether to upgrade the minor engine version immediately. Valid values:
   * - **Immediate**: Upgrades immediately.
   * - **MaintainTime**: Upgrades within the O&M window.
   * - **SpecifyTime**: Upgrades at a specified time.
   * 
   * @example
   * Immediate
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * The target minor engine version.
   * > By default, this parameter is left empty, and the minor engine version is upgraded to the latest version.
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

