// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpsecServersResponseBodyIpsecServersIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The IKE authentication algorithm.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The IKE encryption algorithm.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The IKE lifetime. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode. Valid values:
   * 
   * **main**: This mode offers higher security during negotiations.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The IKE version.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The ID of the IPsec server. The default value is the public IP address of the VPN gateway. Both FQDNs and IP addresses are supported.
   * 
   * @example
   * 116.64.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The identifier of the customer gateway. Both fully qualified domain names (FQDNs) and IP addresses are supported. By default, this parameter is empty.
   * 
   * @example
   * 139.67.XX.XX
   */
  remoteId?: string;
  static names(): { [key: string]: string } {
    return {
      ikeAuthAlg: 'IkeAuthAlg',
      ikeEncAlg: 'IkeEncAlg',
      ikeLifetime: 'IkeLifetime',
      ikeMode: 'IkeMode',
      ikePfs: 'IkePfs',
      ikeVersion: 'IkeVersion',
      localId: 'LocalId',
      remoteId: 'RemoteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ikeAuthAlg: 'string',
      ikeEncAlg: 'string',
      ikeLifetime: 'number',
      ikeMode: 'string',
      ikePfs: 'string',
      ikeVersion: 'string',
      localId: 'string',
      remoteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

