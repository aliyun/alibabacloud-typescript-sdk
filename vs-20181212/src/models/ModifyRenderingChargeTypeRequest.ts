// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * > This value is valid only when `InstanceChargeType` is `PrePaid` (subscription).
   * 
   * Enable or disable auto-renewal. Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * > This value is valid only when `InstanceChargeType` is `PostPaid` (pay-as-you-go).
   * 
   * Billing type. Valid values:
   * 
   * - Hour: Hourly.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The target billing method for the instance. Valid values:
   * 
   * - PrePaid (default): Subscription.
   * 
   * - PostPaid: Pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * > This value is valid only when `InstanceChargeType` is `PrePaid` (subscription).
   * 
   * The duration for subscription. Valid values (Note: If you select 12, it converts to one year; other values are in months):
   * 
   * - 1 (default)
   * 
   * - 2
   * 
   * - 3
   * 
   * - 4
   * 
   * - 5
   * 
   * - 6
   * 
   * - 7
   * 
   * - 8
   * 
   * - 9
   * 
   * - 12
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The ID of the Graphic Computing Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceChargeType: 'InstanceChargeType',
      period: 'Period',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      instanceBillingCycle: 'string',
      instanceChargeType: 'string',
      period: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

