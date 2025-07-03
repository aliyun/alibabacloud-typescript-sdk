// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  switchTime?: string;
  switchTimeMode?: string;
  targetPrimaryAzoneId?: string;
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

