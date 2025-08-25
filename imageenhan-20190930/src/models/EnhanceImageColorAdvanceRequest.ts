// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class EnhanceImageColorAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/EnhanceImageColor/EnhanceImageColor1.jpg
   */
  imageURLObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LogC
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * png
   */
  outputFormat?: string;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      mode: 'Mode',
      outputFormat: 'OutputFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      mode: 'string',
      outputFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

