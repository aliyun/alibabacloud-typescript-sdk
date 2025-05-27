// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataRunOptionsBatchWindow } from "./GetEventStreamingResponseBodyDataRunOptionsBatchWindow";
import { GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue } from "./GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue";
import { GetEventStreamingResponseBodyDataRunOptionsRetryStrategy } from "./GetEventStreamingResponseBodyDataRunOptionsRetryStrategy";


export class GetEventStreamingResponseBodyDataRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: GetEventStreamingResponseBodyDataRunOptionsBatchWindow;
  /**
   * @remarks
   * Indicates whether dead-letter queues are enabled. By default, dead-letter queues are disabled. Messages that fail to be pushed after allowed retries as specified by the retry policy are discarded.
   */
  deadLetterQueue?: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The fault tolerance policy. The value NONE specifies that faults are not tolerated, and the value All specifies that all faults are tolerated.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The concurrency level.
   * 
   * @example
   * 2
   */
  maximumTasks?: number;
  /**
   * @remarks
   * The information about the retry policy that is used if the event fails to be pushed.
   */
  retryStrategy?: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy;
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
      batchWindow: GetEventStreamingResponseBodyDataRunOptionsBatchWindow,
      deadLetterQueue: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy,
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

