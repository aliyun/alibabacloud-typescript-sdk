// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizePdfRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/ocr/xxxx.pdf
   */
  fileURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

