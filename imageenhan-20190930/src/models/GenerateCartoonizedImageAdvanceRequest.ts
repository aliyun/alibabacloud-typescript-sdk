// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class GenerateCartoonizedImageAdvanceRequest extends $dara.Model {
  /**
   * @example
   * girl
   */
  imageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/zhangchaorun/1025.jpg
   */
  imageUrlObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  index?: string;
  static names(): { [key: string]: string } {
    return {
      imageType: 'ImageType',
      imageUrlObject: 'ImageUrl',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'string',
      imageUrlObject: 'Readable',
      index: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

