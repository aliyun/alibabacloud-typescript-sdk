// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. You can call the [DescribeDomains](https://www.alibabacloud.com/help/zh/dns/api-alidns-2015-01-09-describedomains?spm=a2c63.p38356.help-menu-search-29697.d_0) operation to obtain the domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   PUBLIC (default): hosted public domain name
   * *   CACHE: cached public domain name
   * 
   * @example
   * PUBLIC CACHE
   */
  domainType?: string;
  /**
   * @remarks
   * The end date of the query. Specify the end date in the **YYYY-MM-DD** format.
   * 
   * The default value is the day when you query the data.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The start date of the query. Specify the start date in the **YYYY-MM-DD** format.
   * 
   * You can only query the DNS records within the last 90 days.``
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

