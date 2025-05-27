// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectionsResponseBodyDataConnections } from "./ListConnectionsResponseBodyDataConnections";


export class ListConnectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The connections.
   */
  connections?: ListConnectionsResponseBodyDataConnections[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnections },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
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

