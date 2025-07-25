// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBatchDomainRequestDomainRecordInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * >  You can submit 1 to 1,000 domain names. Due to the limit on the length of HTTP request headers, excessive domain names are ignored. Do not enter more than 1,000 domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The DNS request source. Default value: default.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The new hostname (used only for modification operations, not for external users).
   * 
   * @example
   * mail
   */
  newRr?: string;
  /**
   * @remarks
   * The new type of the DNS record (used only for modification operations, not for external users).
   * 
   * @example
   * AAAA
   */
  newType?: string;
  /**
   * @remarks
   * The new value of the DNS record (used only for modification operations, not for external users).
   * 
   * @example
   * 114.92.XX.XX
   */
  newValue?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * This parameter is required if the type of the DNS record is MX. Default value: 10.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The hostname.
   * 
   * >  This parameter is required if you set Type to **RR_ADD** or **RR_DEL**.
   * 
   * @example
   * zhaohui
   */
  rr?: string;
  /**
   * @remarks
   * The time-to-live (TTL) value of the cached DNS record. Unit: seconds. Default value: ***600***.
   * 
   * @example
   * 600
   */
  ttl?: number;
  /**
   * @remarks
   * The type of the DNS record. Valid values: A, AAAA, TXT, MX, and CNAME.
   * 
   * >  This parameter is required if you set Type to **RR_ADD** or **RR_DEL**.
   * 
   * @example
   * MX
   */
  type?: string;
  /**
   * @remarks
   * The value of the DNS record.
   * 
   * >  This parameter is required if you set Type to **RR_ADD** or **RR_DEL**.
   * 
   * @example
   * fd87da3c4528844d45af39200155a905
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      line: 'Line',
      newRr: 'NewRr',
      newType: 'NewType',
      newValue: 'NewValue',
      priority: 'Priority',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      line: 'string',
      newRr: 'string',
      newType: 'string',
      newValue: 'string',
      priority: 'number',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The DNS records. You can submit up to 1,000 DNS records.
   * 
   * This parameter is required.
   */
  domainRecordInfo?: OperateBatchDomainRequestDomainRecordInfo[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: zh
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The type of the batch operation. Valid values:
   * 
   * *   **DOMAIN_ADD**: adds domain names in batches.
   * *   **DOMAIN_DEL**: deletes domain names in batches.
   * *   **RR_ADD**: adds DNS records in batches.
   * *   **RR_DEL**: deletes DNS records in batches. This operation deletes the DNS records with the specified hostname or record value. If you do not specify the Rr and Value parameters, this operation deletes the DNS records that are added for the specified domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * RR_ADD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainRecordInfo: 'DomainRecordInfo',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecordInfo: { 'type': 'array', 'itemType': OperateBatchDomainRequestDomainRecordInfo },
      lang: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainRecordInfo)) {
      $dara.Model.validateArray(this.domainRecordInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

