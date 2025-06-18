// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestRunOptionsBatchWindow } from "./UpdateEventStreamingRequestRunOptionsBatchWindow";
import { UpdateEventStreamingRequestRunOptionsBusinessOption } from "./UpdateEventStreamingRequestRunOptionsBusinessOption";
import { UpdateEventStreamingRequestRunOptionsDeadLetterQueue } from "./UpdateEventStreamingRequestRunOptionsDeadLetterQueue";
import { UpdateEventStreamingRequestRunOptionsRetryStrategy } from "./UpdateEventStreamingRequestRunOptionsRetryStrategy";


export class UpdateEventStreamingRequestRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: UpdateEventStreamingRequestRunOptionsBatchWindow;
  businessOption?: UpdateEventStreamingRequestRunOptionsBusinessOption;
  /**
   * @remarks
   * Specifies whether to enable dead-letter queues. By default, dead-letter queues are disabled. Events that fail to be pushed are discarded after the maximum number of retries that is specified by the retry policy is reached.
   */
  deadLetterQueue?: UpdateEventStreamingRequestRunOptionsDeadLetterQueue;
  /**
   * @remarks
   * The exception tolerance policy. Valid values: NONE and ALL.
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
  retryStrategy?: UpdateEventStreamingRequestRunOptionsRetryStrategy;
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
      batchWindow: UpdateEventStreamingRequestRunOptionsBatchWindow,
      businessOption: UpdateEventStreamingRequestRunOptionsBusinessOption,
      deadLetterQueue: UpdateEventStreamingRequestRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: UpdateEventStreamingRequestRunOptionsRetryStrategy,
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

