// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotChatResponseBodyDataMessagesKnowledge } from "./BeeBotChatResponseBodyDataMessagesKnowledge";
import { BeeBotChatResponseBodyDataMessagesRecommends } from "./BeeBotChatResponseBodyDataMessagesRecommends";
import { BeeBotChatResponseBodyDataMessagesText } from "./BeeBotChatResponseBodyDataMessagesText";


export class BeeBotChatResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * When AnswerType is Recommended, this field indicates the source of the recommended answer.
   * 
   * @example
   * KNOWLEDGE
   */
  answerSource?: string;
  /**
   * @remarks
   * The type of this message.
   * 
   * @example
   * Text
   */
  answerType?: string;
  /**
   * @remarks
   * When AnswerType is Knowledge, this field contains the Knowledge object returned by the robot.
   */
  knowledge?: BeeBotChatResponseBodyDataMessagesKnowledge;
  /**
   * @remarks
   * When AnswerType is Recommended, this field contains a list of Recommendations returned by the robot.
   */
  recommends?: BeeBotChatResponseBodyDataMessagesRecommends[];
  /**
   * @remarks
   * When AnswerType is Text, this field contains the Text object returned by the robot.
   */
  text?: BeeBotChatResponseBodyDataMessagesText;
  static names(): { [key: string]: string } {
    return {
      answerSource: 'AnswerSource',
      answerType: 'AnswerType',
      knowledge: 'Knowledge',
      recommends: 'Recommends',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerSource: 'string',
      answerType: 'string',
      knowledge: BeeBotChatResponseBodyDataMessagesKnowledge,
      recommends: { 'type': 'array', 'itemType': BeeBotChatResponseBodyDataMessagesRecommends },
      text: BeeBotChatResponseBodyDataMessagesText,
    };
  }

  validate() {
    if(this.knowledge && typeof (this.knowledge as any).validate === 'function') {
      (this.knowledge as any).validate();
    }
    if(Array.isArray(this.recommends)) {
      $dara.Model.validateArray(this.recommends);
    }
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

