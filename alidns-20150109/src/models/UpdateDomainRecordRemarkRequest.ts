// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainRecordRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and the response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record.<props="china"> Call the [DescribeDomainRecords](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-describedomainrecords?spm=a2c4g.11186623.help-menu-search-29697.d_0) operation to obtain the record ID.<props="intl"> Call the [DescribeDomainRecords](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomainrecords?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12*****
   */
  recordId?: string;
  /**
   * @remarks
   * The remarks for the DNS record. The default value is empty. If this parameter is left empty, the original remarks are deleted.
   * 
   * @example
   * 我的第一个解析记录
   */
  remark?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.0.2.1
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

