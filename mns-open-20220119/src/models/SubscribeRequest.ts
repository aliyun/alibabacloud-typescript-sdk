// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The destination queue for dead-letter message delivery.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether to enable dead-letter message delivery.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetQueue: 'DeadLetterTargetQueue',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetQueue: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeRequestDmAttributes extends $dara.Model {
  /**
   * @remarks
   * The sender address.
   * 
   * @example
   * notify@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * The email subject.
   * 
   * @example
   * notify
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeRequestDysmsAttributes extends $dara.Model {
  /**
   * @remarks
   * The SMS signature name.
   * 
   * @example
   * 阿里云短信测试专用
   */
  signName?: string;
  /**
   * @remarks
   * The SMS template code.
   * 
   * @example
   * 123456
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signName: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeRequestKafkaAttributes extends $dara.Model {
  /**
   * @remarks
   * The Kafka push type is deprecated.
   * 
   * @example
   * Default empty string
   */
  businessMode?: string;
  static names(): { [key: string]: string } {
    return {
      businessMode: 'BusinessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeRequestTenantRateLimitPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the throttling policy. Valid values: true and false.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of pushes or consumptions per second.
   * 
   * @example
   * 50
   */
  maxReceivesPerSecond?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      maxReceivesPerSecond: 'MaxReceivesPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxReceivesPerSecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: SubscribeRequestDlqPolicy;
  /**
   * @remarks
   * The email push attributes. This parameter is required when PushType is set to dm. The value is in JSON format and contains the following fields:
   * 
   * - AccountName: The sender address configured in DirectMail (such as notify@example.com).
   * - Subject: The email subject.
   */
  dmAttributes?: SubscribeRequestDmAttributes;
  /**
   * @remarks
   * The SMS push attributes. This parameter is required when PushType is set to alisms. The value is in JSON format and contains the following fields:
   * 
   * - TemplateCode: The SMS template code, which can be obtained from the Short Message Service console.
   * - SignName: The SMS signature name.
   */
  dysmsAttributes?: SubscribeRequestDysmsAttributes;
  /**
   * @remarks
   * ## Endpoint address for receiving messages
   * 
   * The format varies depending on the value of `PushType`:
   * 
   * - `PushType=http`: An HTTP/HTTPS callback URL, such as `http://example.com/callback` or `https://example.com/callback`.
   * - `PushType=queue`: The ARN of the destination queue, in the format `acs:mns:{RegionId}:{Alibaba Cloud account ID}:queues/{QueueName}`.
   * - `PushType=dm`: The email push endpoint, in the fixed format `smq-ep:dm:{Alibaba Cloud account ID}:__dynamic`. Replace `{Alibaba Cloud account ID}` with your Alibaba Cloud account ID.
   * - `PushType=dysms`: The SMS push endpoint, in the format `smq-ep:dysms:{Alibaba Cloud account ID}:{PhoneNumber}`.
   * - `PushType=kafka`: The Kafka push endpoint. The Kafka push type is deprecated.
   * - `PushType=fc`: The Function Compute endpoint, in the format `acs:fc:{RegionId}:{Alibaba Cloud account ID}:services/{ServiceName}/functions/{FunctionName}`.
   * - `PushType=eventbus`: The EventBridge endpoint, in the format `acs:eventbridge:{RegionId}:{Alibaba Cloud account ID}:eventbus/{EventBusName}`.
   * 
   * This parameter is required.
   * 
   * @example
   * http://*****.com/uri1/xxx
   */
  endpoint?: string;
  /**
   * @remarks
   * The Kafka push type is deprecated.
   */
  kafkaAttributes?: SubscribeRequestKafkaAttributes;
  /**
   * @remarks
   * The tag used for message filtering in this subscription. Only messages with a matching tag are pushed. The value is a string of up to 16 characters.
   * 
   * By default, no message filtering is applied.
   * 
   * @example
   * important
   */
  messageTag?: string;
  /**
   * @remarks
   * ## Format of the pushed message content
   * 
   * Valid values:
   * 
   * - `XML`: The message body is pushed in XML format. This is the default value.
   * - `JSON`: The message body is pushed in JSON format.
   * - `SIMPLIFIED`: Only the raw message body content is pushed, without SMQ metadata wrapping.
   * 
   * @example
   * XML
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry strategy when an error occurs while pushing messages to the endpoint. Valid values:
   * 
   * - BACKOFF_RETRY: backoff retry.
   * 
   * - EXPONENTIAL_DECAY_RETRY: exponential decay retry.
   * 
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * ## Push type of the subscription
   * 
   * Valid values:
   * 
   * - `http`: HTTP/HTTPS push. Pushes messages to a specified HTTP or HTTPS callback URL.
   * - `queue`: Queue push. Pushes messages to a specified SMQ queue.
   * - `dm`: Email push. Sends notifications through DirectMail. You must also set the `DmAttributes` and `StsRoleArn` parameters.
   * - `dysms`: SMS push. Sends notifications through Alibaba Cloud Short Message Service. You must also set the `DysmsAttributes` parameter.
   * 
   * - `fc`: Function Compute push. Pushes messages to Alibaba Cloud Function Compute (FC).
   * - `eventbus`: EventBridge push. Pushes messages to an EventBridge event bus.
   * 
   * **Note:**
   * The following values are deprecated and are only used for compatibility with legacy subscriptions:
   * 
   * - `mpush`: Mobile push.
   * - `alisms`: Legacy SMS.
   * - `email`: Legacy email. Use `dm` instead.
   * - `kafka`: Kafka push type is deprecated.
   * 
   * This parameter is required.
   * 
   * @example
   * queue
   */
  pushType?: string;
  /**
   * @remarks
   * The ARN of the RAM role assumed by the service. The format is acs:ram::{Alibaba Cloud account ID}:role/{RoleName}. Replace {Alibaba Cloud account ID} with the Alibaba Cloud account ID that calls the API operation.
   * 
   * @example
   * acs:ram::1234567890:role/AliyunMNSNotificationRole
   */
  stsRoleArn?: string;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * testSubscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The throttling policy.
   */
  tenantRateLimitPolicy?: SubscribeRequestTenantRateLimitPolicy;
  /**
   * @remarks
   * The name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * topic****1
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      dlqPolicy: 'DlqPolicy',
      dmAttributes: 'DmAttributes',
      dysmsAttributes: 'DysmsAttributes',
      endpoint: 'Endpoint',
      kafkaAttributes: 'KafkaAttributes',
      messageTag: 'MessageTag',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      pushType: 'PushType',
      stsRoleArn: 'StsRoleArn',
      subscriptionName: 'SubscriptionName',
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dlqPolicy: SubscribeRequestDlqPolicy,
      dmAttributes: SubscribeRequestDmAttributes,
      dysmsAttributes: SubscribeRequestDysmsAttributes,
      endpoint: 'string',
      kafkaAttributes: SubscribeRequestKafkaAttributes,
      messageTag: 'string',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      pushType: 'string',
      stsRoleArn: 'string',
      subscriptionName: 'string',
      tenantRateLimitPolicy: SubscribeRequestTenantRateLimitPolicy,
      topicName: 'string',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
    }
    if(this.dmAttributes && typeof (this.dmAttributes as any).validate === 'function') {
      (this.dmAttributes as any).validate();
    }
    if(this.dysmsAttributes && typeof (this.dysmsAttributes as any).validate === 'function') {
      (this.dysmsAttributes as any).validate();
    }
    if(this.kafkaAttributes && typeof (this.kafkaAttributes as any).validate === 'function') {
      (this.kafkaAttributes as any).validate();
    }
    if(this.tenantRateLimitPolicy && typeof (this.tenantRateLimitPolicy as any).validate === 'function') {
      (this.tenantRateLimitPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

