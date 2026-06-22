// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GuidingQuestion extends $dara.Model {
  /**
   * @remarks
   * The answer to the question.
   */
  answer?: string;
  /**
   * @remarks
   * The guiding question.
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

