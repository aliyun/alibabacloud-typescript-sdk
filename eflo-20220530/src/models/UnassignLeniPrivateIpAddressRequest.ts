// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassignLeniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotent identifier.
   * 
   * @example
   * 967e77a2-b61d-11ec-a147-0242c0a80504
   */
  clientToken?: string;
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
      clientToken: 'ClientToken',
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

