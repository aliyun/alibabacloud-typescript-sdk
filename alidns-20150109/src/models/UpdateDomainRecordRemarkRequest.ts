// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRecordRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record. You can call the [DescribeDomainRecords](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomainrecords?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  recordId?: string;
  /**
   * @remarks
   * The description of the DNS record. This parameter is empty by default. If this parameter is empty, the original remarks are deleted.
   */
  remark?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.0.2.0
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      remark: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

