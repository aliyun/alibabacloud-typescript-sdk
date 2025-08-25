// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class ImageBlindCharacterWatermarkAdvanceRequest extends $dara.Model {
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
  text?: string;
  /**
   * @example
   * https://viapi-doc.oss-cn-shanghai.aliyuncs.com/imageenhan/xxxxx.jpg
   */
  watermarkImageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      functionType: 'FunctionType',
      originImageURLObject: 'OriginImageURL',
      outputFileType: 'OutputFileType',
      qualityFactor: 'QualityFactor',
      text: 'Text',
      watermarkImageURLObject: 'WatermarkImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionType: 'string',
      originImageURLObject: 'Readable',
      outputFileType: 'string',
      qualityFactor: 'number',
      text: 'string',
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

