// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeVideoSizeRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  b?: number;
  /**
   * @example
   * smart
   */
  cropType?: string;
  /**
   * @example
   * image
   */
  fillType?: string;
  /**
   * @example
   * 0
   */
  g?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  height?: number;
  /**
   * @example
   * 0
   */
  r?: number;
  /**
   * @example
   * 0.5
   */
  tightness?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/ChangeVideoSize/ChangeVideoSize1.mp4
   */
  videoUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 600
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      cropType: 'CropType',
      fillType: 'FillType',
      g: 'G',
      height: 'Height',
      r: 'R',
      tightness: 'Tightness',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      cropType: 'string',
      fillType: 'string',
      g: 'number',
      height: 'number',
      r: 'number',
      tightness: 'number',
      videoUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

