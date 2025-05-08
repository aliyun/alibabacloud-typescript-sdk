// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsResponseBodyRecordsData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used for the record. Valid values: 0 to 255. Exclusive to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key of the certificate. Exclusive to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record. Exclusive to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed. Valid values: 0 to 255. Exclusive to CAA records.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identification for the record. Valid values: 0 to 65535. Exclusive to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate the certificate. Valid values: 0 to 255. Exclusive to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  matchingType?: number;
  /**
   * @remarks
   * The port of the record. Valid values: 0 to 65535. Exclusive to SRV records.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: 0 to 65535. A smaller value indicates a higher priority. Exclusive to MX, SRV, and URI records.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key. Valid values: 0 to 255. Exclusive to SMIMEA, and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of the record. The Tag of a CAA record indicate its specific type and usage. Exclusive to CAA records.
   * 
   * @example
   * issue
   */
  tag?: string;
  /**
   * @remarks
   * The certificate type of the record (in CERT records), or the public key type (in SSHFP records).
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * The usage identifier of the record. Valid values: 0 to 255. Exclusive to SMIMEA, and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * Record value or part of the record content. This value is returned when the record is A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, or URI. It has different meanings based on types of records:
   * 
   * *   **A/AAAA**: the IP addresses. IP addresses are separated by commas (,). There is at least one IPv4 address.
   * *   **CNAME**: the pointed/mapped domain name.
   * *   **NS**: the nameservers for the domain name.
   * *   **MX**: a valid domain name of the mail server.
   * *   **TXT**: a valid text string.
   * *   **CAA**: a valid domain name of the certificate authority.
   * *   **SRV**: a valid domain name of the target host.
   * *   **URI**: a valid URI string.
   * 
   * @example
   * CNAME
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: 0 to 65535. Exclusive to SRV and URI records.
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

