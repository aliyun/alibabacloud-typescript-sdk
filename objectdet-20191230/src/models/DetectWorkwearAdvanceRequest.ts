// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectWorkwearAdvanceRequestClothes extends $dara.Model {
  /**
   * @example
   * 1
   */
  maxNum?: number;
  /**
   * @example
   * 0.4
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      maxNum: 'MaxNum',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxNum: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearAdvanceRequest extends $dara.Model {
  clothes?: DetectWorkwearAdvanceRequestClothes;
  /**
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/zhangchaorun/tiyan/xxxx.jpg
   */
  imageUrlObject?: Readable;
  /**
   * @remarks
   * 1
   */
  labels?: string[];
  static names(): { [key: string]: string } {
    return {
      clothes: 'Clothes',
      imageUrlObject: 'ImageUrl',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: DetectWorkwearAdvanceRequestClothes,
      imageUrlObject: 'Readable',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.clothes && typeof (this.clothes as any).validate === 'function') {
      (this.clothes as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

