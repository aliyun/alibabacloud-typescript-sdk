// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm that is used in IPsec Phase 2 negotiations.
   * 
   * <props="china">
   * 
   * *   If an IPsec-VPN gateway is associated with a standard VPN gateway, the valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.
   * *   If the IPsec-VPN gateway is associated with an SSL-VPN gateway, set the value to **sm3**.
   * 
   * 
   * 
   * <props="intl">
   * 
   * Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm that is used in IPsec Phase 2 negotiations.
   * 
   * <props="china">
   * 
   * *   If an IPsec-VPN gateway is associated with a standard VPN gateway, the valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.
   * *   If the IPsec connection is attached to a VPN gateway that uses an SM certificate, set the value to **sm4**.
   * 
   * 
   * 
   * <props="intl">
   * 
   * Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime as a result of Phase 2 negotiations. Unit: seconds Valid values: **0 to 86400**.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm that is used in Phase 2 negotiations. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**.
   * 
   * @example
   * group2
   */
  ipsecPfs?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecAuthAlg: 'IpsecAuthAlg',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecLifetime: 'IpsecLifetime',
      ipsecPfs: 'IpsecPfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecAuthAlg: 'string',
      ipsecEncAlg: 'string',
      ipsecLifetime: 'number',
      ipsecPfs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

