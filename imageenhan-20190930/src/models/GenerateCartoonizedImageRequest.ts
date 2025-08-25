// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCartoonizedImageRequest extends $dara.Model {
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
  imageUrl?: string;
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
      imageUrl: 'ImageUrl',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageType: 'string',
      imageUrl: 'string',
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

