// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CollectedNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Broadcast
   */
  action?: string;
  /**
   * @example
   * {\\"duration\\":31340,\\"endTime\\":1638243934786,\\"hangUpDirection\\":\\"ivr\\",\\"startTime\\":1638243903446}
   */
  actionParams?: string;
  /**
   * @example
   * false
   */
  interruptible?: boolean;
  /**
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
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

