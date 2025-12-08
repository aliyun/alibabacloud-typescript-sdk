// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExtractFingerPrintRequest extends $dara.Model {
  /**
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAASUAA****
   */
  imageData?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xuhan/ExtractFingerPrint.png
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

