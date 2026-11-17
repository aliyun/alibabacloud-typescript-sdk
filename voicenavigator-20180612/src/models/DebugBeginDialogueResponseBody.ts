// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugBeginDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action instruction.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * The parameters of the action instruction.
   * 
   * @example
   * {"predictStopLongPauseConfig":"{\\"NoSemantics\\":1800, \\"PauseIntent\\":2500, \\"IncompleteSemantics\\":2000}","predictStopNluResponseMinTime":400,"streamEnd":true,"predictStopNluResponseMiddleWaitTime":5000,"asrMaxEndSilence":600,"predictStopAsrDelay":250,"asrMaxBeginSilence":5000,"predictStopVad":300,"predictStopLongPause":1400,"enableStreamChat":true}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the IVR announcement can be interrupted.
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
   * The announcement content.
   * 
   * @example
   * Hello, welcome to the intelligent assistant
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

