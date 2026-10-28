// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Instance ID of the change tracking instance. You can call the [DescribeSubscriptionInstances](https://help.aliyun.com/document_detail/49442.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsy0zz3t13h7d****
   */
  subscriptionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

