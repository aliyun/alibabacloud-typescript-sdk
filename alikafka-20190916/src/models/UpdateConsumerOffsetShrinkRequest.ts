// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerOffsetShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * *   The name can contain letters, digits, hyphens (-), and underscores (_).
   * *   The name must be **3 to 64** characters in length. If a name contains more than **64** characters, the name is automatically truncated.
   * *   The name of a consumer group cannot be changed after the consumer group is created.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp91inkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * If you set resetType to offset, you can use this parameter to reset the consumer offset of each partition of a specific topic in the consumer group.
   * 
   * **if can be null:**
   * true
   */
  offsetsShrink?: string;
  /**
   * @remarks
   * The region ID of the instance to which the consumer group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The method that is used to reset the consumer offsets of the subscribed topics of a consumer group. Valid values:
   * 
   * *   **timestamp** (default)
   * *   **offset**
   * 
   * @example
   * timestamp
   */
  resetType?: string;
  /**
   * @remarks
   * The point in time when message consumption starts. The value of this parameter is a UNIX timestamp in milliseconds. The value of this parameter must be **less than 0** or **within the retention period of the consumer offset**. This parameter takes effect only if you set resetType to timestamp.
   * 
   * *   If you want to reset the consumer offset to the latest offset, set this parameter to -1.
   * *   If you want to reset the consumer offset to the earliest offset, set this parameter to -2.
   * 
   * @example
   * -1
   */
  time?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be **3 to 64** characters in length. If a name contains more than **64** characters, the name is automatically truncated.
   * *   The name of a topic cannot be changed after the topic is created.
   * 
   * **If you want to reset the consumer offsets of all topics to which the consumer subscribes, specify an empty string.**
   * 
   * This parameter is required.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'ConsumerId',
      instanceId: 'InstanceId',
      offsetsShrink: 'Offsets',
      regionId: 'RegionId',
      resetType: 'ResetType',
      time: 'Time',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      instanceId: 'string',
      offsetsShrink: 'string',
      regionId: 'string',
      resetType: 'string',
      time: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

