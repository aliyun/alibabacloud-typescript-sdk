// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteMapsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **Direction**: the direction of the route map.
   * - **Name**: the name of the route map.
   * - **Priority**: the priority of the route map.
   * 
   * By default, multiple filter conditions are connected by an AND logical operator. A route map must meet all filter conditions to be considered a match.
   * 
   * You can specify up to 5 filter conditions at a time.
   * 
   * @example
   * Priority
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify the filter value based on the **Key**. You can specify multiple filter values for a single **Key**. Multiple filter values are connected by an OR logical operator. A route map that meets any of the filter values is considered a match for the filter condition.
   * 
   * You can specify up to 5 filter values for a single filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteMapsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a value for this parameter on your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: sends a check request without performing the query. The system checks whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   */
  filter?: ListRouteMapsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * If you do not specify the MaxResults parameter, pagination is not used. After you call the operation, the value of MaxResults indicates the total number of entries. If you specify the MaxResults parameter, pagination is used. After you call the operation, the value of MaxResults indicates the number of entries on the current page. We recommend that you set MaxResults to 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If this is the first query or no next query is available, you do not need to specify this parameter.
   * - If a next query is available, set the value to the **NextToken** value returned from the previous API call.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-0a1b2c3d4e5f6a7b8
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the route maps to query. If you do not specify this parameter, all route maps are queried.
   */
  routeMapIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      routeMapIds: 'RouteMapIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      filter: { 'type': 'array', 'itemType': ListRouteMapsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      routeMapIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.routeMapIds)) {
      $dara.Model.validateArray(this.routeMapIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

