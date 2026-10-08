// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForAddingDSRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm number. For more information, see [Domain Name System Security (DNSSEC) Algorithm Numbers](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml). Valid values:
   * - **1**: RSA/MD5.
   * - **2**: Diffie-Hellman.
   * - **3**: DSA/SHA-1.
   * - **5**: RSA/SHA-1.
   * - **6**: DSA-NSEC3-SHA1.
   * - **7**: RSASHA1-NSEC3-SHA1.
   * - **8**: RSA/SHA-256.
   * - **10**: RSA/SHA-512.
   * - **12**: GOST R 34.10-2001.
   * - **13**: ECDSA Curve P-256 with SHA-256.
   * - **14**: ECDSA Curve P-384 with SHA-384.
   * - **15**: Ed25519 and Ed448.
   * - **252**: Reserved for Indirect Keys.
   * - **253**: private algorithm.
   * - **254**: private algorithm OID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * Summary.
   * 
   * This parameter is required.
   * 
   * @example
   * f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598
   */
  digest?: string;
  /**
   * @remarks
   * Summary algorithm type. For more information, see [Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml). Valid values:
   * - **1**: SHA-1;
   * - **2**: SHA-256;
   * - **3**: GOST R 34.11-94;
   * - **4**: SHA-384.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  digestType?: number;
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Key tag used to identify DNSSEC records. It is an integer less than 65536.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:
   * - **zh**: Chinese;
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address, which can be set to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      domainName: 'DomainName',
      keyTag: 'KeyTag',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      digest: 'string',
      digestType: 'number',
      domainName: 'string',
      keyTag: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

