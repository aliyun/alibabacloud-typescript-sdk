// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Connection } from "./Connection";


export class ListConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection list.
   */
  connections?: Connection[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that indicates the start position from which to retrieve data on the next page.
   * 
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B2C51F93-1C07-5477-9705-5FDB****F19F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of connections that meet the filter conditions.
   * 
   * @example
   * 27
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': Connection },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

