// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSubscriptionAttributesRequestDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The destination queue for dead-letter messages.
   * 
   * @example
   * deadLetterTargetQueue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Whether to enable dead-letter message delivery.
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

export class SetSubscriptionAttributesRequestTenantRateLimitPolicy extends $dara.Model {
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

export class SetSubscriptionAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: SetSubscriptionAttributesRequestDlqPolicy;
  /**
   * @remarks
   * The retry policy for message delivery failures to the endpoint. Valid values:
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
   * @example
   * acs:ram::1234567890:role/roleName
   */
  stsRoleArn?: string;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * MySubscription
   */
  subscriptionName?: string;
  tenantRateLimitPolicy?: SetSubscriptionAttributesRequestTenantRateLimitPolicy;
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
      notifyStrategy: 'NotifyStrategy',
      stsRoleArn: 'StsRoleArn',
      subscriptionName: 'SubscriptionName',
      tenantRateLimitPolicy: 'TenantRateLimitPolicy',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dlqPolicy: SetSubscriptionAttributesRequestDlqPolicy,
      notifyStrategy: 'string',
      stsRoleArn: 'string',
      subscriptionName: 'string',
      tenantRateLimitPolicy: SetSubscriptionAttributesRequestTenantRateLimitPolicy,
      topicName: 'string',
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

