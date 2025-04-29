// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenewalPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The synchronized expiration date. If you specify this parameter, the price for renewing a specified instance to the specified synchronized expiration date is queried. Valid values: 1 to 28.
   * 
   * For information about how to synchronize the expiration dates of instances, see [Synchronize the expiration dates of instances](https://help.aliyun.com/document_detail/108486.html).
   * 
   * > The renewal period-related parameter pair (`Period` and `PeriodUnit`) and the `ExpectedRenewDay` parameter are mutually exclusive.
   * 
   * @example
   * 5
   */
  expectedRenewDay?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The renewal period. Valid values:
   * 
   * *   Valid values when the `PriceUnit` parameter is set to `Month`: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   Valid values when the `PriceUnit` parameter is set to `Year`: 1, 2, 3.
   * 
   * Default value: 1.
   * 
   * > The renewal period-related parameter pair (`Period` and `PeriodUnit`) and the `ExpectedRenewDay` parameter are mutually exclusive.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  priceUnit?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. If the `ResourceType` parameter is set to`  instance `, the value of the `ResourceId` parameter is the ID of the specified instance.``
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
   * The type of the resource. Set the value to instance.
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

