// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for the query. Fuzzy match is supported for channel IDs and names.
   * 
   * @example
   * 123
   */
  keyword?: string;
  /**
   * @remarks
   * The number of rows per page for paging in a paged query. Maximum value: 100.
   * Default value:
   * - If the Settings are not specified or the specified value is less than 10, the default value is 10.
   * - If the specified value in the Settings is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to skip for a paged query.
   * If the number of skipped entries exceeds the total number of matched entries, an empty list is returned.
   * 
   * @example
   * 20
   */
  skip?: number;
  /**
   * @remarks
   * Specifies the collation for sorting channels by creation time. Default value: asc. Valid values:
   * - desc: Descending order.
   * - asc: Ascending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The channel states to query. You can specify multiple states in a JSON array, separated by commas (,).
   * 
   * @example
   * ["IDLE","RUNNING"]
   */
  states?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      sortOrder: 'SortOrder',
      states: 'States',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
      sortOrder: 'string',
      states: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

