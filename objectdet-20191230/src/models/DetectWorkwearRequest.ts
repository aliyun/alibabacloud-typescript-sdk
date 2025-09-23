// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectWorkwearRequestClothes extends $dara.Model {
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

export class DetectWorkwearRequest extends $dara.Model {
  clothes?: DetectWorkwearRequestClothes;
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
      clothes: 'Clothes',
      imageUrl: 'ImageUrl',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothes: DetectWorkwearRequestClothes,
      imageUrl: 'string',
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

