// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransportCertificateInfo extends $dara.Model {
  /**
   * @remarks
   * The signature/key algorithm.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate identifier (certificate ID under the APIG cloud account).
   * 
   * @example
   * cert-1（1716***@cn-hangzhou 形态）
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * cert-name
   */
  certName?: string;
  /**
   * @remarks
   * The match status between the certificate and gateway instance domain names.
   * 
   * @example
   * Matched
   */
  certificateMatchStatus?: string;
  /**
   * @remarks
   * The certificate Common Name (CN).
   * 
   * @example
   * api.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The set of covered domain names parsed from CN and SAN (deduplicated in lowercase, may contain *. wildcards).
   */
  coveredDomains?: string[];
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * DigiCert Secure Site CN CA G3
   */
  issuer?: string;
  /**
   * @remarks
   * The gateway instance domain names matched by covered domains (ordered by instance domain name, deduplicated).
   */
  matchedDomains?: string[];
  /**
   * @remarks
   * The expiration timestamp (Unix milliseconds, from the certificate afterDate).
   * 
   * @example
   * 1747958400000
   */
  notAfterTimestamp?: number;
  /**
   * @remarks
   * The effective period UNIX timestamp (Unix milliseconds, from the certificate beforeDate).
   * 
   * @example
   * 1716336000000
   */
  notBeforeTimestamp?: number;
  /**
   * @remarks
   * The raw SAN string (separated by commas, semicolons, or whitespace. Elements may have a DNS: prefix).
   * 
   * @example
   * DNS:*.example.org, DNS:foo.example.net
   */
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      certificateMatchStatus: 'certificateMatchStatus',
      commonName: 'commonName',
      coveredDomains: 'coveredDomains',
      issuer: 'issuer',
      matchedDomains: 'matchedDomains',
      notAfterTimestamp: 'notAfterTimestamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      sans: 'sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      certName: 'string',
      certificateMatchStatus: 'string',
      commonName: 'string',
      coveredDomains: { 'type': 'array', 'itemType': 'string' },
      issuer: 'string',
      matchedDomains: { 'type': 'array', 'itemType': 'string' },
      notAfterTimestamp: 'number',
      notBeforeTimestamp: 'number',
      sans: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coveredDomains)) {
      $dara.Model.validateArray(this.coveredDomains);
    }
    if(Array.isArray(this.matchedDomains)) {
      $dara.Model.validateArray(this.matchedDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

