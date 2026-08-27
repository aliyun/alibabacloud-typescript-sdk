// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugCollectedNumberResponseBody extends $dara.Model {
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
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  requestId?: string;
  /**
   * @remarks
   * The text content of the announcement.
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

