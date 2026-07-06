// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAutoTopicCreationRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Currently only these three request parameters are supported:
   * 
   * - enable: Enable automatic topic creation.
   * 
   * - disable: Disable automatic topic creation.
   * 
   * - updatePartition: Modify the number of partitions for automatic creation.
   * 
   * @example
   * enable
   */
  operate?: string;
  /**
   * @remarks
   * Adjust the default number of partitions for automatically created topics.
   * 
   * > This value is passed only when the Operate value is updatePartition, or when UpdatePartition is true.
   * 
   * @example
   * 12
   */
  partitionNum?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Modify the number of partitions for automatic creation.
   * 
   * > If this parameter is set to true, the Operate parameter must be updatePartition or left empty.
   * 
   * @example
   * true
   */
  updatePartition?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operate: 'Operate',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      updatePartition: 'UpdatePartition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operate: 'string',
      partitionNum: 'number',
      regionId: 'string',
      updatePartition: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

