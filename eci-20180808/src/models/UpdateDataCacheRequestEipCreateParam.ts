// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataCacheRequestEipCreateParam extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the EIP. Unit: Mbit/s. Default value: 5.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The EIP bandwidth plan to be associated.
   * 
   * @example
   * cbwp-2zeukbj916scmj51m****
   */
  commonBandwidthPackage?: string;
  /**
   * @remarks
   * The line type of the EIP. Valid values:
   * 
   * *   BGP (default): BGP (Multi-ISP) line
   * *   BGP_PRO: BGP (Multi-ISP) Pro line
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-data-transfer
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the IP address pool. The EIP is allocated from the IP address pool. You cannot use the IP address pool feature by default. To use this feature, you must apply for the privilege in the Quota Center console.
   * 
   * @example
   * pippool-bp187arfugi543y1s****
   */
  publicIpAddressPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      commonBandwidthPackage: 'CommonBandwidthPackage',
      ISP: 'ISP',
      internetChargeType: 'InternetChargeType',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      commonBandwidthPackage: 'string',
      ISP: 'string',
      internetChargeType: 'string',
      publicIpAddressPoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

