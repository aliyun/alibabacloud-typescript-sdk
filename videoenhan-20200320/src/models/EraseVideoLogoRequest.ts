// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EraseVideoLogoRequestBoxes extends $dara.Model {
  /**
   * @example
   * 1.0
   */
  h?: number;
  /**
   * @example
   * 1.0
   */
  w?: number;
  /**
   * @example
   * 0.0
   */
  x?: number;
  /**
   * @example
   * 0.0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EraseVideoLogoRequest extends $dara.Model {
  boxes?: EraseVideoLogoRequestBoxes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/EraseVideoLogo/EraseVideoLogo1.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoRequestBoxes },
      videoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

