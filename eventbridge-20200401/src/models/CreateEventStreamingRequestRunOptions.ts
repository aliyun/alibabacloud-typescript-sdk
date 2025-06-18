// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestRunOptionsBatchWindow } from "./CreateEventStreamingRequestRunOptionsBatchWindow";
import { CreateEventStreamingRequestRunOptionsBusinessOption } from "./CreateEventStreamingRequestRunOptionsBusinessOption";
import { CreateEventStreamingRequestRunOptionsDeadLetterQueue } from "./CreateEventStreamingRequestRunOptionsDeadLetterQueue";
import { CreateEventStreamingRequestRunOptionsRetryStrategy } from "./CreateEventStreamingRequestRunOptionsRetryStrategy";


export class CreateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: CreateEventStreamingRequestRunOptionsBatchWindow;
  businessOption?: CreateEventStreamingRequestRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable dead-letter queues. By default, dead-letter queues are disabled. Messages that fail to be pushed after the allowed retries as specified by the retry policy are discarded.
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
   * The maximum number of concurrent tasks.
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
      businessOption: 'BusinessOption',
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
      businessOption: CreateEventStreamingRequestRunOptionsBusinessOption,
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
    if(this.businessOption && typeof (this.businessOption as any).validate === 'function') {
      (this.businessOption as any).validate();
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

