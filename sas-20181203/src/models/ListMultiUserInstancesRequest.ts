// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiUserInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used for paging. Leave this parameter empty for the first request. For subsequent requests, set this parameter to the NextToken value returned in the previous response.
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

