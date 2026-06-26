// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugBeginDialogueRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 135815*****
   */
  callingNumber?: string;
  /**
   * @remarks
   * The unique ID of the conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * 8a503680-815d-473e-a9b0-e010f47a64d2
   */
  conversationId?: string;
  /**
   * @remarks
   * The initial context of the conversation.
   * 
   * @example
   * {}
   */
  initialContext?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 8a503680-815d-473e-a9b0-e010f47a64d2
   */
  instanceId?: string;
  shouldUseSandBox?: boolean;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
      shouldUseSandBox: 'ShouldUseSandBox',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      initialContext: 'string',
      instanceId: 'string',
      shouldUseSandBox: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

