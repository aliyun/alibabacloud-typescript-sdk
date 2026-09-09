// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The filter condition for fuzzy match by team name.
   * 
   * @example
   * team
   */
  nameLike?: string;
  /**
   * @remarks
   * The pagination token for the next page. Do not specify this parameter for the first request. For subsequent requests, set this parameter to the nextToken value returned in the previous response.
   * 
   * @example
   * dGVhbS1vZmZzZXQ6MTA
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nameLike: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

