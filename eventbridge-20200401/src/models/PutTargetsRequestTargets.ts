// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutTargetsRequestTargetsConcurrentConfig } from "./PutTargetsRequestTargetsConcurrentConfig";
import { PutTargetsRequestTargetsDeadLetterQueue } from "./PutTargetsRequestTargetsDeadLetterQueue";
import { PutTargetsRequestTargetsParamList } from "./PutTargetsRequestTargetsParamList";


export class PutTargetsRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The concurrency configuration.
   */
  concurrentConfig?: PutTargetsRequestTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. You can use queues in ApsaraMQ for RocketMQ, Simple Message Queue (SMQ, formerly MNS), and ApsaraMQ for Kafka as dead-letter queues. You can also use event buses in EventBridge as dead-letter queues.
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
   * *   **ALL**: allows fault tolerance. If an error occurs, event processing is not blocked. If the message exceeds the number of retries specified by the retry policy, the message is delivered to a dead-letter queue or discarded based on your configurations.
   * *   **NONE**: prohibits fault tolerance. If an error occurs and the message exceeds the number of retries specified by the retry policy, event processing is blocked.
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
   * The retry policy to be used to push events. Valid values:
   * 
   * *   **BACKOFF_RETRY**: backoff retry. A failed event can be retried up to three times. The interval between two consecutive retries is a random value from 10 seconds to 20 seconds.
   * *   **EXPONENTIAL_DECAY_RETRY**: exponential decay retry. A failed event can be retried up to 176 times. The interval between two consecutive retries exponentially increases to a maximum of 512 seconds. The total retry time is 1 day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, and 512 seconds. The interval of 512 seconds is used for 167 retries.
   * 
   * @example
   * BACKOFFRETRY
   */
  pushRetryStrategy?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
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

