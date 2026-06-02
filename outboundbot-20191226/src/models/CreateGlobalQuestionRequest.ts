// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answers?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  globalQuestionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * COMMON
   */
  globalQuestionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  questions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36fea72b-d6fa-4974-ace7-19ffe3f622fb
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

