// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class IntelligentCompositionAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/IntelligentComposition/IntelligentComposition3.jpg
   */
  imageURLObject?: Readable;
  /**
   * @example
   * 5
   */
  numBoxes?: number;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      numBoxes: 'NumBoxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      numBoxes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

