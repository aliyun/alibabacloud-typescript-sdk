// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Simple Log Service Logstores.
   */
  logStores?: string[];
  /**
   * @remarks
   * The maximum number of data entries to return in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first query or when no subsequent query is required. If a subsequent query is required, set the value to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logStores: 'LogStores',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStores: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logStores)) {
      $dara.Model.validateArray(this.logStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

