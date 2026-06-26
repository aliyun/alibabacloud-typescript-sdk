// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugDialogueRequest extends $dara.Model {
  /**
   * @remarks
   * The context of the conversation.
   * 
   * @example
   * {}
   */
  additionalContext?: string;
  /**
   * @remarks
   * The ID of the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 7cefbff0-8d50-4d6f-b93c-73cee23c1555
   */
  conversationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  instanceId?: string;
  /**
   * @remarks
   * The user\\"s utterance.
   * 
   * This parameter is required.
   * 
   * @example
   * 是的
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContext: 'AdditionalContext',
      conversationId: 'ConversationId',
      instanceId: 'InstanceId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContext: 'string',
      conversationId: 'string',
      instanceId: 'string',
      utterance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

