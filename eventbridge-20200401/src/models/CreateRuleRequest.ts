// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestEventTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent executions.
   * 
   * @example
   * 2
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

export class CreateRuleRequestEventTargetsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The ARN of the dead-letter queue. Unprocessed events or events that exceed the retry count are written to the dead-letter queue. Simple Message Queue (formerly MNS) and ApsaraMQ for RocketMQ are supported.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:/queues/deadletterqueue
   */
  arn?: string;
  /**
   * @remarks
   * The network type.
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
   * sg-2d****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-m12345****
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

export class CreateRuleRequestEventTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The format of the event target parameter. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource parameter of the event target. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * {"key"="value"}
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

export class CreateRuleRequestEventTargets extends $dara.Model {
  /**
   * @remarks
   * The concurrency control configuration.
   */
  concurrentConfig?: CreateRuleRequestEventTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue. Unprocessed events or events that exceed the retry count are written to the dead-letter queue. Supported queue types include ApsaraMQ for RocketMQ, Simple Message Queue (formerly MNS), ApsaraMQ for Kafka, and EventBridge event buses.
   */
  deadLetterQueue?: CreateRuleRequestEventTargetsDeadLetterQueue;
  /**
   * @remarks
   * The endpoint URL for delivery.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance strategy. Valid values:
   * - ALL: allows fault tolerance. Exceptions do not block execution. If the retry strategy is exhausted, messages are delivered to the dead-letter queue or discarded based on the configuration.
   * - NONE: disables fault tolerance. Exceptions block execution when the retry strategy is exhausted.
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
  paramList?: CreateRuleRequestEventTargetsParamList[];
  /**
   * @remarks
   * The retry policy for pushing events. Valid values:
   * - BACKOFF_RETRY: backoff retry policy. The system retries 3 times, with a random interval of 10 to 20 seconds between each retry.
   * - EXPONENTIAL_DECAY_RETRY: exponential decay retry. The system retries 176 times, with the interval exponentially incrementing to 512 seconds. The total retry time is 1 day. The specific intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, and then 512 seconds for the remaining 167 retries.
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

export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * Filter rule for Simple Message Queue (formerly MNS) (SMQ)
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The list of event targets.
   */
  eventTargets?: CreateRuleRequestEventTargets[];
  /**
   * @remarks
   * The event pattern in JSON format. The following patterns are supported:
   * - stringEqual pattern
   * - stringExpression pattern
   * Each field supports up to five expressions in a map structure.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "source": [
   *     {
   *       "prefix": "acs."
   *     }
   *   ],
   *   "type": [
   *     {
   *       "prefix": "oss:ObjectReplication"
   *     }
   *   ],
   *   "subject": [
   *     {
   *       "prefix": "acs:oss:cn-hangzhou:123456789098****:my-movie-bucket/",
   *       "suffix": ".txt"
   *     }
   *   ]
   * }
   */
  filterPattern?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * SMQRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * - ENABLE: The rule is enabled. This is the default status.
   * - DISABLE: The rule is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTargets: 'EventTargets',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventTargets: { 'type': 'array', 'itemType': CreateRuleRequestEventTargets },
      filterPattern: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTargets)) {
      $dara.Model.validateArray(this.eventTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

