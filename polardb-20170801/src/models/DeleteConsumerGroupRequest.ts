// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group to delete. You can obtain the ID from the ConsumerGroupId parameter returned by the CreateConsumerGroup operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cg-xxxxxxx
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The ID of the gateway instance. You can obtain the ID from the GwClusterId parameter returned by the CreateGateway operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'ConsumerGroupName',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      gwClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

