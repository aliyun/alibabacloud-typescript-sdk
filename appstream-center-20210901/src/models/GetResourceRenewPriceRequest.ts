// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRenewPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. You can call [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The numeric part of the resource purchase duration. This parameter is used together with PeriodUnit to specify the complete purchase duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit part of the resource purchase duration. This parameter is used together with Period to specify the complete purchase duration. Valid combinations of Period and PeriodUnit:
   * 
   * - 1 Week (1 week)
   * - 1 Month (1 month)
   * - 2 Month (2 months)
   * - 3 Month (3 months)
   * - 6 Month (6 months)
   * - 1 Year (1 year)
   * - 2 Year (2 years)
   * - 3 Year (3 years)
   * 
   * > This parameter is case-sensitive. For example, `Week` is valid, but `week` is invalid. If the request parameters do not match the combinations listed above, such as `2 Week`, the call to this operation succeeds, but an error occurs during the order placement phase.
   * 
   * This parameter is required.
   * 
   * @example
   * Week
   */
  periodUnit?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      period: 'number',
      periodUnit: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

