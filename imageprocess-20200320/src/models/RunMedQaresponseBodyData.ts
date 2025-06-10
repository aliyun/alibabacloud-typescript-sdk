// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMedQAResponseBodyData extends $dara.Model {
  /**
   * @example
   * text
   */
  answerType?: string;
  options?: string[];
  question?: string;
  /**
   * @example
   * age
   */
  questionType?: string;
  reports?: { [key: string]: string };
  /**
   * @example
   * d1f6a6c2444f4c01adfadd413938e5c7
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      options: 'Options',
      question: 'Question',
      questionType: 'QuestionType',
      reports: 'Reports',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'string',
      options: { 'type': 'array', 'itemType': 'string' },
      question: 'string',
      questionType: 'string',
      reports: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    if(this.reports) {
      $dara.Model.validateMap(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

