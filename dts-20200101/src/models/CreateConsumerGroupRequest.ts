// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the consumer group. The name can be up to 128 characters in length. We recommend that you use a descriptive name for easy identification.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试订阅组
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The password of the consumer group account.
   * 
   * - The password must contain characters from at least two of the following categories: uppercase letters, lowercase letters, digits, and special characters.
   * - The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456
   */
  consumerGroupPassword?: string;
  /**
   * @remarks
   * The account of the consumer group.
   * 
   * The account can contain uppercase letters, lowercase letters, digits, and underscores (_). The account can be up to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the DescribeSubscriptionInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsg2m10r1x15a****
   */
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

