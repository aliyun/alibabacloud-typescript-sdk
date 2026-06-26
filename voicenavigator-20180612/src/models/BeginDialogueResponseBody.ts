// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action to perform.
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
   * {\\"duration\\":31340,\\"endTime\\":1638243934786,\\"hangUpDirection\\":\\"ivr\\",\\"startTime\\":1638243903446}
   */
  actionParams?: string;
  /**
   * @remarks
   * Specifies whether the IVR playback can be interrupted.
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
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * The text response.
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

