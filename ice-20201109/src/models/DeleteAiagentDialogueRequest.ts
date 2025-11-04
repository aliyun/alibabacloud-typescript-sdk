// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIAgentDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dialog that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18*******
   */
  dialogueId?: string;
  nodeId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6d594e7f55624c47a48789******
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueId: 'DialogueId',
      nodeId: 'NodeId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueId: 'string',
      nodeId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

