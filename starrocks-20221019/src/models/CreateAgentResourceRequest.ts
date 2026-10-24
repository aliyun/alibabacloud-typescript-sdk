// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is valid only when PayType is set to prePaid. Default value: false.
   * 
   * @example
   * True
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The number of compute units (CUs). A CU is the basic metering unit of the service. One CU equals one vCPU and 4 GiB of memory. If SpecType is set to the memory-enhanced instance family, one CU equals one vCPU and 8 GiB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * The subscription duration. This parameter is valid only when PayType is set to prePaid.
   * 
   * @example
   * 2
   */
  duration?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method. Valid values:<ol><li>prePaid: subscription.</li><li>postPaid: pay-as-you-go.</li></ol>
   * 
   * This parameter is required.
   * 
   * @example
   * prePay
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:<ul><li>Month</li><li>Year</li></ul>This parameter is valid only when PayType is set to prePaid.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 2345
   */
  promotionOptionNo?: string;
  /**
   * @remarks
   * The specification type of the compute group.
   * 
   * @example
   * standard
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      cu: 'Cu',
      duration: 'Duration',
      instanceId: 'InstanceId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      promotionOptionNo: 'PromotionOptionNo',
      specType: 'SpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      cu: 'number',
      duration: 'number',
      instanceId: 'string',
      payType: 'string',
      pricingCycle: 'string',
      promotionOptionNo: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

