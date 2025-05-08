// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWaitingRoomRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID, used for tracking the progress of request processing.
   * 
   * @example
   * 9bfe9d95-7bf6-469d-a628-ed7bc9f25073
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

