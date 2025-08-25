// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntelligentCompositionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/imageenhan/IntelligentComposition/IntelligentComposition3.jpg
   */
  imageURL?: string;
  /**
   * @example
   * 5
   */
  numBoxes?: number;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      numBoxes: 'NumBoxes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
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

