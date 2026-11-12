// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group. You can obtain the ID from the ConsumerGroupId parameter returned by CreateConsumerGroup. This parameter is actually required. If it is not provided, the API returns an InvalidParameters.Format (400) error. Although the parameter is named ConsumerGroupName, you must pass the ConsumerGroupId in the cg-xxxx format. You can obtain the ID from the ConsumerGroupId field returned by CreateConsumerGroup or DescribeConsumerGroups.
   * 
   * @example
   * cg-p3gk2oh55c**
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The ID of the gateway instance. You can obtain the ID from the GwClusterId parameter returned by CreateGateway.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The key type. Default value: ApiKey. Currently, only ApiKey is supported.
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
   * The nickname of the user.
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

