// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAITeacherSyncDialogueResponseBodyData extends $dara.Model {
  /**
   * @example
   * Thanks, Lily. Do you like meat, Lily?
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
  isOnTopic?: boolean;
  /**
   * @example
   * 2
   */
  questionIndex?: number;
  static names(): { [key: string]: string } {
    return {
      englishResult: 'englishResult',
      isFinish: 'isFinish',
      isOnTopic: 'isOnTopic',
      questionIndex: 'questionIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      englishResult: 'string',
      isFinish: 'boolean',
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

