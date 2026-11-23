// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Run } from "./Run";


export class ListRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token. Leave this parameter empty when you query the first page. The token for the next page is returned in the query results. If the returned token is 0, all results are returned. You can obtain the token for the next page from the **NextPageToken** field in the query results.
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
   * The total number of entries that meet the specified request conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the request.
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

