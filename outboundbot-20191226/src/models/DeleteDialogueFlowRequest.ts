// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDialogueFlowRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40a1457a-d2f3-43cf-ac81-c9e14cf07d88
   */
  dialogueFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
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

