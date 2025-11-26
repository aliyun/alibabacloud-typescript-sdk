// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiUserInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum value is 100. Range: 10 - 100, default value: 10.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Used for paginated queries. Leave it empty for the first request, and fill in the NextToken value returned from the previous response for subsequent requests.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAB4SwmEAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM0NzY3YTZjNjI3NjZmNmU3MjcxNjk3NDY5MzY3MjY4****
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

