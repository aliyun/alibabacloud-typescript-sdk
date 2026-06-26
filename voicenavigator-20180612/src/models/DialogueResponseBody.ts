// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action to be performed.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * The action parameters.
   * 
   * @example
   * {\\"duration\\":2420,\\"endTime\\":1651717326805,\\"hangUpDirection\\":\\"client\\",\\"hasLastPlaybackCompleted\\":true,\\"startTime\\":1651717324385}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the IVR greeting can be interrupted.
   * 
   * @example
   * true
   */
  interruptible?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DB8BA95-4513-54B9-9C67-A28909CFB4AD
   */
  requestId?: string;
  /**
   * @remarks
   * The text to be broadcasted.
   * 
   * @example
   * 您好，欢迎致电智能助手
   */
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

