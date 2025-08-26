// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizePdfAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/ocr/xxxx.pdf
   */
  fileURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      fileURLObject: 'FileURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

