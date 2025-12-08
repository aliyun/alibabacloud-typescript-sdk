// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ExtractFingerPrintAdvanceRequest extends $dara.Model {
  /**
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAASUAA****
   */
  imageData?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xuhan/ExtractFingerPrint.png
   */
  imageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURLObject: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
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

