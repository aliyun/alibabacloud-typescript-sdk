// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionAttributesResponseBodyDataDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The target queue to which dead-letter messages are delivered.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Indicates whether dead-letter message delivery is enabled.
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

export class GetSubscriptionAttributesResponseBodyDataTenantRateLimitPolicy extends $dara.Model {
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

export class GetSubscriptionAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the subscription was created. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1449554806
   */
  createTime?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: GetSubscriptionAttributesResponseBodyDataDlqPolicy;
  /**
   * @remarks
   * The endpoint of the subscription.
   * 
   * @example
   * http://example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The tag used for message filtering. Only messages that have a matching tag are pushed.
   * 
   * @example
   * important
   */
  filterTag?: string;
  /**
   * @remarks
   * The time when the subscription properties were last modified. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1449554962
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The format of the message content that is pushed to an endpoint.
   * Valid values:
   * 
   * - XML
   * 
   * - JSON
   * 
   * - SIMPLIFIED
   * 
   * @example
   * XML
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry policy that is used when a message fails to be pushed to an endpoint. Valid values:
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
   * The name of the subscription.
   * 
   * @example
   * MySubscription
   */
  subscriptionName?: string;
  tenantRateLimitPolicy?: GetSubscriptionAttributesResponseBodyDataTenantRateLimitPolicy;
  /**
   * @remarks
   * The name of the topic to which the subscription belongs.
   * 
   * @example
   * MyTopic
   */
  topicName?: string;
  /**
   * @remarks
   * The AccountId of the owner of the topic to which the subscription belongs.
   * 
   * @example
   * 123456789098****
   */
  topicOwner?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dlqPolicy: 'DlqPolicy',
      endpoint: 'Endpoint',
      filterTag: 'FilterTag',
      lastModifyTime: 'LastModifyTime',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dlqPolicy: GetSubscriptionAttributesResponseBodyDataDlqPolicy,
      endpoint: 'string',
      filterTag: 'string',
      lastModifyTime: 'number',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      subscriptionName: 'string',
      tenantRateLimitPolicy: GetSubscriptionAttributesResponseBodyDataTenantRateLimitPolicy,
      topicName: 'string',
      topicOwner: 'string',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
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

export class GetSubscriptionAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetSubscriptionAttributesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the response.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetSubscriptionAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

