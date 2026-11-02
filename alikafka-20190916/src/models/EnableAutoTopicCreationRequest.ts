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
   * Only the following three values are supported:
   * 
   * - enable: Enables automatic automatic creation.
   * - disable: Disables automatic automatic creation.
   * - updatePartition: Modifies the number of automatically created partitions.
   * 
   * @example
   * enable
   */
  operate?: string;
  /**
   * @remarks
   * The default number of partitions for automatically created topics.
   * 
   * >  Specify this parameter only when Operate is set to updatePartition or UpdatePartition is set to true.
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
  /**
   * @remarks
   * Specifies whether to modify the number of partitions for automatic creation.
   * 
   * >  If this parameter is set to true, the Operate parameter must be set to updatePartition or left empty.
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

