// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID. You can obtain the ID from the ConsumerGroupId parameter returned by the CreateConsumerGroup operation.
   * 
   * @example
   * cg-p3gk2oh55c**
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The gateway instance ID. You can obtain the ID from the GwClusterId parameter returned by the CreateGateway operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The key type. Default value: ApiKey. Valid values: ApiKey.
   * 
   * @example
   * ApiKey
   */
  keyType?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The nickname.
   * 
   * @example
   * test
   */
  nickName?: string;
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
      keyType: 'KeyType',
      name: 'Name',
      nickName: 'NickName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      gwClusterId: 'string',
      keyType: 'string',
      name: 'string',
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

