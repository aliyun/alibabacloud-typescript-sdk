// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventHouseRuntimesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of runtimes to return per page. If this parameter is not specified or set to 0, the default value 20 is used. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Not required for the first query. For subsequent queries, use the NextToken returned in the previous response. An empty value indicates that no more pages are available.
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
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

