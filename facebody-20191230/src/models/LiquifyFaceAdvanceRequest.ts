// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class LiquifyFaceAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/LiquifyFace/LiquifyFace1.png
   */
  imageURLObject?: Readable;
  /**
   * @example
   * 1.0
   */
  slimDegree?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      slimDegree: 'SlimDegree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      slimDegree: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

