// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugDialogueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action.
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
   * Indicates whether the IVR broadcast can be interrupted.
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
   * The broadcast content.
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

