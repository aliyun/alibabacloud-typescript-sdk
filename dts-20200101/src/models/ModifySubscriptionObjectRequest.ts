// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySubscriptionObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID. You do not need to specify this parameter. This parameter will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The ID of the change tracking instance. You can call the [DescribeSubscriptionInstances](https://help.aliyun.com/document_detail/49442.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsl8zl9ek6292****
   */
  subscriptionInstanceId?: string;
  /**
   * @remarks
   * The subscription objects. The value is a JSON string and supports specific regular expressions. For more information, see [Subscription object configuration](https://help.aliyun.com/document_detail/141902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{"DBName":"dtstestdata"}]
   */
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionObject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

