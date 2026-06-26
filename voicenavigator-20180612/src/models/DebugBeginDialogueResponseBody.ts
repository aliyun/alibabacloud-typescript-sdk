// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugBeginDialogueResponseBody extends $dara.Model {
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
   * {}
   */
  actionParams?: string;
  /**
   * @remarks
   * Specifies whether the Interactive Voice Response (IVR) broadcast can be interrupted.
   * 
   * @example
   * true
   */
  interruptible?: boolean;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * The broadcast content.
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

