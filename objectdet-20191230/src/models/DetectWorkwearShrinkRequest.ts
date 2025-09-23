// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectWorkwearShrinkRequest extends $dara.Model {
  clothesShrink?: string;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/zhangchaorun/tiyan/xxxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * 1
   */
  labels?: string[];
  static names(): { [key: string]: string } {
    return {
      clothesShrink: 'Clothes',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothesShrink: 'string',
      imageUrl: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

