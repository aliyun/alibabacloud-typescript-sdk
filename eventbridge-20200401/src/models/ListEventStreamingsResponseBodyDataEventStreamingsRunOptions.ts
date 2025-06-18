// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow } from "./ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow";
import { ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption } from "./ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption";
import { ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue } from "./ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue";
import { ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy } from "./ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy";


export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window.
   */
  batchWindow?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow;
  businessOption?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption;
  /**
   * @remarks
   * Indicates whether dead-letter queues are enabled. By default, dead-letter queues are disabled. Events that fail to be pushed are discarded after the maximum number of retries that is specified by the retry policy is reached.
   */
  deadLetterQueue?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue;
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
   * The retry policy that is used if events fail to be pushed.
   */
  retryStrategy?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy;
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
      batchWindow: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow,
      businessOption: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBusinessOption,
      deadLetterQueue: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      retryStrategy: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy,
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

