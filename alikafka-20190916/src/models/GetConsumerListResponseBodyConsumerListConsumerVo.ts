// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerListResponseBodyConsumerListConsumerVOTags } from "./GetConsumerListResponseBodyConsumerListConsumerVotags";


export class GetConsumerListResponseBodyConsumerListConsumerVO extends $dara.Model {
  /**
   * @remarks
   * Indicates that the consumer group was automatically created by the system.
   * 
   * @example
   * false
   */
  automaticallyCreatedGroup?: boolean;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * kafka-test
   */
  consumerId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the consumer group was created. Unit: milliseconds.
   * 
   * @example
   * 1729736584002
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_post-cn-v0h18sav****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetConsumerListResponseBodyConsumerListConsumerVOTags;
  static names(): { [key: string]: string } {
    return {
      automaticallyCreatedGroup: 'AutomaticallyCreatedGroup',
      consumerId: 'ConsumerId',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticallyCreatedGroup: 'boolean',
      consumerId: 'string',
      createTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      tags: GetConsumerListResponseBodyConsumerListConsumerVOTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

