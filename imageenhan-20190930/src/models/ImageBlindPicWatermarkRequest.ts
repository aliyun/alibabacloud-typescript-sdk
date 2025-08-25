// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBlindPicWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * encode_pic
   */
  functionType?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg
   */
  logoURL?: string;
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
  /**
   * @example
   * https://viapi-doc.oss-cn-shanghai.aliyuncs.com/imageenhan/xxxxx.jpg
   */
  watermarkImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      functionType: 'FunctionType',
      logoURL: 'LogoURL',
      originImageURL: 'OriginImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
      watermarkImageURL: 'WatermarkImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      logoURL: 'string',
      originImageURL: 'string',
      outputFileType: 'string',
      qualityFactor: 'number',
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

