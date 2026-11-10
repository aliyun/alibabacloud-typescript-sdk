// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteMapRulesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **Name**: the name of the route map rule.
   * - **Priority**: the priority of the route map rule.
   * 
   * By default, multiple filter conditions are evaluated by using the AND logical operator. A rule matches the filter conditions only if it meets all the filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   * 
   * @example
   * Name
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify the filter value based on the Key. You can specify multiple filter values for a single Key. Multiple filter values are evaluated by using the OR logical operator. A rule matches the filter condition if it meets any of the filter values.
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

export class ListRouteMapRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the parameter value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: sends a check request, and no route map rules are queried. Check items include whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code DryRunOperation is returned.
   * - **false** (default): sends a normal request, and route map rules are queried directly after the check succeeds.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   */
  filter?: ListRouteMapRulesRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - If this is the first query or no next page exists, you do not need to specify this parameter.
   * - If a next page exists, set the value to the **NextToken** value returned from the previous API call.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the route map to query.
   * 
   * @example
   * rm-0a1b2c3d4e5f6a7b8
   */
  routeMapId?: string;
  /**
   * @remarks
   * The list of route map rule IDs to query. This parameter and filter conditions can be used together for matching, and the relationship is AND.
   */
  routeMapRuleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      routeMapId: 'RouteMapId',
      routeMapRuleIds: 'RouteMapRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      filter: { 'type': 'array', 'itemType': ListRouteMapRulesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      routeMapId: 'string',
      routeMapRuleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.routeMapRuleIds)) {
      $dara.Model.validateArray(this.routeMapRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

