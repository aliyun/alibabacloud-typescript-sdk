// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlignStoragePrimaryAzoneRequest extends $dara.Model {
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
  storageInstanceName?: string;
  switchTime?: string;
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

