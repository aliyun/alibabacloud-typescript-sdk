// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransportCertificateInfo extends $dara.Model {
  /**
   * @remarks
   * The signature or key algorithm.
   * 
   * @example
   * RSA_2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate identifier, which is the certificate ID under the APIG cloud account.
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
   * The matching status between the certificate and the instance domain names.
   * 
   * @example
   * Matched
   */
  certificateMatchStatus?: string;
  /**
   * @remarks
   * The common name (CN) of the certificate.
   * 
   * @example
   * api.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The set of covered domain names parsed from the CN and SAN. The domain names are in lowercase, deduplicated, and may include wildcards such as *.
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
   * The gateway instance domain names matched by the covered domain names. The order follows the instance domain names, and the results are deduplicated.
   */
  matchedDomains?: string[];
  /**
   * @remarks
   * The expiration timestamp in UNIX milliseconds, which is obtained from the afterDate of the certificate.
   * 
   * @example
   * 1747958400000
   */
  notAfterTimestamp?: number;
  /**
   * @remarks
   * The UNIX timestamp for the effective period in milliseconds, which is obtained from the beforeDate of the certificate.
   * 
   * @example
   * 1716336000000
   */
  notBeforeTimestamp?: number;
  /**
   * @remarks
   * The raw Subject Alternative Name (SAN) string separated by commas, semicolons, or spaces. Elements may include the DNS: prefix.
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

