// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsRequestStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The primary domain name whose statistics you want to query.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * The default value is the day when you query the data.
   * 
   * @example
   * 2024-07-14 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
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
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * You can query only records of the last 90 days.
   * 
   * @example
   * 2024-06-14 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The subdomain name whose statistics you want to query.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The type of the request statistics that you want to query. Valid values:
   * 
   * *   DOMAIN: queries the request statistics by domain name.
   * *   SUB_DOMAIN: queries the request statistics by subdomain name.
   * 
   * @example
   * DOMAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      subDomain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

