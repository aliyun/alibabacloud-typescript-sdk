// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAutoTopicCreationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_post-cn-v0h1fgs2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation that you want to perform. Valid values:
   * 
   * *   enable: enables the automatic topic creation feature.
   * *   disable: disables the automatic topic creation feature.
   * *   updatePartition: changes the number of partitions in topics that are automatically created.
   * 
   * @example
   * enable
   */
  operate?: string;
  /**
   * @remarks
   * The changed number of partitions in topics that are automatically created.
   * 
   * This parameter takes effect only if you set Operate to updatePartition.
   * 
   * @example
   * 12
   */
  partitionNum?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

