// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateRecordsRequestRecordListData extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used for the record. Valid values: 0 to 255. Applicable to CERT and SSHFP records.
   * 
   * @example
   * 0
   */
  algorithm?: number;
  /**
   * @remarks
   * The public key of the certificate. Applicable to CERT, SMIMEA, and TLSA records.
   * 
   * @example
   * dGVzdGFkYWxrcw==
   */
  certificate?: string;
  /**
   * @remarks
   * The public key fingerprint of the record. Applicable to SSHFP records.
   * 
   * @example
   * abcdef1234567890
   */
  fingerprint?: string;
  /**
   * @remarks
   * The Flag for a CAA record indicates its priority and how it is processed. Valid values: 0 to 255.
   * 
   * @example
   * 128
   */
  flag?: number;
  /**
   * @remarks
   * The public key identification for the record. Valid values: 0 to 65535. Applicable to CERT records.
   * 
   * @example
   * 0
   */
  keyTag?: number;
  /**
   * @remarks
   * The algorithm policy used to match or validate the certificate. Valid values: 0 to 255. Applicable to SMIMEA, and TLSA records.
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
   * 0
   */
  port?: number;
  /**
   * @remarks
   * The priority of the record. Valid values: 0 to 65535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The type of certificate or public key. Valid values: 0 to 255. Applicable to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  selector?: number;
  /**
   * @remarks
   * The tag of a CAA record, which indicates its specific type and purpose, such as issue, issuewild, and iodef.
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
   * The usage identifier of the record. Valid values: 0 to 255. Applicable to SMIMEA and TLSA records.
   * 
   * @example
   * 0
   */
  usage?: number;
  /**
   * @remarks
   * The record value or part of the record content. A/AAAA: the IP address being pointed to. CNAME: the target domain name being pointed to. MX: valid target mail server domain name. TXT: valid text string. CAA: valid certificate authority domain name. SRV: valid target host domain name. URI: valid URI string.
   * 
   * @example
   * example.com
   */
  value?: string;
  /**
   * @remarks
   * The weight of the record. Valid values: 0 to 65,535. Applicable to SRV and URI records.
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

