// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatQuestionRespResponseBodyDataQuestionList } from "./GetChatQuestionRespResponseBodyDataQuestionList";


export class GetChatQuestionRespResponseBodyData extends $dara.Model {
  /**
   * @example
   * PROCESSING
   */
  currentState?: string;
  questionList?: GetChatQuestionRespResponseBodyDataQuestionList[];
  static names(): { [key: string]: string } {
    return {
      currentState: 'currentState',
      questionList: 'questionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentState: 'string',
      questionList: { 'type': 'array', 'itemType': GetChatQuestionRespResponseBodyDataQuestionList },
    };
  }

  validate() {
    if(Array.isArray(this.questionList)) {
      $dara.Model.validateArray(this.questionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

