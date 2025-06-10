// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class RunMedQAAdvanceRequestAnswerImageURLList extends $dara.Model {
  /**
   * @example
   * https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/imageprocess/roseola.jpeg
   */
  answerImageURLObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      answerImageURLObject: 'AnswerImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageURLObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

