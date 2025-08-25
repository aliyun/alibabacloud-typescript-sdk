// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class EraseVideoLogoAdvanceRequestBoxes extends $dara.Model {
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

export class EraseVideoLogoAdvanceRequest extends $dara.Model {
  boxes?: EraseVideoLogoAdvanceRequestBoxes[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/EraseVideoLogo/EraseVideoLogo1.mp4
   */
  videoUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      videoUrlObject: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': EraseVideoLogoAdvanceRequestBoxes },
      videoUrlObject: 'Readable',
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

