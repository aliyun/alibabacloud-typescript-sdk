// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDSRecordResponseBodyDSRecordList extends $dara.Model {
  /**
   * @remarks
   * Encryption algorithm number. For more information, see [Domain Name System Security (DNSSEC) Algorithm Numbers](https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml). Valid values:
   *  - **1**: RSA/MD5;
   *  - **2**: Diffie-Hellman;
   *  - **3**: DSA/SHA-1;
   *  - **5**: RSA/SHA-1;
   *  - **6**: DSA-NSEC3-SHA1;
   *  - **7**: RSASHA1-NSEC3-SHA1;
   *  - **8**: RSA/SHA-256;
   *  - **10**: RSA/SHA-512;
   *  - **12**: GOST R 34.10-2001;
   *  - **13**: ECDSA Curve P-256 with SHA-256;
   *  - **14**: ECDSA Curve P-384 with SHA-384;
   *  - **15**: Ed25519;
   *  - **16**: Ed448;
   *  - **252**: Reserved for Indirect Keys;
   *  - **253**: private algorithm;
   *  - **254**: private algorithm OID.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * Digest value.
   * 
   * @example
   * f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598
   */
  digest?: string;
  /**
   * @remarks
   * Digest algorithm type. For more information, see [Delegation Signer (DS) Resource Record (RR) Type Digest Algorithms](https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml). Valid values:
   *  - **1**: SHA-1;
   *  - **2**: SHA-256;
   *  - **3**: GOST R 34.11-94;
   *  - **4**: SHA-384.
   * 
   * @example
   * 2
   */
  digestType?: number;
  /**
   * @remarks
   * Key tag used to identify DNSSEC records. It is an integer less than 65536.
   * 
   * @example
   * 1
   */
  keyTag?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      keyTag: 'KeyTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      digest: 'string',
      digestType: 'number',
      keyTag: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of DS records.
   */
  DSRecordList?: QueryDSRecordResponseBodyDSRecordList[];
  /**
   * @remarks
   * Unique request ID.
   * 
   * @example
   * 814B2AF0-ED6F-4C13-B41C-8AC0B1023583
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DSRecordList: 'DSRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DSRecordList: { 'type': 'array', 'itemType': QueryDSRecordResponseBodyDSRecordList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DSRecordList)) {
      $dara.Model.validateArray(this.DSRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

