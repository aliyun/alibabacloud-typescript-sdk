// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  diskId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
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

