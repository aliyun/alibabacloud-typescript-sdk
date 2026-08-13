// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueRequest extends $dara.Model {
  /**
   * @remarks
   * The session context.
   * 
   * @example
   * {}
   */
  additionalContext?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 10086
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 18851708605
   */
  callingNumber?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  conversationId?: string;
  emotion?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21e0b2a3-168d-4ba7-9009-afc42666eb54
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the instance owner.
   * 
   * @example
   * 1426738157626835
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The user utterance.
   * 
   * This parameter is required.
   * 
   * @example
   * 行吧，那我就不打扰您了，再见。
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      additionalContext: 'AdditionalContext',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      emotion: 'Emotion',
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalContext: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      emotion: 'string',
      instanceId: 'string',
      instanceOwnerId: 'number',
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

