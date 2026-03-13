// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchWindow } from "./BatchWindow";
import { DeadLetterQueue } from "./DeadLetterQueue";
import { RetryStrategy } from "./RetryStrategy";


export class RunOptions extends $dara.Model {
  /**
   * @remarks
   * The batch window configurations.
   */
  batchWindow?: BatchWindow;
  /**
   * @remarks
   * Whether to enable dead-letter queues. If you configure this parameter, dead-letter queues are enabled. By default, dead-letter queues are not enabled and messages are discarded when the retry policy is exhausted. Queues of Simple Message Queue (formerly MNS), ApsaraMQ for RocketMQ, and ApsaraMQ for Kafka, and EventBridge event buses can be used as dead-letter queues.
   */
  deadLetterQueue?: DeadLetterQueue;
  /**
   * @remarks
   * The fault tolerance policy. Valid values:
   * 
   * *   **NONE**: does not tolerate exceptions.
   * *   **ALL**: tolerates all exceptions.
   * 
   * >  The default value is **NONE**.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The underlying application mode when message data is pushed to Function Compute. Valid values:
   * 
   * *   **event-streaming**: the event streaming mode. In this mode, events are pushed in arrays. One or more message events are pushed to the function in batches based on your push configurations. This mode is suitable for end-to-end streaming data processing scenarios. The event streaming mode supports the following event sources: Simple Message Queue (formerly MNS), ApsaraMQ for RocketMQ, ApsaraMQ for RabbitMQ, ApsaraMQ for Kafka, ApsaraMQ for MQTT, and Data Transmission Service (DTS).
   * *   **event-driven**: the event mode. In event mode, a single message is passed to the function as event parameters at a time. Events follow the CloudEvents specifications. The event mode supports the following event sources: Default, Simple Message Queue (formerly MNS), ApsaraMQ for RocketMQ, and ApsaraMQ for RabbitMQ. In this mode, batch configurations are not supported.
   * 
   * @example
   * event-streaming
   */
  mode?: string;
  /**
   * @remarks
   * The retry policy that you want to use if events fail to be pushed.
   */
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

