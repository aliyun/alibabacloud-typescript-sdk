// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The primary domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns-example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. The parameter value is not case-sensitive. Valid values:
   * 
   * *   PUBLIC (default): hosted public domain name
   * *   CACHE: cache-accelerated domain name
   * 
   * @example
   * PUBLIC
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
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The hostname. If you want to resolve www.dns-exmaple.top, set Rr to www.
   * 
   * This parameter is required.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The start date of the query. Specify the start date in the **YYYY-MM-DD** format.
   * 
   * You can only query the DNS records within the last 90 days.``
   * 
   * If the time range is less than or equal to seven days, data is returned on an hourly basis.````
   * 
   * If the time range is greater than seven days, data is returned on a daily basis.````
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

