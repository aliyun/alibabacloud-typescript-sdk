// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnhanceImageColorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/EnhanceImageColor/EnhanceImageColor1.jpg
   */
  imageURL?: string;
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
      imageURL: 'ImageURL',
      mode: 'Mode',
      outputFormat: 'OutputFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
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

