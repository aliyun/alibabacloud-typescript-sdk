// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionAttributesResponseBodyDataDlqPolicy extends $dara.Model {
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
   * The time when the subscription was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The endpoint to which the messages are pushed.
   * 
   * @example
   * http://example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The tag that is used to filter messages. Only the messages that are attached with the specified tag can be pushed.
   * 
   * @example
   * important
   */
  filterTag?: string;
  /**
   * @remarks
   * The time when the subscription was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554962
   */
  lastModifyTime?: number;
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
   * The name of the subscription.
   * 
   * @example
   * MySubscription
   */
  subscriptionName?: string;
  tenantRateLimitPolicy?: GetSubscriptionAttributesResponseBodyDataTenantRateLimitPolicy;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * MyTopic
   */
  topicName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the topic owner.
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
   * The data returned.
   */
  data?: GetSubscriptionAttributesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @remarks
   * The response status.
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

