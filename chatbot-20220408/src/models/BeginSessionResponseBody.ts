// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Automatic Speech Recognition (ASR) end-of-speech detection time. Unit: milliseconds.
   * 
   * @example
   * 700
   */
  asrMaxEndSilence?: number;
  /**
   * @remarks
   * Indicates whether the voice broadcast can be interrupted.
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
   * The silence timeout period. Unit: seconds.
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
   * The intelligent chatbot is at your service. How can I help you?
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

