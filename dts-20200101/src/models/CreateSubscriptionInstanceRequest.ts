// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSubscriptionInstanceRequestSourceEndpoint } from "./CreateSubscriptionInstanceRequestSourceEndpoint";


export class CreateSubscriptionInstanceRequest extends $dara.Model {
  sourceEndpoint?: CreateSubscriptionInstanceRequestSourceEndpoint;
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The **ClientToken** parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The billing method of the change tracking instance.
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription instance. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * >  You must specify this parameter only if you set the PayType parameter to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the change tracking instance. The region ID is the same as that of the source instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the change tracking instance. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * cn-hangzhou
   */
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
   * The subscription length.
   * 
   * *   If the billing cycle is **Year**, the value range is **1 to 5**.
   * *   If the billing cycle is **Month**, the value range is **1 to 60**.
   * 
   * >  You must specify this parameter only if you set the PayType parameter to **Prepaid**.
   * 
   * @example
   * 12
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: CreateSubscriptionInstanceRequestSourceEndpoint,
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      payType: 'string',
      period: 'string',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

