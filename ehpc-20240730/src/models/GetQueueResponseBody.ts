// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQueueResponseBodyQueue } from "./GetQueueResponseBodyQueue";


export class GetQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queue configurations.
   */
  queue?: GetQueueResponseBodyQueue;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: GetQueueResponseBodyQueue,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queue && typeof (this.queue as any).validate === 'function') {
      (this.queue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

