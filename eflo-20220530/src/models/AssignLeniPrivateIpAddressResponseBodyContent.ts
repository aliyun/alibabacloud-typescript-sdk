// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssignLeniPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID.
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * Lingjun Elastic Network Interface secondary private IP unique identifier.
   * 
   * @example
   * sip-lzwx****
   */
  ipName?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ipName: 'IpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ipName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

