// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyConsumptionTimestampRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. This parameter is not required and will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The consumption checkpoint. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC time).
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-10-15T17:20:03Z
   */
  consumptionTimestamp?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The ID of the change tracking instance. You can call the **DescribeSubscriptionInstances** operation to query the instance ID.
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
      consumptionTimestamp: 'ConsumptionTimestamp',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      consumptionTimestamp: 'string',
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

