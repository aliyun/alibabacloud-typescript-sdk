// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPartitionNumRequest extends $dara.Model {
  /**
   * @remarks
   * The number of partitions that you want to add to the topic.
   * 
   * *   The value must be an integer that is greater than 0.
   * *   To reduce the risk of data skew, we recommend that you set the value to a multiple of 6.
   * *   The number of total partitions ranges from 1 to 360.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  addPartitionNum?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicPartitionNum
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      addPartitionNum: 'AddPartitionNum',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addPartitionNum: 'number',
      instanceId: 'string',
      regionId: 'string',
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

