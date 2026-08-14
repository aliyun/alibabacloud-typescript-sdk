// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscriptionInstanceRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * 数据订阅的实例类型，取值为：**MySQL**、**PolarDB**、**DRDS**、**Oracle**。
   * > 默认取值为：**MySQL**。
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSubscriptionInstanceRequest extends $dara.Model {
  sourceEndpoint?: CreateSubscriptionInstanceRequestSourceEndpoint;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter. This parameter will be discontinued.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a value from your client to make sure that the value is unique among different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * - **Postpaid**: pay-as-you-go. This is the default value.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The billing method of the subscription instance. Valid values:
   * 
   * - **Year**: annual subscription.
   * - **Month**: monthly subscription.
   * 
   * > This parameter is valid and required only when PayType is set to **Prepaid** (subscription).
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID. Set this parameter to the region where the subscription object resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region to which the change tracking instance belongs. You do not need to specify this parameter. This parameter will be discontinued.
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
   * The purchase duration of the subscription instance.
   * 
   * - If the billing method is set to **Year** (annual subscription), the valid values are **1 to 5**.
   * - If the billing method is set to **Month** (monthly subscription), the valid values are **1 to 60**.
   * 
   * > This parameter is valid and required only when PayType is set to **Prepaid** (subscription).
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

