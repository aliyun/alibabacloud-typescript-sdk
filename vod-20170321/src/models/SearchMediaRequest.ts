// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset fields to return in the search results.
   * 
   * By default, only basic media asset fields are returned. You can specify additional media asset fields to return. For more information, see [Usage examples](https://help.aliyun.com/document_detail/99179.html).
   * 
   * @example
   * Title,CoverURL
   */
  fields?: string;
  /**
   * @remarks
   * The filter conditions. For syntax rules, see [Search protocol syntax](https://help.aliyun.com/document_detail/86991.html).
   * 
   * @example
   * field = value
   */
  match?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * > If this parameter exceeds **200**, set the ScrollToken parameter as well.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of records per page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token. The value is a 32-character string.
   * You do not need to set this parameter for the first search request. When the search request matches data, the server returns this parameter value, which records the current position of the search data. Record the returned value and set this parameter in the next search request based on the following requirements or recommendations:
   * - If SearchType is set to **video** or **audio** and you need to traverse all data that matches the search conditions, this parameter is required.
   * - If PageNo exceeds **200**, set this parameter to optimize search performance.
   * 
   * @example
   * 24e0fba7188fae707e146esa54****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The type of media asset to search. Valid values:
   * 
   * - **video** (default): video.
   * - **audio**: audio.
   * - **image**: image.
   * - **attached**: auxiliary media asset.
   * 
   * > If this parameter is set to **video** or **audio** and you need to traverse all data that matches the search conditions, you must set the ScrollToken parameter.
   * 
   * @example
   * video
   */
  searchType?: string;
  /**
   * @remarks
   * The sort field and sort order. Separate multiple values with commas (,). Valid values:
   * - **CreationTime:Desc** (default): sorts by creation time in descending order.
   * - **CreationTime:Asc**: sorts by creation time in ascending order.
   * 
   * > - For sort field examples, see [Sort fields](https://help.aliyun.com/document_detail/99179.html).
   * > - When retrieving the first 5,000 records of search results, up to three sort fields are supported.
   * > - When retrieving all data that matches the search conditions, only one sort field is supported.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      match: 'Match',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scrollToken: 'ScrollToken',
      searchType: 'SearchType',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      match: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scrollToken: 'string',
      searchType: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

