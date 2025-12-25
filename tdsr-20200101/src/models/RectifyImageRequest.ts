// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RectifyImageRequest extends $dara.Model {
  /**
   * @example
   * 160
   */
  cameraHeight?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://www.aliyundoc.com/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cameraHeight: 'CameraHeight',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraHeight: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

