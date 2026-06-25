// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Run } from "./Run";


export class ListRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paging token. For the first query, leave this parameter empty. The token for the next page is returned in the response. If the returned token is 0, all results have been returned. You can obtain the token for the next page from the **NextPageToken** field in the response.
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
   * The total number of entries that meet the filter criteria. This parameter is optional and may not be returned.
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

