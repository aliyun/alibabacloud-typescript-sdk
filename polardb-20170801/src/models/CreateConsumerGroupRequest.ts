// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * Indicates whether the consumer group is the default group. Valid values:
   * 
   * - **0**: No
   * 
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  isDefault?: string;
  /**
   * @remarks
   * The nickname of the consumer group.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the region where the consumer group will be created.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'ConsumerGroupName',
      gwClusterId: 'GwClusterId',
      isDefault: 'IsDefault',
      nickName: 'NickName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      gwClusterId: 'string',
      isDefault: 'string',
      nickName: 'string',
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

