// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugBeginDialogueRequest extends $dara.Model {
  /**
   * @example
   * 10086
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 135815*****
   */
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8a503680-815d-473e-a9b0-e010f47a64d2
   */
  conversationId?: string;
  /**
   * @example
   * {}
   */
  initialContext?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8a503680-815d-473e-a9b0-e010f47a64d2
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversationId: 'ConversationId',
      initialContext: 'InitialContext',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      conversationId: 'string',
      initialContext: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

