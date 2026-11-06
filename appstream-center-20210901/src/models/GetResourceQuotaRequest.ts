// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The business region ID. If this parameter is omitted, the general quota that is not limited by region is queried. The quotas of different regions are not added together. This parameter must be consistent with the business region for What to do next.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method query condition. If this parameter is omitted, the general quota that is not limited by billing method is queried. The quotas of different billing methods are not added together. Valid values:
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The product type. Set this parameter to the following value when you call the operation:
   * 
   * - CloudApp: WUYING Cloud App.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The business resource type to query. Valid values:
   * 
   * - AppInstanceGroup: the quantity quota for delivery groups. Unit: count.
   * - AppAuthUser: the quantity quota for authorized users. Unit: users.
   * - PoolNodeAmount: the quantity quota for purchased resource nodes. Unit: count.
   * 
   * This parameter is required.
   * 
   * @example
   * AppInstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      productType: 'ProductType',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      productType: 'string',
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

