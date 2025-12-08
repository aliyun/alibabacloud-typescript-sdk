// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectFaceAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectFace/DetectFace1.png
   */
  imageURLObject?: Readable;
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
      imageURLObject: 'ImageURL',
      landmark: 'Landmark',
      maxFaceNumber: 'MaxFaceNumber',
      pose: 'Pose',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
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

