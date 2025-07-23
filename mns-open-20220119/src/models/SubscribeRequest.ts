// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The queue to which dead-letter messages are delivered.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Specifies whether to enable the dead-letter message delivery.
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
  accountName?: string;
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
  signName?: string;
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
  enabled?: boolean;
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
  dmAttributes?: SubscribeRequestDmAttributes;
  dysmsAttributes?: SubscribeRequestDysmsAttributes;
  /**
   * @remarks
   * The receiver endpoint. The format of the endpoint varies based on the terminal type.
   * 
   * *   If you set PushType to http, set Endpoint to an `HTTP URL that starts with http:// or https://`.
   * *   If you set PushType to queue, set Endpoint to a `queue name`.
   * *   If you set PushType to mpush, set Endpoint to an `AppKey`.
   * *   If you set PushType to alisms, set Endpoint to a `mobile number`.
   * *   If you set PushType to email, set Endpoint to an `email address`.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.com
   */
  endpoint?: string;
  kafkaAttributes?: SubscribeRequestKafkaAttributes;
  /**
   * @remarks
   * The tag that is used to filter messages. Only messages that have the same tag can be pushed. Set the value to a string of no more than 16 characters.
   * 
   * By default, no tag is specified to filter messages.
   * 
   * @example
   * important
   */
  messageTag?: string;
  /**
   * @remarks
   * The content format of the messages that are pushed to the endpoint. Valid values:
   * 
   * *   XML
   * *   JSON
   * *   SIMPLIFIED
   * 
   * @example
   * XML
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint. Valid values:
   * 
   * *   BACKOFF_RETRY
   * *   EXPONENTIAL_DECAY_RETRY
   * 
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The terminal type. Valid values:
   * 
   * *   http: HTTP services
   * *   queue: queues
   * *   mpush: mobile devices
   * *   alisms: Alibaba Cloud Short Message Service (SMS)
   * *   email: emails
   * 
   * This parameter is required.
   * 
   * @example
   * queue
   */
  pushType?: string;
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
  tenantRateLimitPolicy?: SubscribeRequestTenantRateLimitPolicy;
  /**
   * @remarks
   * The name of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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

