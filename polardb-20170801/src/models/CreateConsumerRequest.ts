// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The consumer group name.
   * 
   * @example
   * cg-p3gk2oh55c**
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The key type. The only supported value is ApiKey.
   * 
   * @example
   * ApiKey
   */
  keyType?: string;
  /**
   * @remarks
   * The user name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The user nickname.
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

