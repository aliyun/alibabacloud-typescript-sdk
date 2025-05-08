// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecordRequestData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used for the record, specified within the range from 0 to 255. This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key of the certificate. This parameter is required when you add CERT, SMIMEA, or TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record. This parameter is required when you add a SSHFP record.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed, specified within the range of 0 to 255. This parameter is required when you add a CAA record.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identification for the record, specified within the range of 0 to 65,535. This parameter is required when you add a CAA record.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate the certificate, specified within the range 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record, specified within the range of 0 to 65,535. This parameter is required when you add an SRV record.
   * 
   * @example
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record, specified within the range of 0 to 65,535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  selector?: number;
  /**
   * @remarks
   * The label of the record. The Tag of a CAA record indicate its specific type and usage. This parameter is required when you add a CAA record. Valid values:
   * 
   * *   **issue**: indicates that a CA is authorized to issue a certificate for the domain name. This is usually followed by the domain name of the CA.
   * *   **issuewild**: indicates that a CA is authorized to issue a wildcard certificate (such as \\*.example.com) for the domain name.
   * *   **iodef**: specifies a URI to receive reports about CAA record violations.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type of the record (in CERT records), or the public key type (in SSHFP records). This parameter is required when you add CERT or SSHFP records.
   * 
   * @example
   * RSA
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
   * 
   * @example
   * 1
   */
  usage?: number;
  /**
   * @remarks
   * Record value or part of the record content. This parameter is required when you add A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings based on types of records:
   * 
   * *   **A/AAAA**: the IP address(es). Separate IP addresses with commas (,). You must have at least one IPv4 address.
   * *   **CNAME**: the target domain name.
   * *   **NS**: the name servers for the domain name.
   * *   **MX**: a valid domain name of the target mail server.
   * *   **TXT**: a valid text string.
   * *   **CAA**: a valid domain name of the certificate authority.
   * *   **SRV**: a valid domain name of the target host.
   * *   **URI**: a valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record, specified within the range of 0 to 65,535. This parameter is required when you add SRV or URI records.
   * 
   * @example
   * 0
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificate: 'Certificate',
      fingerprint: 'Fingerprint',
      flag: 'Flag',
      keyTag: 'KeyTag',
      matchingType: 'MatchingType',
      port: 'Port',
      priority: 'Priority',
      selector: 'Selector',
      tag: 'Tag',
      type: 'Type',
      usage: 'Usage',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      certificate: 'string',
      fingerprint: 'string',
      flag: 'number',
      keyTag: 'number',
      matchingType: 'number',
      port: 'number',
      priority: 'number',
      selector: 'number',
      tag: 'string',
      type: 'number',
      usage: 'number',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

