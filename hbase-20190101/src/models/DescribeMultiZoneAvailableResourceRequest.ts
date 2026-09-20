// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiZoneAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - Prepaid: subscription.
   * - Postpaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone combination. If this parameter is not specified, all zone combinations in the region are queried.
   * 
   * @example
   * cn-hangzhou-bef-aliyun
   */
  zoneCombination?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      regionId: 'RegionId',
      zoneCombination: 'ZoneCombination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      regionId: 'string',
      zoneCombination: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

