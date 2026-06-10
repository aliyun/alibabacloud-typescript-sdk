// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDialogueFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dialogue flow.
   * 
   * This parameter is required.
   * 
   * @example
   * caab25d1-1f30-4996-8135-0036f5661b43
   */
  dialogueFlowId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * d7c28efb-47f7-4a85-a522-5038e30a0b98
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowId: 'DialogueFlowId',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowId: 'string',
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

