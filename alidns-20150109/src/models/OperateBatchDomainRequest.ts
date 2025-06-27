// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OperateBatchDomainRequestDomainRecordInfo } from "./OperateBatchDomainRequestDomainRecordInfo";


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

