// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlignStoragePrimaryAzoneRequest extends $dara.Model {
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
   * The name of the storage instance whose primary node zone needs to be aligned.
   * 
   * @example
   * pxc-xdb-m-pxcbjrylg49skcxb17394
   */
  storageInstanceName?: string;
  /**
   * @remarks
   * The start time of the switch for the storage primary node, in the UTC time format YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2024-12-11T17:10:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The switchover mode. Valid values:
   * - 0: immediate switchover
   * - 1: switchover during the O&M window
   * - 2: switchover at a specified time
   * 
   * @example
   * 0
   */
  switchTimeMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
      storageInstanceName: 'StorageInstanceName',
      switchTime: 'SwitchTime',
      switchTimeMode: 'SwitchTimeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      regionId: 'string',
      storageInstanceName: 'string',
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

