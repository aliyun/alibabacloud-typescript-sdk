// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnAttachmentAttributeResponseBodyIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm that is used in Phase 1 negotiations.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm that is used in Phase 1 negotiations.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime that is determined by Phase 1 negotiations. Unit: seconds.
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
   * *   **aggressive**: This mode is faster with a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The DH key exchange algorithm that is used in Phase 1 negotiations.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol.
   * 
   * *   **ikev1**
   * *   **ikev2**
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios with multiple CIDR blocks.
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the IPsec-VPN connection on the Alibaba Cloud side.
   * 
   * @example
   * 47.XX.XX.1
   */
  localId?: string;
  /**
   * @remarks
   * Enter a pre-shared key that is used for identity authentication between Alibaba Cloud and the data center.
   * 
   * >  The pre-shared key of the IPsec-VPN connection must be the same as the authentication key of the on-premises data center. Otherwise, connections between the on-premises data center and Alibaba Cloud cannot be established.
   * 
   * @example
   * 1234***
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the IPsec-VPN connection on the data center side.
   * 
   * @example
   * 47.XX.XX.2
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

