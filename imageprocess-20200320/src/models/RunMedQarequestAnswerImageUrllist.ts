// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMedQARequestAnswerImageURLList extends $dara.Model {
  /**
   * @example
   * https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/imageprocess/roseola.jpeg
   */
  answerImageURL?: string;
  static names(): { [key: string]: string } {
    return {
      answerImageURL: 'AnswerImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerImageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

