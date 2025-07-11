// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDriveRequest extends $dara.Model {
  /**
   * @example
   * dri-aaaa****
   */
  driveId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'DriveId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
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

