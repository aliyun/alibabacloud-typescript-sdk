// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainDnssecInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm type. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * 13
   */
  algorithm?: string;
  /**
   * @remarks
   * The digest. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * C1A0424B97A049F1F9B2EA139CC298533219668164E343BD21203ABC4608C02A
   */
  digest?: string;
  /**
   * @remarks
   * The digest type. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * SHA256
   */
  digestType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The Delegation Signer (DS) record. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * example.com. 3600 IN DS 2371 13 2 C1A0424B97A049F1F9B2EA139CC29853321966816***************
   */
  dsRecord?: string;
  /**
   * @remarks
   * The flags. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * 257 (KSK)
   */
  flags?: string;
  /**
   * @remarks
   * The key tag. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * 54931
   */
  keyTag?: string;
  /**
   * @remarks
   * The public key. This parameter is returned if DNSSEC is enabled.
   * 
   * @example
   * mdsswUyr3DPW132m******************
   */
  publicKey?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The status of DNSSEC. Valid values:
   * 
   * - ON: Enabled
   * 
   * - OFF: Disabled
   * 
   * @example
   * ON
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      domainName: 'DomainName',
      dsRecord: 'DsRecord',
      flags: 'Flags',
      keyTag: 'KeyTag',
      publicKey: 'PublicKey',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      digestType: 'string',
      domainName: 'string',
      dsRecord: 'string',
      flags: 'string',
      keyTag: 'string',
      publicKey: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

