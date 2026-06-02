// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogueFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MainFlow
   */
  dialogueFlowType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueName?: string;
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
   * 
   * @example
   * d0bf93dd-1a54-4f00-819e-c75502d38681
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowType: 'DialogueFlowType',
      dialogueName: 'DialogueName',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowType: 'string',
      dialogueName: 'string',
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

