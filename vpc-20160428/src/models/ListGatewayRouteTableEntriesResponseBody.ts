// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels } from "./ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels";


export class ListGatewayRouteTableEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the routes in the gateway route table.
   */
  gatewayRouteEntryModels?: ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayRouteEntryModels: 'GatewayRouteEntryModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayRouteEntryModels: { 'type': 'array', 'itemType': ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewayRouteEntryModels)) {
      $dara.Model.validateArray(this.gatewayRouteEntryModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

