// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeDBVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-wz9kmr708m155j***
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is no longer used and does not need to be specified.
   * 
   * @example
   * null
   */
  majorVersion?: string;
  /**
   * @remarks
   * The minor version of the instance.
   * 
   * @example
   * 6.3.6.1-202112012048
   */
  minorVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is no longer used and does not need to be specified.
   * 
   * @example
   * null
   */
  switchTime?: string;
  /**
   * @remarks
   * This parameter is no longer used and does not need to be specified.
   * 
   * @example
   * null
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      majorVersion: 'MajorVersion',
      minorVersion: 'MinorVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      majorVersion: 'string',
      minorVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      switchTime: 'string',
      switchTimeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

