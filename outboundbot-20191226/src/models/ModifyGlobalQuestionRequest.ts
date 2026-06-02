// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGlobalQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  answers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ad80de88-1661-445a-92ec-bf88dc45d581
   */
  globalQuestionId?: string;
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
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
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
   * 19ac2375-53e3-477f-abe9-6cd334227981
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

