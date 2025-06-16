// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm in the IKE phase.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm in the IKE phase.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime in the IKE phase. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The negotiation mode of IKE. Valid values:
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
   * The Diffie-Hellman (DH) group in the IKE phase.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the tunnel on the Alibaba Cloud side.
   * 
   * @example
   * 47.XX.XX.1
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
   * The peer identifier.
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

