// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The primary domain name.
   * <props="china">For more information, see [DescribeDomains](https://help.aliyun.com/document_detail/29751.html).
   * <props="intl">For more information, see [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains).
   * 
   * This parameter is required.
   * 
   * @example
   * exmaple.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. This parameter is not case-sensitive. Valid values:
   * 
   * - PUBLIC (default): authoritative domain name
   * 
   * - CACHE: authoritative proxy domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The end date of the query. The format is **YYYY-MM-DD**.
   * 
   * The default value is the current date.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The language of the return value. Valid values:
   * 
   * - zh (default): Chinese
   * 
   * - en: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The host record. For example, to resolve www\\.example.com, set this parameter to www.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The start date of the query. The format is **YYYY-MM-DD**.
   * 
   * The start date must be within the last 90 days.
   * 
   * If the time range of the query is 7 days or less, data is returned by the hour.
   * 
   * If the time range of the query is more than 7 days, data is returned by the day.
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
      rr: 'Rr',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      lang: 'string',
      rr: 'string',
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

