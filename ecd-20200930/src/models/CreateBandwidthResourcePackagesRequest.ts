// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBandwidthResourcePackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the data transfer plans that you want to create at the same time. Valid values: 1 to 20. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The size of the data transfer plan. Valid values: 10 to 1000. Unit: GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  packageSize?: number;
  /**
   * @remarks
   * The subscription duration. The valid values of this parameter vary based on the value of `PeriodUnit`.
   * 
   * *   If `PeriodUnit` is set to `Month`, the valid values of Period are 1, 3, and 6.
   * *   If `PeriodUnit` is set to `Year`, the valid value of Period is 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotional activity.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      packageSize: 'PackageSize',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      packageSize: 'number',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

