// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RecognizeCharacterAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeCharacter/RecognizeCharacter5.jpg
   */
  imageURLObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  minHeight?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  outputProbability?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      minHeight: 'MinHeight',
      outputProbability: 'OutputProbability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      minHeight: 'number',
      outputProbability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

