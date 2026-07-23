// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsRequestTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent executions for the event target.
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
   * The Alibaba Cloud Resource Name (ARN) of the dead-letter queue.
   * 
   * @example
   * Acs:mns:cn-hangzhou:123456789098****:/queues/deadletterqueue
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
   */
  network?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The VSwitch IDs.
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * The format of the parameter value. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The key of the parameter. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The template for the parameter value. This parameter applies only when `Form` is set to `TEMPLATE`.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value of the parameter.
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
   * The concurrency control settings.
   */
  concurrentConfig?: PutTargetsRequestTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue (DLQ) to which events are sent after all retry attempts fail. Supported DLQ types include Message Queue for Apache RocketMQ, Message Service (MNS), Message Queue for Apache Kafka, and EventBridge.
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
   * - **ALL**: Enables fault tolerance. If an error occurs, execution continues. After the retry attempts defined by the retry strategy are exhausted, the event is sent to the configured dead-letter queue or discarded.
   * 
   * - **NONE**: Disables fault tolerance. If an error persists after all retry attempts fail, execution is blocked.
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
   * A list of parameters for the event target.
   */
  paramList?: PutTargetsRequestTargetsParamList[];
  /**
   * @remarks
   * The retry strategy for pushing events. Valid values:
   * 
   * - **BACKOFF_RETRY**: The event is retried up to three times at random intervals between 10 and 20 seconds.
   * 
   * - **EXPONENTIAL_DECAY_RETRY**: The event is retried up to 176 times over 24 hours. The retry interval starts at 1 second, doubles with each attempt (1, 2, 4, ..., 256 seconds), and is capped at 512 seconds for all subsequent retries.
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
   * A list of event targets to create or update. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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

