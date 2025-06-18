// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestEventTargetsConcurrentConfig } from "./CreateRuleRequestEventTargetsConcurrentConfig";
import { CreateRuleRequestEventTargetsDeadLetterQueue } from "./CreateRuleRequestEventTargetsDeadLetterQueue";
import { CreateRuleRequestEventTargetsParamList } from "./CreateRuleRequestEventTargetsParamList";


export class CreateRuleRequestEventTargets extends $dara.Model {
  /**
   * @remarks
   * The concurrency configuration.
   */
  concurrentConfig?: CreateRuleRequestEventTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue. Events that are not processed or whose maximum number of retries is exceeded are written to the dead-letter queue. You can use queues in ApsaraMQ for RocketMQ, Simple Message Queue (SMQ, formerly MNS), and ApsaraMQ for Kafka as dead-letter queues. You can also use event buses in EventBridge as dead-letter queues.
   */
  deadLetterQueue?: CreateRuleRequestEventTargetsDeadLetterQueue;
  /**
   * @remarks
   * The endpoint of the event target.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance policy. Valid values: ALL and NONE. The value ALL specifies that fault tolerance is allowed. If an error occurs in an event, event processing is not blocked. If the event fails to be sent after the maximum number of retries specified by the retry policy is reached, the event is delivered to the dead-letter queue or discarded based on your configurations. The value NONE specifies that fault tolerance is not allowed. If an error occurs in an event and the event fails to be sent after the maximum number of retries specified by the retry policy is reached, event processing is blocked.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The ID of the event target.
   * 
   * This parameter is required.
   * 
   * @example
   * 12021
   */
  id?: string;
  /**
   * @remarks
   * The parameters that are configured for the event target.
   */
  paramList?: CreateRuleRequestEventTargetsParamList[];
  /**
   * @remarks
   * The retry policy that you want to use to push failed events. Valid values: BACKOFF_RETRY and EXPONENTIAL_DECAY_RETRY. BACKOFF_RETRY: A failed event can be retried up to three times. The interval between two consecutive retries is a random value from 10 seconds to 20 seconds. EXPONENTIAL_DECAY_RETRY: A failed event can be retried up to 176 times. The interval between two consecutive retries exponentially increases to a maximum of 512 seconds. The total retry time is 1 day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, and 512 seconds. The interval of 512 seconds is used for 167 retries.
   * 
   * @example
   * BACKOFF_RETRY
   */
  pushRetryStrategy?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * This parameter is required.
   * 
   * @example
   * acs.mns.queue
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      concurrentConfig: 'ConcurrentConfig',
      deadLetterQueue: 'DeadLetterQueue',
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      paramList: 'ParamList',
      pushRetryStrategy: 'PushRetryStrategy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentConfig: CreateRuleRequestEventTargetsConcurrentConfig,
      deadLetterQueue: CreateRuleRequestEventTargetsDeadLetterQueue,
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': CreateRuleRequestEventTargetsParamList },
      pushRetryStrategy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.concurrentConfig && typeof (this.concurrentConfig as any).validate === 'function') {
      (this.concurrentConfig as any).validate();
    }
    if(this.deadLetterQueue && typeof (this.deadLetterQueue as any).validate === 'function') {
      (this.deadLetterQueue as any).validate();
    }
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

