// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteMapsResponseBodyRouteMapsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * jg
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteMapsResponseBodyRouteMaps extends $dara.Model {
  /**
   * @remarks
   * The time when the route map was created.
   * 
   * The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-03-28T02:29:19Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the route map.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The direction of the route map. Valid values: 
   * - Inbound: inbound.
   * - Outbound: outbound.
   * 
   * @example
   * Inbound
   */
  direction?: string;
  /**
   * @remarks
   * The name of the route map.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The priority of the route map. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmydlzjd6dlhi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the route map.
   * 
   * @example
   * rm-y40mxdvf7joc12****
   */
  routeMapId?: string;
  /**
   * @remarks
   * The status of the route map. Valid values:
   * 
   * - **Creating**: The route map is being created.
   * - **Updating**: The route map is being updated.
   * - **Active**: The route map is available.
   * - **Deleting**: The route map is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListRouteMapsResponseBodyRouteMapsTag[];
  /**
   * @remarks
   * The version number of the route map configuration.
   * The version number increases each time the route map and its associated route map rules are modified.
   * 
   * @example
   * 7
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      direction: 'Direction',
      name: 'Name',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      routeMapId: 'RouteMapId',
      status: 'Status',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      direction: 'string',
      name: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      routeMapId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListRouteMapsResponseBodyRouteMapsTag },
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteMapsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query is available.
   * - If **NextToken** returns a value, the value is the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2063B16-852B-5B66-B73D-4ED4D1A5E5C2
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the route maps.
   */
  routeMaps?: ListRouteMapsResponseBodyRouteMaps[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeMaps: 'RouteMaps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      routeMaps: { 'type': 'array', 'itemType': ListRouteMapsResponseBodyRouteMaps },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeMaps)) {
      $dara.Model.validateArray(this.routeMaps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

