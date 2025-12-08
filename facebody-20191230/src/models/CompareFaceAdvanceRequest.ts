// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CompareFaceAdvanceRequest extends $dara.Model {
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
  imageURLAObject?: Readable;
  /**
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/CompareFace/CompareFace-left1.png
   */
  imageURLBObject?: Readable;
  /**
   * @example
   * 75.12
   */
  qualityScoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageDataA: 'ImageDataA',
      imageDataB: 'ImageDataB',
      imageURLAObject: 'ImageURLA',
      imageURLBObject: 'ImageURLB',
      qualityScoreThreshold: 'QualityScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageDataA: 'string',
      imageDataB: 'string',
      imageURLAObject: 'Readable',
      imageURLBObject: 'Readable',
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

