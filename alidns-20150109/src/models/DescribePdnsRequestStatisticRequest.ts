// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsRequestStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The primary domain name for which you want to query statistics.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end date of the query in the **YYYY-MM-DD** format.
   * 
   * The default value is the current day.
   * 
   * @example
   * 2024-07-01
   */
  endDate?: string;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start date of the query in the **YYYY-MM-DD** format.
   * 
   * You can query data from the last 90 days.
   * 
   * @example
   * 2024-06-14
   */
  startDate?: string;
  /**
   * @remarks
   * The subdomain for which you want to query statistics.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The dimension for statistics. Valid values:
   * 
   * - **ACCOUNT**: queries statistics by account.
   * 
   * - **DOMAIN**: queries statistics by domain name. The DomainName parameter is required.
   * 
   * - **SUB_DOMAIN**: queries statistics by subdomain. The DomainName and SubDomain parameters are required.
   * 
   * @example
   * ACCOUNT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
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

