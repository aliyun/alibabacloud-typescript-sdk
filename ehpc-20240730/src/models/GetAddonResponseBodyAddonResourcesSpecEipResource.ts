// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonResponseBodyAddonResourcesSpecEipResource extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the EIP is automatically created.
   * 
   * @example
   * True
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 39.108.xx.xx
   */
  eipAddress?: string;
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The billing method of the EIP.
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   PayByBandwidth: pay by bandwidth.
   * *   PayByTraffic: pay by data transfer.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      eipAddress: 'EipAddress',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipAddress: 'string',
      eipInstanceId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

