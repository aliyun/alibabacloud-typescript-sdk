// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPartitionNumRequest extends $dara.Model {
  /**
   * @remarks
   * Number of partitions to add.
   * 
   * - Must be greater than 0.
   * 
   * - It is recommended that the number of partitions is a multiple of 6 to reduce the risk of data skew.
   * 
   * - The total number of partitions is limited to 1-360.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  addPartitionNum?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-0pp1l9z****
   */
  instanceId?: string;
  /**
   * @remarks
   * Region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Topic name.
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

