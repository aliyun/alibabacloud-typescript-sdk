// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The next action returned by the dialogue engine.
   * 
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @remarks
   * Parameters for the returned action, as a JSON string.
   * 
   * @example
   * {}
   */
  actionParams?: string;
  /**
   * @remarks
   * Indicates whether the Interactive Voice Response (IVR) playback can be interrupted.
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
   * d74d6290-7cbe-4436-b5d7-014ebb0f4060
   */
  requestId?: string;
  /**
   * @remarks
   * The textual response from the dialogue engine.
   * 
   * @example
   * 80d11be3-faad-4101-b4b0-59dbea28aaf0
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

