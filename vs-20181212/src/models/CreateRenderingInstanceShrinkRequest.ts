// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * > Unless you have special requirements, keep the default value. If you have special requirements, consult and confirm before specifying this parameter.
   * 
   * The attribute information.
   */
  attributesShrink?: string;
  /**
   * @remarks
   * > This parameter takes effect only when `InstanceChargeType` is set to `PrePaid` (subscription).
   * 
   * Specifies whether to enable auto-renewal. Valid values:
   * * **true**: enables auto-renewal.
   * * **false**: disables auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The client information.
   */
  clientInfoShrink?: string;
  /**
   * @remarks
   * > This parameter takes effect only when `InstanceChargeType` is set to `PostPaid` (pay-as-you-go).
   * 
   * The billing cycle. Valid values:
   * 
   * - Hour: hour.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - PrePaid (default): subscription.
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * > Only one billing method is supported. If a billing method already exists, the new value is invalid by default, and the existing billing method prevails. Note that this parameter is required when you purchase the instance for the first time.
   * 
   * The network billing type. Valid values:
   * - 95BandwidthByMonth: monthly 95th percentile bandwidth.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum bandwidth. Unit: Mbit/s. Default value: 10.
   * 
   * @example
   * 10
   */
  internetMaxBandwidth?: number;
  /**
   * @remarks
   * > This parameter takes effect only when `InstanceChargeType` is set to `PrePaid` (subscription).
   * 
   * The subscription duration. Valid values (note: if you select 12, it is calculated as one year, and other values are calculated in months):
   * 
   * - 1 (default)
   * - 2
   * - 3
   * - 4
   * - 5
   * - 6
   * - 7
   * - 8
   * - 9
   * - 12
   * 
   * @example
   * 1
   */
  period?: string;
  /**
   * @remarks
   * The specifications of the cloud application service instance.
   * 
   * - For the crs.cp.* series, the billing method can be subscription or pay-as-you-go.
   * - For the crs.vm.* series, the billing method can be subscription or pay-as-you-go.
   * - For other series, only the subscription billing method is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The cloud storage capacity used by the cloud application service instance. Note: This is not local storage.
   * 
   * @example
   * 20
   */
  storageSize?: string;
  static names(): { [key: string]: string } {
    return {
      attributesShrink: 'Attributes',
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
      attributesShrink: 'string',
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

