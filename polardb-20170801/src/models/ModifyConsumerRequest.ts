// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * Indicates if the consumer is in the default group. Valid values: 0 (No) and 1 (Yes).
   * 
   * @example
   * 0
   */
  isDefault?: string;
  /**
   * @remarks
   * The new name for the consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'ConsumerGroupName',
      consumerId: 'ConsumerId',
      gwClusterId: 'GwClusterId',
      isDefault: 'IsDefault',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      consumerId: 'string',
      gwClusterId: 'string',
      isDefault: 'string',
      name: 'string',
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

