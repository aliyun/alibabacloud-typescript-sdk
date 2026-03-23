// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachRCDiskRequest extends $dara.Model {
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  diskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'boolean',
      diskId: 'string',
      instanceId: 'string',
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

