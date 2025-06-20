// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResults } from "./ListNetTestResultsResponseBodyNetTestResults";


export class ListNetTestResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * Default value:
   * 
   * *   If you do not configure this parameter or if you set this parameter to a value less than 20, the default value is 20.
   * *   If you set this parameter to a value that is greater than 100, the default value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The results.
   */
  netTestResults?: ListNetTestResultsResponseBodyNetTestResults[];
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      netTestResults: 'NetTestResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      netTestResults: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResults },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.netTestResults)) {
      $dara.Model.validateArray(this.netTestResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

