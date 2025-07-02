// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchWindow } from "./BatchWindow";
import { DeadLetterQueue } from "./DeadLetterQueue";
import { RetryStrategy } from "./RetryStrategy";


export class RunOptions extends $dara.Model {
  batchWindow?: BatchWindow;
  deadLetterQueue?: DeadLetterQueue;
  /**
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @example
   * event-streaming
   */
  mode?: string;
  retryStrategy?: RetryStrategy;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'batchWindow',
      deadLetterQueue: 'deadLetterQueue',
      errorsTolerance: 'errorsTolerance',
      mode: 'mode',
      retryStrategy: 'retryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: BatchWindow,
      deadLetterQueue: DeadLetterQueue,
      errorsTolerance: 'string',
      mode: 'string',
      retryStrategy: RetryStrategy,
    };
  }

  validate() {
    if(this.batchWindow && typeof (this.batchWindow as any).validate === 'function') {
      (this.batchWindow as any).validate();
    }
    if(this.deadLetterQueue && typeof (this.deadLetterQueue as any).validate === 'function') {
      (this.deadLetterQueue as any).validate();
    }
    if(this.retryStrategy && typeof (this.retryStrategy as any).validate === 'function') {
      (this.retryStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

