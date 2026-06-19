// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The unified expiration date. After you specify this parameter, the price for renewing the instance to the unified expiration date is returned. Valid values: 1 to 28.
   * 
   * For more information about the unified expiration date feature, see [Settings for instance expires](https://help.aliyun.com/document_detail/108486.html).
   * 
   * > The renewal duration parameters (`Period` and `PeriodUnit`) and the unified expiration date parameter (`ExpectedRenewDay`) cannot be set at the same time.
   * 
   * @example
   * 5
   */
  expectedRenewDay?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal duration. Valid values:
   * 
   * - When `PriceUnit` is set to `Month`: 1 to 9.
   * - When `PriceUnit` is set to `Year`: 1 to 3.
   * 
   * Default value: 1.
   * 
   * > The renewal duration parameters (`Period` and `PeriodUnit`) and the unified expiration date parameter (`ExpectedRenewDay`) cannot be set at the same time.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Valid values:
   * 
   * - Month: the renewal duration is measured in months.
   * - Year: the renewal duration is measured in years.
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  priceUnit?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource whose renewal price you want to query. When `ResourceType` is set to `instance`, `ResourceId` is equivalent to `InstanceId`.
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
   * The type of the resource whose renewal price you want to query. Valid values: instance.
   * 
   * Default value: instance.
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

