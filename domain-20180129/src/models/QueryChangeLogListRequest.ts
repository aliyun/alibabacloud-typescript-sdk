// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryChangeLogListRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name for which to query change logs.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range to query, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1522080000000
   */
  endDate?: number;
  /**
   * @remarks
   * The language for API error messages. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * Defaults to **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The minimum value is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return per page. The value must be between **1** and **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1522080000000
   */
  startDate?: number;
  /**
   * @remarks
   * The user\\"s IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'number',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startDate: 'number',
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

