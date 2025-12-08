// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectFace/DetectFace1.png
   */
  imageURL?: string;
  /**
   * @example
   * true
   */
  landmark?: boolean;
  /**
   * @example
   * 1
   */
  maxFaceNumber?: number;
  /**
   * @example
   * true
   */
  pose?: boolean;
  /**
   * @example
   * true
   */
  quality?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      landmark: 'Landmark',
      maxFaceNumber: 'MaxFaceNumber',
      pose: 'Pose',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      landmark: 'boolean',
      maxFaceNumber: 'number',
      pose: 'boolean',
      quality: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

