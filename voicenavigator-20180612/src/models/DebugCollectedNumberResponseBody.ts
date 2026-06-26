// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugCollectedNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The next action that Voice Navigator performs.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * The parameters for the next action.
   * 
   * @example
   * {}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the voice response can be interrupted.
   * 
   * @example
   * true
   */
  interruptible?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  requestId?: string;
  /**
   * @remarks
   * The text that Voice Navigator plays to the user.
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

