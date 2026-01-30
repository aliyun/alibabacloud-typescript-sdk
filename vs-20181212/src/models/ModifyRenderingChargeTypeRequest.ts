// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRenderingChargeTypeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
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

