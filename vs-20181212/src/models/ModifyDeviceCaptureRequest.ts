// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeviceCaptureRequest extends $dara.Model {
  /**
   * @remarks
   * Device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Image capture control. Valid values:
   * 
   * - 0 (shutdown)
   * 
   * - 1 (enable)
   * 
   * @example
   * 0
   */
  image?: number;
  ownerId?: number;
  /**
   * @remarks
   * Video recording control. Valid values:
   * 
   * - 0 (shutdown)
   * 
   * - 1 (enable short recording)
   * 
   * - 2 (enable long recording)
   * 
   * @example
   * 1
   */
  video?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      image: 'Image',
      ownerId: 'OwnerId',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      image: 'number',
      ownerId: 'number',
      video: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

