// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group. If you do not specify this parameter, all groups are queried.
   * 
   * @example
   * 2****
   */
  groupId?: string;
  /**
   * @remarks
   * The keyword for the query. A case-insensitive \\`contains\\` search is performed.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * The default value is **zh**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. The value starts from **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is **100**. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date. The format is **YYYY-MM-DD**.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The type of content to query.
   * 
   * - domain: domain name
   * 
   * - slavedns: secondary DNS
   * 
   * If you do not specify this parameter, all types are queried.
   * 
   * @example
   * domain
   */
  type?: string;
  /**
   * @remarks
   * The end date. The format is **YYYY-MM-DD**.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      type: 'Type',
      endDate: 'endDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      type: 'string',
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

