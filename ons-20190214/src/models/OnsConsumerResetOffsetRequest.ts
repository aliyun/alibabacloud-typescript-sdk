// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsConsumerResetOffsetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group whose dead-letter message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_consumer_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp to which you want to reset the consumer offset. This parameter takes effect only when the **Type** parameter is set to **1**. Unit: milliseconds.
   * 
   * @example
   * 1591153871000
   */
  resetTimestamp?: number;
  /**
   * @remarks
   * The name of the topic for which you want to reset the consumer offset.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq-topic
   */
  topic?: string;
  /**
   * @remarks
   * The method that you want to use to clear accumulated messages. Valid values:
   * 
   * *   **0:** All accumulated messages are cleared. Messages that are not consumed are ignored. Consumers in the specified consumer group consume only messages that are published to the topic after the specified point in time.
   * 
   * If "reconsumeLater" is returned, the accumulated messages are not cleared because the system is retrying to resend the messages to consumers.
   * 
   * *   **1:** The messages that were published to the topic before the specified point in time are cleared. You must specify a point in time. Consumers in the specified consumer group consume only the messages that are published to the topic after the specified point in time.
   * 
   * You can specify a point in time from the earliest point in time when a message was published to the topic to the most recent point in time when a message was published to the topic. Points in time that are not within the allowed time range are invalid.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      resetTimestamp: 'ResetTimestamp',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      resetTimestamp: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

