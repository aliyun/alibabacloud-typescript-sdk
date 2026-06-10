// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGlobalQuestionRequest extends $dara.Model {
  /**
   * @remarks
   * The global question ID.
   * 
   * > You can call the ListGlobalQuestions operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35f1361e-4377-494c-9f10-4274bda0317f
   */
  globalQuestionId?: string;
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
      globalQuestionId: 'GlobalQuestionId',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestionId: 'string',
      instanceId: 'string',
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

