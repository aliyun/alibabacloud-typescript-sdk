// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectedNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies the next action to perform.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * The parameters for the action.
   * 
   * @example
   * {\\"duration\\":31340,\\"endTime\\":1638243934786,\\"hangUpDirection\\":\\"ivr\\",\\"startTime\\":1638243903446}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the IVR playback can be interrupted.
   * 
   * @example
   * false
   */
  interruptible?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  requestId?: string;
  /**
   * @remarks
   * The text to play back to the user.
   * 
   * @example
   * 收号内容是123
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

