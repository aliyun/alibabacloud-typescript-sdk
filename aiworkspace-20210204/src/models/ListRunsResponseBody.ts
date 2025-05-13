// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Run } from "./Run";


export class ListRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page. You do not need to specify this parameter for the first request. You must specify the pagination token in the result of the previous query. If the pagination token is 0, no next page exists. You can obtain the pagination token that is used to retrieve the next page in the value of the **NextPageToken** field.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The runs.
   */
  runs?: Run[];
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
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

