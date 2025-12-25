// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkImageRequest extends $dara.Model {
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
   * ****.jpg
   */
  fileName?: string;
  /**
   * @example
   * PC
   */
  platform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      cameraHeight: 'CameraHeight',
      fileName: 'FileName',
      platform: 'Platform',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cameraHeight: 'number',
      fileName: 'string',
      platform: 'string',
      subSceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

