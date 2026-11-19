// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The destination queue for dead-letter message delivery. The queue must already exist in the current region.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether to enable dead-letter message delivery. Default value: false.
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
   * The name of the SMS signature.
   * 
   * @example
   * Alibaba Cloud SMS test
   */
  signName?: string;
  /**
   * @remarks
   * The code of the SMS template.
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
   * Specifies whether to enable the throttling policy. Valid values:
   * 
   * - true: enabled
   * - false: disabled (default)
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of pushes or consumptions per second. The value must be a positive integer and is valid only when the PushType parameter is set to http or https. The specific minimum value varies by region.
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
   * The attributes for Direct Mail push. This parameter is required when the PushType parameter is set to dm. The value is in JSON format and contains the following fields:
   * 
   * - AccountName: the sender address, which is the sender address configured in Direct Mail, such as notify@example.com.
   * - Subject: the email subject.
   */
  dmAttributes?: SubscribeRequestDmAttributes;
  /**
   * @remarks
   * The attributes for SMS push. This parameter is required when the PushType parameter is set to alisms. The value is in JSON format and contains the following fields:
   * 
   * - TemplateCode: the code of the SMS template, which can be obtained from the SMS console.
   * - SignName: the name of the SMS signature.
   */
  dysmsAttributes?: SubscribeRequestDysmsAttributes;
  /**
   * @remarks
   * ## Endpoint for receiving messages
   * 
   * The format varies based on the `PushType` parameter:
   * 
   * - `PushType=http`: The HTTP or HTTPS callback URL, such as `http://example.com/callback` or `https://example.com/callback`.
   * - `PushType=queue`: The ARN of the destination queue, in the format of `acs:mns:{RegionId}:{Alibaba Cloud account ID}:/queues/{QueueName}`.
   * - `PushType=dm`: The Direct Mail push endpoint, in the fixed format of `smq-ep:dm:{Alibaba Cloud account ID}:__dynamic`. Replace `{Alibaba Cloud account ID}` with the ID of your Alibaba Cloud account.
   * - `PushType=dysms`: The SMS push endpoint, in the format of `smq-ep:dysms:{Alibaba Cloud account ID}:{Phone number}`.
   * - `PushType=kafka`: The Kafka push endpoint. The Kafka push type is deprecated.
   * - `PushType=fc`: The Function Compute endpoint, in the format of `acs:fc:{RegionId}:{Alibaba Cloud account ID}:services/{ServiceName}/functions/{FunctionName}`.
   * - `PushType=eventbus`: The EventBridge endpoint, in the format of `acs:eventbridge:{RegionId}:{Alibaba Cloud account ID}:eventbus/{EventBusName}`.
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
   * The tag used for message filtering in the subscription. Only messages with a matching tag are pushed.
   * The value must be a string up to 16 characters in length.
   * 
   * By default, message filtering is not performed.
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
   * - `XML`: XML format (default)
   * - `JSON`: JSON format
   * - `SIMPLIFIED`: original message body content without the SMQ metadata wrapper
   * 
   * @example
   * XML
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry strategy that is used when an error occurs during message pushing to the endpoint. Valid values:
   * 
   * - BACKOFF_RETRY: backoff retry (default)
   * - EXPONENTIAL_DECAY_RETRY: exponential decay retry
   * 
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * ## Push types for subscriptions
   * 
   * Valid values:
   * 
   * - `http`: Pushes messages to the specified HTTP or HTTPS callback URL.
   * - `queue`: Pushes messages to the specified Simple Message Queue (SMQ) queue.
   * - `dm`: Sends notifications by using the Direct Mail service. You must also set the `DmAttributes` and `StsRoleArn` parameters.
   * - `dysms`: Sends notifications by using the Alibaba Cloud SMS service. You must also set the `DysmsAttributes` parameter.
   * - `fc`: Pushes messages to Alibaba Cloud Function Compute (FC).
   * - `eventbus`: Pushes messages to an EventBridge event bus.
   * 
   * **Note:**
   * The following values are deprecated and are retained only for compatibility with legacy subscriptions:
   * 
   * - `mpush`: mobile push
   * - `alisms`: legacy SMS
   * - `email`: legacy email, use `dm` instead
   * - `kafka`: deprecated Kafka push type
   * 
   * This parameter is required.
   * 
   * @example
   * queue
   */
  pushType?: string;
  /**
   * @remarks
   * The ARN of the RAM role assumed by the service. The format is acs:ram::{Alibaba Cloud account ID}:role/{RoleName}. Replace {Alibaba Cloud account ID} with the ID of the Alibaba Cloud account that calls the API operation.
   * 
   * @example
   * acs:ram::1234567890:role/AliyunMNSNotificationRole
   */
  stsRoleArn?: string;
  /**
   * @remarks
   * The name of the subscription. The name must be 1 to 255 characters in length. It must start with a letter or a digit, and can contain only letters, digits, and hyphens (-). The name cannot start with mns-reserved-.
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
   * The name of the topic. The name must be 1 to 255 characters in length. It must start with a letter or a digit, and can contain only letters, digits, and hyphens (-). The name cannot start with mns-reserved-.
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

