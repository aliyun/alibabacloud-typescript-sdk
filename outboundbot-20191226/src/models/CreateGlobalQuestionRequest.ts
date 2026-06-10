// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The answers to the global question.
   * 
   * This parameter is required.
   * 
   * @example
   * ["你好,您可以再说一遍吗","不好意思我刚才没有听清"]
   */
  answers?: string;
  /**
   * @remarks
   * The name of the global question.
   * 
   * This parameter is required.
   * 
   * @example
   * 未识别全局问题
   */
  globalQuestionName?: string;
  /**
   * @remarks
   * The type of the global question.
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
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
   * The questions that trigger the global question.
   * 
   * This parameter is required.
   * 
   * @example
   * ["未识别的用户问题"]
   */
  questions?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
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

