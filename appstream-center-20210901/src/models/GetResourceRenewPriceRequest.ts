// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRenewPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to retrieve the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The numeric value of the subscription duration. This parameter is used together with PeriodUnit to specify the complete subscription duration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Request parameter is used together with Period to specify the complete subscription duration. Valid combinations of Period and PeriodUnit are as follows:
   * 
   * - 1 Week (1 week)
   * - 1 Month (1 month)
   * - 2 Months (2 months)
   * - 3 Months (3 months)
   * - 6 Months (6 months)
   * - 1 Year (1 year)
   * - 2 Years (2 years)
   * - 3 Years (3 years)
   * 
   * > Request parameter is case-sensitive. For example, Week is valid, but week is invalid. If the combination of Period and PeriodUnit does not match the preceding valid combinations, such as 2 Week, the API call succeeds but an error occurs during the order placement stage.
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

