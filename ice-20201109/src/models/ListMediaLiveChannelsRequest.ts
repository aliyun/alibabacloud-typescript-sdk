// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the query. You can perform a fuzzy search on channel ID or name.
   * 
   * @example
   * 123
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value:
   * 
   * *   If you do not specify this parameter or if you set a value smaller than 10, the default value is 10.
   * *   If you set a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to be skipped in the query. If the number of entries you attempt to skip exceeds the number of entries that meet the condition, an empty list is returned.
   * 
   * @example
   * 20
   */
  skip?: number;
  /**
   * @remarks
   * The sorting order of the channels by creation time. Default value: asc. Valid values: desc and asc. asc indicates the ascending order, and desc indicates the descending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The state of channels you want to query. You can separate multiple states with commas (,) in a JSON array.
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

