// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRenewPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group. You can call the [ListAppInstanceGroup](https://help.aliyun.com/document_detail/428506.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The subscription duration of resources. This parameter must be configured together with `PeriodUnit`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter must be configured together with `Period`. The following items describe valid values for the combinations of `Period` and `PeriodUnit`:
   * 
   * *   1 Week
   * *   1 Month
   * *   2 Month
   * *   3 Month
   * *   6 Month
   * *   1 Year
   * *   2 Year
   * *   3 Year
   * 
   * >  The value of this parameter is case-insensitive. For example, `Week` is valid and `week` is invalid. If you specify a value combination other than the preceding combinations, such as `2 Week`, the operation can still be called. However, an error occurs when you place the order.
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
   * Valid value:
   * 
   * *   CloudApp: App Streaming
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

