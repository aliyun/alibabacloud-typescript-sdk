// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ASR end-pointing detection time, in milliseconds.
   * 
   * @example
   * 700
   */
  asrMaxEndSilence?: number;
  /**
   * @remarks
   * Indicates whether voice playback is interruptible.
   * 
   * @example
   * false
   */
  interruptible?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 149C7528-C104-1B50-A4F9-0C5907A8AD9D
   */
  requestId?: string;
  /**
   * @remarks
   * The silence timeout, in seconds.
   * 
   * @example
   * 5
   */
  silenceReplyTimeout?: number;
  /**
   * @remarks
   * The welcome message.
   * 
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

