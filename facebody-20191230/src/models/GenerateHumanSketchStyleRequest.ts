// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateHumanSketchStyleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/GenerateHumanSketchStyle/GenerateHumanSketchStyle7.png
   */
  imageURL?: string;
  /**
   * @example
   * head
   */
  returnType?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      returnType: 'ReturnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      returnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

