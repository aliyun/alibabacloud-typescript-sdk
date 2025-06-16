// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTunnelAttributeResponseBodyTunnelIkeConfig extends $dara.Model {
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
   * The IKE negotiation mode.
   * 
   * *   **main:** This mode offers higher security during negotiations.
   * *   **aggressive**: This mode is faster and has a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The DH group.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The IKE version.
   * 
   * *   **ikev1**
   * *   **ikev2**
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios with multiple CIDR blocks.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The tunnel identifier. The identifier supports FQDNs and IP addresses. The default value is the tunnel IP address.
   * 
   * @example
   * 47.XX.XX.87
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The peer identifier. The identifier supports FQDNs and IP addresses. The default identifier is the IP address of the customer gateway associated with the tunnel.
   * 
   * @example
   * 47.XX.XX.207
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
      psk: 'Psk',
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
      psk: 'string',
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

