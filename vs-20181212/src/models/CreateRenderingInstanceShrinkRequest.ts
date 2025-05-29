// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingInstanceShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  clientInfoShrink?: string;
  instanceBillingCycle?: string;
  /**
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidth?: number;
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
   * crs.cp.l1
   */
  renderingSpec?: string;
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientInfoShrink: 'ClientInfo',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidth: 'InternetMaxBandwidth',
      period: 'Period',
      renderingSpec: 'RenderingSpec',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientInfoShrink: 'string',
      instanceBillingCycle: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidth: 'number',
      period: 'string',
      renderingSpec: 'string',
      storageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

