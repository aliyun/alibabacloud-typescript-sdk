// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestEventTargetsConcurrentConfig } from "./CreateRuleRequestEventTargetsConcurrentConfig";
import { CreateRuleRequestEventTargetsDeadLetterQueue } from "./CreateRuleRequestEventTargetsDeadLetterQueue";
import { CreateRuleRequestEventTargetsParamList } from "./CreateRuleRequestEventTargetsParamList";


export class CreateRuleRequestEventTargets extends $dara.Model {
  concurrentConfig?: CreateRuleRequestEventTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The dead-letter queue feature is supported by the following queue types: Message Queue for Apache RocketMQ, Message Service (MNS), Message Queue for Apache Kafka, and EventBridge.
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
   * The fault tolerance policy. Valid values: ALL: allows fault tolerance. If an error occurs, the event processing is not blocked. If the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the message is delivered to the dead-letter queue or discarded based on your configurations. NONE: does not allow fault tolerance. If an error occurs and the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the event processing is blocked.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The ID of the custom event target.
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
   * The retry policy that is used to push events. Valid values: BACKOFF_RETRY: backoff retry. If an event failed to be pushed, it can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. If an event failed to be pushed, it can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds. The interval of 512 seconds is used for 167 retries.
   * 
   * @example
   * BACKOFF_RETRY
   */
  pushRetryStrategy?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters.](https://www.alibabacloud.com/help/en/eventbridge/latest/event-target-parameters)
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

