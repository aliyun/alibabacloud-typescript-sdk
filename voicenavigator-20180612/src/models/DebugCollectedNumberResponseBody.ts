// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugCollectedNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @example
   * {}
   */
  actionParams?: string;
  /**
   * @example
   * true
   */
  interruptible?: boolean;
  /**
   * @example
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  requestId?: string;
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

