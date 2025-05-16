// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherExpansionDialogueResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  chineseResult?: string;
  /**
   * @example
   * 1
   */
  englishResult?: string;
  /**
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @example
   * true
   */
  isOffTopicControl?: boolean;
  /**
   * @example
   * true
   */
  isOnTopic?: boolean;
  /**
   * @example
   * 2
   */
  questionIndex?: number;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isOffTopicControl: 'isOffTopicControl',
      isOnTopic: 'isOnTopic',
      questionIndex: 'questionIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
      isFinish: 'boolean',
      isOffTopicControl: 'boolean',
      isOnTopic: 'boolean',
      questionIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

