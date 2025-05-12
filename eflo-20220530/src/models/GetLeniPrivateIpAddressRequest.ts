// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * This parameter is required.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * sip-8ylg****
   */
  ipName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

