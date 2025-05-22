// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumerGroupPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the consumer group. You can call the [DescribeConsumerGroup](https://help.aliyun.com/document_detail/122886.html) operation to query the consumer group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtswc411cg617p****
   */
  consumerGroupID?: string;
  /**
   * @remarks
   * The name of the consumer group. The name cannot exceed 128 characters in length. We recommend that you use an informative name for easy identification.
   * 
   * @example
   * dtstest
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The new password of the consumer group.
   * 
   * *   A password must contain two or more of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * *   A password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test123456
   */
  consumerGroupPassword?: string;
  /**
   * @remarks
   * The username of the consumer group. You can call the [DescribeConsumerGroup](https://help.aliyun.com/document_detail/122886.html) operation to query the username.
   * 
   * @example
   * dtstest
   */
  consumerGroupUserName?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the change tracking instance. You can call the **DescribeSubscriptionInstances** operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsg2m10r1x15a****
   */
  subscriptionInstanceId?: string;
  /**
   * @remarks
   * The new password of the consumer group.
   *  
   * *   A password must contain two or more of the following characters: uppercase letters, lowercase letters, digits, and special characters.
   * *   A password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test654321
   */
  consumerGroupNewPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      consumerGroupID: 'ConsumerGroupID',
      consumerGroupName: 'ConsumerGroupName',
      consumerGroupPassword: 'ConsumerGroupPassword',
      consumerGroupUserName: 'ConsumerGroupUserName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      consumerGroupNewPassword: 'consumerGroupNewPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumerGroupID: 'string',
      consumerGroupName: 'string',
      consumerGroupPassword: 'string',
      consumerGroupUserName: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
      consumerGroupNewPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

