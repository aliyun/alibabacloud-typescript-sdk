// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections } from "./ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections";


export class ListVirtualPhysicalConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned in this query.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If the value of **NextToken** is not returned, it indicates that no next query is to be sent.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A55F69E-EE3D-5CBE-8805-734F7D5B46B9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of hosted connections returned.
   */
  virtualPhysicalConnections?: ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualPhysicalConnections: 'VirtualPhysicalConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      virtualPhysicalConnections: { 'type': 'array', 'itemType': ListVirtualPhysicalConnectionsResponseBodyVirtualPhysicalConnections },
    };
  }

  validate() {
    if(Array.isArray(this.virtualPhysicalConnections)) {
      $dara.Model.validateArray(this.virtualPhysicalConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

