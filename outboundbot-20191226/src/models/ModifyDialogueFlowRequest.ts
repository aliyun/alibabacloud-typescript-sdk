// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDialogueFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dialogueFlowDefinition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 390515b5-6115-4ccf-83e2-52d5bfaf2ddf
   */
  dialogueFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowDefinition: 'DialogueFlowDefinition',
      dialogueFlowId: 'DialogueFlowId',
      instanceId: 'InstanceId',
      isDrafted: 'IsDrafted',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowDefinition: 'string',
      dialogueFlowId: 'string',
      instanceId: 'string',
      isDrafted: 'boolean',
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

