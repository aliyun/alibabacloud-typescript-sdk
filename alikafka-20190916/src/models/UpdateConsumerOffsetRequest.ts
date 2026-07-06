// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerOffsetRequestOffsets extends $dara.Model {
  /**
   * @remarks
   * Partition offset.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * Partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerOffsetRequest extends $dara.Model {
  /**
   * @remarks
   * Consumer Group name.
   * 
   * - Can only contain letters, numbers, hyphens (-), and underscores (_).
   * 
   * - Length must be **3-64** characters. If more than **64** characters are provided, they will be automatically truncated.
   * 
   * - Cannot be modified once created.
   * 
   * This parameter is required.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-mp91inkw****
   */
  instanceId?: string;
  /**
   * @remarks
   * When resetType is offset, this parameter is used to set the consumer offset for each partition of a topic for the consumer group.
   * 
   * **if can be null:**
   * true
   */
  offsets?: UpdateConsumerOffsetRequestOffsets[];
  /**
   * @remarks
   * Region ID of the instance to which the Group belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Type of consumer group offset reset, supporting the following two types:
   * 
   * - **timestamp** (default)
   * 
   * - **offset**
   * 
   * @example
   * timestamp
   */
  resetType?: string;
  /**
   * @remarks
   * Time parameter in Unix timestamp format, in milliseconds.
   * The parameter range should be **less than 0** or **within the retention period of the consumer offset**. This parameter only takes effect when resetType is timestamp.
   * 
   * - To reset to the latest consumer offset, pass -1.
   * 
   * - To reset to the earliest consumer offset, pass -2.
   * 
   * @example
   * -1
   */
  time?: string;
  /**
   * @remarks
   * Topic name.
   * 
   * - Can only contain letters, numbers, underscores (_), and hyphens (-).
   * 
   * - Length must be **3-64** characters. If more than **64** characters are provided, they will be automatically truncated.
   * 
   * - Cannot be modified once created.
   * 
   * **To set the consumer offset for all topics subscribed by the current consumer, pass an empty string.**
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
      offsets: 'Offsets',
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
      offsets: { 'type': 'array', 'itemType': UpdateConsumerOffsetRequestOffsets },
      regionId: 'string',
      resetType: 'string',
      time: 'string',
      topic: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.offsets)) {
      $dara.Model.validateArray(this.offsets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

