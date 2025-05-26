// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Answer } from "./Answer";


export class ContextualAnswerResponseBody extends $dara.Model {
  answer?: Answer;
  code?: string;
  message?: string;
  /**
   * @example
   * 22F081FB-90D7-525A-BFE4-D28DC906A28F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: Answer,
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

