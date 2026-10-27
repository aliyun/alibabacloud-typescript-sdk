// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * The name of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r****
   */
  DBInstanceName?: string;
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
   * The specified switchover time. This parameter is required when SwitchTimeMode is set to 2. The time must be in UTC and in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2018-02-05T09:12:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The switchover mode. Valid values: 0: Immediate switchover. 1: Switchover during the O&M window. 2: Switchover at a specified time.
   * 
   * @example
   * 0
   */
  switchTimeMode?: string;
  /**
   * @remarks
   * The zone ID of the primary node after the switchover.
   * 
   * @example
   * cn-hangzhou-d
   */
  targetPrimaryAzoneId?: string;
  /**
   * @remarks
   * The region ID of the primary node after the switchover.
   * 
   * @example
   * cn-hangzhou
   */
  targetPrimaryRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
      targetPrimaryAzoneId: 'TargetPrimaryAzoneId',
      targetPrimaryRegionId: 'TargetPrimaryRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
      targetPrimaryAzoneId: 'string',
      targetPrimaryRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

