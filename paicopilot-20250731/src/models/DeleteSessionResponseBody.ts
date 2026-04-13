// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  /**
   * @example
   * se-p4k******vx2y
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

