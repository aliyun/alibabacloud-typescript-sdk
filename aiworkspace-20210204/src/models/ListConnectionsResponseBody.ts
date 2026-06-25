// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Connection } from "./Connection";


export class ListConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of connections.
   */
  connections?: Connection[];
  /**
   * @remarks
   * Maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for retrieving the next page of results.
   * 
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID. Used for troubleshooting.
   * 
   * @example
   * B2C51F93-1C07-5477-9705-5FDB****F19F
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of connections that match the query conditions.
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

