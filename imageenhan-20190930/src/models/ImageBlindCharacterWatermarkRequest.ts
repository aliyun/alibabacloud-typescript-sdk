// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBlindCharacterWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * encode_text
   */
  functionType?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg
   */
  originImageURL?: string;
  /**
   * @example
   * jpg
   */
  outputFileType?: string;
  /**
   * @example
   * 100
   */
  qualityFactor?: number;
  text?: string;
  /**
   * @example
   * https://viapi-doc.oss-cn-shanghai.aliyuncs.com/imageenhan/xxxxx.jpg
   */
  watermarkImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      functionType: 'FunctionType',
      originImageURL: 'OriginImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
      text: 'Text',
      watermarkImageURL: 'WatermarkImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      originImageURL: 'string',
      outputFileType: 'string',
      qualityFactor: 'number',
      text: 'string',
      watermarkImageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

