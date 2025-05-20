// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQueueAttributesResponseBodyDataDlqPolicy } from "./GetQueueAttributesResponseBodyDataDlqPolicy";
import { GetQueueAttributesResponseBodyDataTags } from "./GetQueueAttributesResponseBodyDataTags";


export class GetQueueAttributesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of messages that are in the Active state in the queue. The value is an approximate value. Default value: 0. We recommend that you do not use the return value and that you call CloudMonitor API operations to query the metric value.
   * 
   * @example
   * 20
   */
  activeMessages?: number;
  /**
   * @remarks
   * The time when the queue was created.
   * 
   * @example
   * 1250700999
   */
  createTime?: number;
  /**
   * @remarks
   * The total number of messages that are in the Delayed state in the queue. The value is an approximate value. Default value: 0. We recommend that you do not use the return value and that you call CloudMonitor API operations to query the metric value.
   * 
   * @example
   * 0
   */
  delayMessages?: number;
  /**
   * @remarks
   * The period after which all messages sent to the queue are consumed. Unit: seconds.
   * 
   * @example
   * 30
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The dead-letter queue policy.
   */
  dlqPolicy?: GetQueueAttributesResponseBodyDataDlqPolicy;
  /**
   * @remarks
   * The total number of messages that are in the Inactive state in the queue. The value is an approximate value. Default value: 0. We recommend that you do not use the return value and that you call CloudMonitor API operations to query the metric value.
   * 
   * @example
   * 0
   */
  inactiveMessages?: number;
  /**
   * @remarks
   * The time when the queue was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1250700999
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * Indicates whether the logging feature is enabled. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  loggingEnabled?: boolean;
  /**
   * @remarks
   * The maximum length of the message that is sent to the queue. Unit: bytes.
   * 
   * @example
   * 65536
   */
  maximumMessageSize?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in the queue. After the specified retention period ends, the message is deleted regardless of whether the message is received. Unit: seconds.
   * 
   * @example
   * 65536
   */
  messageRetentionPeriod?: number;
  /**
   * @remarks
   * The maximum duration for which long polling requests are held after the ReceiveMessage operation is called. Unit: seconds.
   * 
   * @example
   * 0
   */
  pollingWaitSeconds?: number;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * demo-queue
   */
  queueName?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: GetQueueAttributesResponseBodyDataTags[];
  /**
   * @remarks
   * The duration for which a message stays in the Inactive state after the message is received from the queue. Valid values: 1 to 43200. Unit: seconds. Default value: 30.
   * 
   * @example
   * 60
   */
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      activeMessages: 'ActiveMessages',
      createTime: 'CreateTime',
      delayMessages: 'DelayMessages',
      delaySeconds: 'DelaySeconds',
      dlqPolicy: 'DlqPolicy',
      inactiveMessages: 'InactiveMessages',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      tags: 'Tags',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeMessages: 'number',
      createTime: 'number',
      delayMessages: 'number',
      delaySeconds: 'number',
      dlqPolicy: GetQueueAttributesResponseBodyDataDlqPolicy,
      inactiveMessages: 'number',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      tags: { 'type': 'array', 'itemType': GetQueueAttributesResponseBodyDataTags },
      visibilityTimeout: 'number',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

