// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name group.
   * 
   * @example
   * 2223
   */
  groupId?: string;
  /**
   * @remarks
   * The keyword for the query in "%KeyWord%" mode. The keyword is not case-sensitive.
   * 
   * @example
   * test
   */
  keyWord?: string;
  /**
   * @remarks
   * The language in which you want the values of some response parameters to be returned. These response parameters support multiple languages.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number to return. The page number starts from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for the query. Format: **YYYY-MM-DD**
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The type of object of which you want to query operation logs. Valid values:
   * 
   * *   domain: domain name
   * *   slavedns: secondary Domain Name System (DNS)
   * 
   * @example
   * domain
   */
  type?: string;
  /**
   * @remarks
   * The end time for the query. Format: **YYYY-MM-DD**
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

