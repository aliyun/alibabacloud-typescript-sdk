// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.<props="china">You can call the [DescribeDomains](https://help.aliyun.com/document_detail/29751.html) operation to obtain the domain name.<props="intl">You can call the [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The keyword. The system searches for the keyword in the "%KeyWord%" pattern. The search is not case-sensitive.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
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
   * The page number. The value starts from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query. The format is **YYYY-MM-DD**.
   * 
   * @example
   * 2015-12-12
   */
  startDate?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.0.2.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The end of the time range to query. The format is **YYYY-MM-DD**.
   * 
   * @example
   * 2015-12-12
   */
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      userClientIp: 'UserClientIp',
      endDate: 'endDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      userClientIp: 'string',
      endDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

