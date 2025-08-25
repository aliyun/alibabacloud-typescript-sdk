// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RemoveImageSubtitlesAdvanceRequest extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  BH?: number;
  /**
   * @example
   * 1
   */
  BW?: number;
  /**
   * @example
   * 0
   */
  BX?: number;
  /**
   * @example
   * 0.75
   */
  BY?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/RemoveImageSubtitles/RemoveImageSubtitles1.jpg
   */
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      BH: 'BH',
      BW: 'BW',
      BX: 'BX',
      BY: 'BY',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BH: 'number',
      BW: 'number',
      BX: 'number',
      BY: 'number',
      imageURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

