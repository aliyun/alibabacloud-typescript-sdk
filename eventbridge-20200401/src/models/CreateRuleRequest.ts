// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestEventTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent executions for the event target.
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
   * The Alibaba Cloud Resource Name (ARN) of the dead-letter queue. Events that fail to be processed or exceed the retry limit are sent to this ARN. Supported services for this parameter include Message Service (MNS) and Message Queue for Apache RocketMQ.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:/queues/deadletterqueue
   */
  arn?: string;
  /**
   * @remarks
   * The network type.
   */
  network?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
   * The name of the target parameter. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The template for the event target parameter.
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
   * The dead-letter queue. If an event fails to be processed or exceeds the retry limit, it is sent to the dead-letter queue. Supported services for the dead-letter queue include Message Queue for Apache RocketMQ, Message Service (MNS), Message Queue for Apache Kafka, and EventBridge event buses.
   */
  deadLetterQueue?: CreateRuleRequestEventTargetsDeadLetterQueue;
  /**
   * @remarks
   * The delivery endpoint for events.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance policy. Valid values:<br>`ALL`: Enables fault tolerance. Execution continues even if an error occurs. After all retry attempts fail, the event is sent to the dead-letter queue (if configured) or discarded.<br>`NONE`: Disables fault tolerance. Execution is blocked if an error occurs and all retry attempts fail.<br><br>
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
   * The parameters for the event target.
   */
  paramList?: CreateRuleRequestEventTargetsParamList[];
  /**
   * @remarks
   * The push retry strategy. Valid values:<br>`BACKOFF_RETRY`: A backoff retry strategy where the system makes three retry attempts at random intervals of 10 to 20 seconds.<br>`EXPONENTIAL_DECAY_RETRY`: An exponential decay retry strategy where the system makes 176 retry attempts over 24 hours. The interval starts at 1 second and doubles with each of the first 10 attempts (up to 512 seconds). Subsequent retries occur every 512 seconds.<br><br>
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
   * The description of the event rule.
   * 
   * @example
   * SMQ filter rule
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
   * A list of event targets.
   */
  eventTargets?: CreateRuleRequestEventTargets[];
  /**
   * @remarks
   * The event pattern, in JSON format. Supported pattern types are `stringEqual` and `stringExpression`. Each field can contain a maximum of five expressions in a map structure.
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
   * The status of the event rule. Valid values: `ENABLE`: The rule is enabled. This is the default value. `DISABLE`: The rule is disabled.
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

