// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true**: Enables automatic payment. Make sure that your account balance is sufficient.
   * - **false**: Generates an unpaid order without deducting fees. This is the default value.
   * 
   * > If your payment method has an insufficient balance, you can set this parameter to false. An unpaid order is generated, and you can log on to the WUYING Cloud Phone console to complete the payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * - **true**: Enables auto-renewal.
   * - **false**: Disables auto-renewal. This is the default value.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The region where the agent is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The device type.
   * 
   * This parameter is required.
   * 
   * @example
   * BOX
   */
  deviceClass?: string;
  /**
   * @remarks
   * The subscription duration of the resource. The unit is specified by PeriodUnit.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * - **Month**: month
   * - **Year**: year
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The number of packages.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      clientToken: 'ClientToken',
      deviceClass: 'DeviceClass',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizRegionId: 'string',
      clientToken: 'string',
      deviceClass: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

