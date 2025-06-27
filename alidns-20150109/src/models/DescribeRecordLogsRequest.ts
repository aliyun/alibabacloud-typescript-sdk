// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date of the query. Specify the start date in the **YYYY-MM-DD** format.
   * 
   * @example
   * 2015-12-12
   */
  startDate?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 1.1.1.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * The end date of the query. Specify the end date in the **YYYY-MM-DD** format.
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

