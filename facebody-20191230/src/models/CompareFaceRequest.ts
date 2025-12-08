// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFaceRequest extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgK****
   */
  imageDataA?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgQ****
   */
  imageDataB?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFace/CompareFace-right1.png
   */
  imageURLA?: string;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFace/CompareFace-left1.png
   */
  imageURLB?: string;
  /**
   * @example
   * 75.12
   */
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageDataA: 'ImageDataA',
      imageDataB: 'ImageDataB',
      imageURLA: 'ImageURLA',
      imageURLB: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageDataA: 'string',
      imageDataB: 'string',
      imageURLA: 'string',
      imageURLB: 'string',
      qualityScoreThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

