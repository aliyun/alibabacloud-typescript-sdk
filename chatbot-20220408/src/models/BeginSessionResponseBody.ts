// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionResponseBody extends $dara.Model {
  asrMaxEndSilence?: number;
  interruptible?: boolean;
  /**
   * @example
   * 149C7528-C104-1B50-A4F9-0C5907A8AD9D
   */
  requestId?: string;
  /**
   * @remarks
   * 静默超时时间
   * 
   * @example
   * 5
   */
  silenceReplyTimeout?: number;
  /**
   * @example
   * 智能对话机器人为您服务，请问有什么可以帮您？
   */
  welcomeMessage?: string;
  static names(): { [key: string]: string } {
    return {
      asrMaxEndSilence: 'AsrMaxEndSilence',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      silenceReplyTimeout: 'SilenceReplyTimeout',
      welcomeMessage: 'WelcomeMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrMaxEndSilence: 'number',
      interruptible: 'boolean',
      requestId: 'string',
      silenceReplyTimeout: 'number',
      welcomeMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

