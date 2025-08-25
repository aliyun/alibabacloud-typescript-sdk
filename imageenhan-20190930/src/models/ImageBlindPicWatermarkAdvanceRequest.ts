// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ImageBlindPicWatermarkAdvanceRequest extends $dara.Model {
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
  logoURLObject?: Readable;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg
   */
  originImageURLObject?: Readable;
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
  watermarkImageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      functionType: 'FunctionType',
      logoURLObject: 'LogoURL',
      originImageURLObject: 'OriginImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
      watermarkImageURLObject: 'WatermarkImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      logoURLObject: 'Readable',
      originImageURLObject: 'Readable',
      outputFileType: 'string',
      qualityFactor: 'number',
      watermarkImageURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

