// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterruptForArbitrationShrinkRequest extends $dara.Model {
  appId?: string;
  chatId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hubRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  interruptShrink?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      chatId: 'ChatId',
      hubRequestId: 'HubRequestId',
      interruptShrink: 'Interrupt',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      chatId: 'string',
      hubRequestId: 'string',
      interruptShrink: 'string',
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

