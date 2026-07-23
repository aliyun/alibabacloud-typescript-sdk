// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InterruptForArbitrationRequestInterrupt extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  submit?: boolean;
  static names(): { [key: string]: string } {
    return {
      submit: 'Submit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submit: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptForArbitrationRequest extends $dara.Model {
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
  interrupt?: InterruptForArbitrationRequestInterrupt;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      chatId: 'ChatId',
      hubRequestId: 'HubRequestId',
      interrupt: 'Interrupt',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      chatId: 'string',
      hubRequestId: 'string',
      interrupt: InterruptForArbitrationRequestInterrupt,
      sessionId: 'string',
    };
  }

  validate() {
    if(this.interrupt && typeof (this.interrupt as any).validate === 'function') {
      (this.interrupt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

