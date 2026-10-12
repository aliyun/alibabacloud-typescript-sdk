// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Run } from "./Run";


export class ListRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token. Pass an empty value for the first page query. The query result returns the token for the next page. A token value of 0 indicates that all data has been retrieved. You can obtain the token for the next page from the NextPageToken field in the response.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The list of runs.
   */
  runs?: Run[];
  /**
   * @remarks
   * The total number of records that match the request conditions. This is an optional parameter and may not be returned by default.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      runs: 'Runs',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'number',
      runs: { 'type': 'array', 'itemType': Run },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runs)) {
      $dara.Model.validateArray(this.runs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

