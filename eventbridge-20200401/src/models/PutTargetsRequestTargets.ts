// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutTargetsRequestTargetsConcurrentConfig } from "./PutTargetsRequestTargetsConcurrentConfig";
import { PutTargetsRequestTargetsDeadLetterQueue } from "./PutTargetsRequestTargetsDeadLetterQueue";
import { PutTargetsRequestTargetsParamList } from "./PutTargetsRequestTargetsParamList";


export class PutTargetsRequestTargets extends $dara.Model {
  concurrentConfig?: PutTargetsRequestTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue. Events that are not processed or whose maximum retries have been exceeded are written to the dead-letter queue. The dead-letter queue feature supports the following queue types: Message Queue for Apache RocketMQ, Message Service, Message Queue for Apache Kafka, and event bus.
   */
  deadLetterQueue?: PutTargetsRequestTargetsDeadLetterQueue;
  /**
   * @remarks
   * The endpoint of the event target.
   * 
   * @example
   * acs:fc:cn-hangzhou:123456789098****:services/guide.LATEST/functions/HelloFC
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance policy. Valid values:
   * 
   * * **ALL**: ignores the error. Fault tolerance is allowed. If an error occurs, event processing is not blocked. If the message exceeds the number of retries specified by the retry policy, the message is delivered to a dead-letter queue or discarded based on your configurations.
   * 
   * * **NONE**: does not ignore the error. Fault tolerance is prohibited. If an error occurs and the message exceeds the number of retries specified by the retry policy, event processing is blocked.
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
   * Mlm123456JHd2RsRoKw
   */
  id?: string;
  /**
   * @remarks
   * The parameters that are configured for the event target.
   */
  paramList?: PutTargetsRequestTargetsParamList[];
  /**
   * @remarks
   * The retry policy for pushing the event. Valid values:
   * 
   * * **BACKOFF_RETRY**: backoff retry. A failed event can be retried up to three times. The interval between two consecutive retries is a random value from 10 to 20. Unit: seconds.
   * 
   * * **EXPONENTIAL_DECAY_RETRY**: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds. The interval of 512 seconds can be used up to one hundred and sixty-seven times in total.
   * 
   * @example
   * BACKOFFRETRY
   */
  pushRetryStrategy?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters.](https://www.alibabacloud.com/help/en/eventbridge/latest/event-target-parameters)
   * 
   * This parameter is required.
   * 
   * @example
   * acs.fc.function
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
      concurrentConfig: PutTargetsRequestTargetsConcurrentConfig,
      deadLetterQueue: PutTargetsRequestTargetsDeadLetterQueue,
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': PutTargetsRequestTargetsParamList },
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

