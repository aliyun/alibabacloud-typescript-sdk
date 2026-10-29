// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsRequestTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 34
   */
  concurrency?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequestTargetsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The ARN of the dead-letter queue. Unprocessed events or events that exceed the maximum number of retries are written to the dead-letter queue.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:/queues/deadletterqueue
   * or
   * acs:mq:cn-hangzhou:123456789098****:/instances/MQ_INST_123456789098****_BX8QbBPL/topic/deadlettertopic
   * or
   * acs:alikafka:cn-hangzhou:123456789098****:instance/alikafka_post-cn-123456/topic/deadlettertopic
   * or
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/deadletterbus
   */
  arn?: string;
  /**
   * @remarks
   * The network type of the dead-letter queue.
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2vp****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-m5****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC where the dead-letter queue resides.
   * 
   * @example
   * vpc-2z****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      network: 'Network',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      network: 'string',
      securityGroupId: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequestTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The format of the event target parameter. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource parameter of the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The parameter template style of the event target.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value of the event target parameter.
   * 
   * @example
   * {\\"key\\"=\\"value\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The concurrency control configuration.
   */
  concurrentConfig?: PutTargetsRequestTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue. Unprocessed events or events that exceed the retry limit are written to the dead-letter queue. The supported queue types for the dead-letter queue include ApsaraMQ for RocketMQ, Simple Message Queue (formerly MNS), Message Queue for Apache Kafka, and EventBridge event bus.
   */
  deadLetterQueue?: PutTargetsRequestTargetsDeadLetterQueue;
  /**
   * @remarks
   * The delivery endpoint URL.
   * 
   * @example
   * acs:fc:cn-hangzhou:123456789098****:services/guide.LATEST/functions/HelloFC
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance strategy. Valid values:
   * 
   * - **ALL**: Allows fault tolerance. Exceptions are tolerated and do not block execution. If the retry strategy is exhausted, messages are delivered to the dead-letter queue or discarded based on the configuration.
   * 
   * - **NONE**: Disables fault tolerance. Exceptions are not tolerated. If an exception occurs and the retry strategy is exhausted, execution is blocked.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The custom ID of the event target.
   * 
   * This parameter is required.
   * 
   * @example
   * Mlm123456JHd2RsRoKw
   */
  id?: string;
  /**
   * @remarks
   * The parameters of the event target.
   */
  paramList?: PutTargetsRequestTargetsParamList[];
  /**
   * @remarks
   * The push retry policy. Valid values:
   * 
   * - **BACKOFF_RETRY**: Backoff retry policy. The system retries three times, and the interval between each retry is a random value between 10 and 20 seconds.
   * 
   * - **EXPONENTIAL_DECAY_RETRY**: Exponential decay retry. The system retries 176 times, and the interval between retries increments exponentially up to 512 seconds. The total retry time is one day. The specific intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512...512 seconds (167 intervals of 512 seconds in total).
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

export class PutTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * eventTest
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ssr-send-to-vendor-test01
   */
  ruleName?: string;
  /**
   * @remarks
   * The list of event targets to be added or updated. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * This parameter is required.
   */
  targets?: PutTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targets: { 'type': 'array', 'itemType': PutTargetsRequestTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

