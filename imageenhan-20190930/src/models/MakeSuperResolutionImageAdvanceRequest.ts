// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class MakeSuperResolutionImageAdvanceRequest extends $dara.Model {
  /**
   * @example
   * base
   */
  mode?: string;
  /**
   * @example
   * png
   */
  outputFormat?: string;
  /**
   * @example
   * 95
   */
  outputQuality?: number;
  /**
   * @example
   * 2
   */
  upscaleFactor?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/MakeSuperResolutionImage/MakeSuperResolutionImage5.png
   */
  urlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      outputFormat: 'OutputFormat',
      outputQuality: 'OutputQuality',
      upscaleFactor: 'UpscaleFactor',
      urlObject: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      outputFormat: 'string',
      outputQuality: 'number',
      upscaleFactor: 'number',
      urlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

