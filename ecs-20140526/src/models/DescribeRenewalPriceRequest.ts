// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The unified expiration day. If you specify this parameter, the system queries the price for renewing the instance until the unified expiration day. Valid values: 1 to 28.
   * 
   * For more information about the unified expiration day feature, see [Unify Instance Expiration Dates](https://help.aliyun.com/document_detail/108486.html).
   * 
   * > You cannot specify both the renewal duration parameters (`Period` and `PeriodUnit`) and the unified expiration day parameter (`ExpectedRenewDay`) at the same time.
   * 
   * @example
   * 5
   */
  expectedRenewDay?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies the renewal duration. Valid values:
   * 
   * - When the `PriceUnit` parameter is set to `Month`: 1 to 9.
   * 
   * - When the `PriceUnit` parameter is set to `Year`: 1 to 3.
   * 
   * Default Value: 1.
   * 
   * > You cannot specify both the renewal duration parameters (`Period` and `PeriodUnit`) and the unified expiration day parameter (`ExpectedRenewDay`) at the same time.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * Specifies the renewal period. Valid values:
   * 
   * - Month: The renewal period is one month.
   * 
   * - Year: The renewal period is one year.
   * 
   * Default Value: Month.
   * 
   * @example
   * Month
   */
  priceUnit?: string;
  /**
   * @remarks
   * The Region ID of the instance. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud Regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID for which to query the renewal price. When the parameter `ResourceType` is set to `instance`, `ResourceId` can be interpreted as `InstanceId`.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f2o4ldh8l29zv****
   */
  resourceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type for which to query the renewal price. Valid value: instance.
   * 
   * Default Value: instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      expectedRenewDay: 'ExpectedRenewDay',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      priceUnit: 'PriceUnit',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedRenewDay: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      priceUnit: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

