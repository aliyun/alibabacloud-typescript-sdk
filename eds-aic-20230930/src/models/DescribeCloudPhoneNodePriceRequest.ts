// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of cloud phone matrices to purchase.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * Specifies whether to use a single image disk. Default value: false. Valid values:
   * 
   * - true: Uses only the system disk.
   * 
   * - false: Uses the system disk and the shared internal storage image disk.
   * 
   * @example
   * false
   */
  isSingleImgDisk?: boolean;
  /**
   * @remarks
   * The subscription period of the resource. The unit is specified by PeriodUnit. Valid values: 1 month, 2 months, 3 months, 6 months, and 1 year.
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * - **Month**: Month.
   * - **Year**: Year.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The number of provisioned instances, which refers to the number of cloud phone instances in the matrix.
   * 
   * @example
   * 40
   */
  phoneCount?: number;
  /**
   * @remarks
   * The size of the dedicated internal storage. Unit: GiB.
   * 
   * @example
   * 20
   */
  phoneDataVolume?: number;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The size of the shared internal storage. Unit: GiB.
   * 
   * > The minimum size of the shared internal storage must be greater than the number of instances in the matrix multiplied by 10 GiB.
   * 
   * @example
   * 200
   */
  serverShareDataVolume?: number;
  /**
   * @remarks
   * The specifications of the cloud phone matrix.
   * 
   * This parameter is required.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The size of the swap space.
   * 
   * @example
   * 10
   */
  swapSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      count: 'Count',
      isSingleImgDisk: 'IsSingleImgDisk',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      phoneDataVolume: 'PhoneDataVolume',
      promotionId: 'PromotionId',
      serverShareDataVolume: 'ServerShareDataVolume',
      serverType: 'ServerType',
      swapSize: 'SwapSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      count: 'string',
      isSingleImgDisk: 'boolean',
      period: 'string',
      periodUnit: 'string',
      phoneCount: 'number',
      phoneDataVolume: 'number',
      promotionId: 'string',
      serverShareDataVolume: 'number',
      serverType: 'string',
      swapSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

