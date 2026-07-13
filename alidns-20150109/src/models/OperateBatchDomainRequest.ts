// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateBatchDomainRequestDomainRecordInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * > A single request can contain up to 200 entries. Exceeding this limit may cause the request to fail due to the HTTP request header size limit.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The resolution line. Default value: default.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The new host record. This parameter is used only for modification operations and is for internal use only.
   * 
   * @example
   * mail
   */
  newRr?: string;
  /**
   * @remarks
   * The new record type. This parameter is used only for modification operations and is for internal use only.
   * 
   * @example
   * AAAA
   */
  newType?: string;
  /**
   * @remarks
   * The new record value. This parameter is used only for modification operations and is for internal use only.
   * 
   * @example
   * 114.92.XX.XX
   */
  newValue?: string;
  /**
   * @remarks
   * The MX priority.
   * 
   * This parameter is required if the record type is MX. Default value: 10.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The host record.
   * 
   * > This parameter is required when `Type` is **RR_ADD** or **RR_DEL**.
   * 
   * @example
   * zhaohui
   */
  rr?: string;
  /**
   * @remarks
   * The TTL, in seconds. Default value: ***600***.
   * 
   * @example
   * 600
   */
  ttl?: number;
  /**
   * @remarks
   * The record type. Examples: A, AAAA, TXT, MX, and CNAME.
   * 
   * > This parameter is required when `Type` is **RR_ADD** or **RR_DEL**.
   * 
   * @example
   * MX
   */
  type?: string;
  /**
   * @remarks
   * The record value.
   * 
   * > This parameter is required when `Type` is **RR_ADD** or **RR_DEL**.
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
   * The data for the batch operation.
   * 
   * This parameter is required.
   */
  domainRecordInfo?: OperateBatchDomainRequestDomainRecordInfo[];
  /**
   * @remarks
   * The response language. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: zh
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The batch operation type. Valid values:
   * 
   * - **DOMAIN_ADD**: adds domain names in batches.
   * 
   * - **DOMAIN_DEL**: deletes domain names in batches.
   * 
   * - **RR_ADD**: adds DNS records in batches.
   * 
   * - **RR_DEL**: deletes DNS records in batches. This operation deletes DNS records that match the conditions specified by `Rr`, `Value`, or both. If you do not specify `Rr` and `Value`, all DNS records for the specified domain name are deleted.
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

