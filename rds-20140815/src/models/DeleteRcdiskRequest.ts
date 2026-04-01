// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk that you want to release.
   * 
   * This parameter is required.
   * 
   * @example
   * rcd-wz9c8isqly8637zw****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
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

