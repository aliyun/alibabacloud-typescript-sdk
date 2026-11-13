// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelOperatorServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of compute resource CUs for the model creation operator sub-service. The value must be an integer greater than 0. The available specifications and prices are subject to the actual sales configurations in the target region.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PostPay: pay-as-you-go. This is the default value.
   * - PrePay: subscription. You must also specify UsedTime and Period.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is required when PayType is set to PrePay. Valid values: Month and Year. This parameter is used together with UsedTime and is not required for pay-as-you-go.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The ID of the region to which the service belongs. This parameter is required and must be consistent with the request endpoint and the purchase region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required when PayType is set to PrePay. The value must be a positive integer string, and the unit is specified by Period. The actual available duration is subject to the sales configurations. This parameter is not required for pay-as-you-go.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

