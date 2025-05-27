// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestRunOptionsBatchWindow } from "./CreateEventStreamingRequestRunOptionsBatchWindow";
import { CreateEventStreamingRequestRunOptionsDeadLetterQueue } from "./CreateEventStreamingRequestRunOptionsDeadLetterQueue";
import { CreateEventStreamingRequestRunOptionsRetryStrategy } from "./CreateEventStreamingRequestRunOptionsRetryStrategy";


export class CreateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: CreateEventStreamingRequestRunOptionsBatchWindow;
  /**
   * @remarks
   * Indicates whether dead-letter queues are enabled. By default, dead-letter queues are disabled. Events that fail to be pushed are discarded after the maximum number of retries that is specified by the retry policy is reached.
   */
  deadLetterQueue?: CreateEventStreamingRequestRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The exception tolerance policy. Valid values:
   * 
   * *   NONE: does not tolerate exceptions.
   * *   ALL: tolerates all exceptions.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The maximum number of concurrent threads.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The retry policy that you want to use if events fail to be pushed.
   */
  retryStrategy?: CreateEventStreamingRequestRunOptionsRetryStrategy;
  throttling?: number;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'BatchWindow',
      deadLetterQueue: 'DeadLetterQueue',
      errorsTolerance: 'ErrorsTolerance',
      maximumTasks: 'MaximumTasks',
      retryStrategy: 'RetryStrategy',
      throttling: 'Throttling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: CreateEventStreamingRequestRunOptionsBatchWindow,
      deadLetterQueue: CreateEventStreamingRequestRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: CreateEventStreamingRequestRunOptionsRetryStrategy,
      throttling: 'number',
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

