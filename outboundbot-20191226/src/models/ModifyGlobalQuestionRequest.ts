// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON string containing an array of answers.
   * 
   * This parameter is required.
   * 
   * @example
   * ["你好,我是你的专属客服顾问."]
   */
  answers?: string;
  /**
   * @remarks
   * The unique ID of the global question.
   * 
   * This parameter is required.
   * 
   * @example
   * ad80de88-1661-445a-92ec-bf88dc45d581
   */
  globalQuestionId?: string;
  /**
   * @remarks
   * The global question name.
   * 
   * This parameter is required.
   * 
   * @example
   * 未识别全局问题
   */
  globalQuestionName?: string;
  /**
   * @remarks
   * The global question type.
   * 
   * This parameter is required.
   * 
   * @example
   * COMMON
   */
  globalQuestionType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * A JSON string containing an array of questions.
   * 
   * This parameter is required.
   * 
   * @example
   * ["你是谁","你叫什么"]
   */
  questions?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0fe7f71c-8771-42ef-9bb1-19aa16ae7120
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      globalQuestionId: 'GlobalQuestionId',
      globalQuestionName: 'GlobalQuestionName',
      globalQuestionType: 'GlobalQuestionType',
      instanceId: 'InstanceId',
      questions: 'Questions',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      globalQuestionId: 'string',
      globalQuestionName: 'string',
      globalQuestionType: 'string',
      instanceId: 'string',
      questions: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

