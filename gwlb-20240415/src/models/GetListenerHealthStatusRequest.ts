// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerHealthStatusRequestFilter } from "./GetListenerHealthStatusRequestFilter";


export class GetListenerHealthStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can specify at most 20 filter conditions.
   */
  filter?: GetListenerHealthStatusRequestFilter[];
  /**
   * @remarks
   * The listener ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-7sixpvm5fc3v0b****
   */
  listenerId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * 4f1d7cc9f51e18904e8a063603a6b0c3d03bc69f78734254e0b5e8707e68****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to be skipped in the call.
   * 
   * @example
   * 10
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': GetListenerHealthStatusRequestFilter },
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

