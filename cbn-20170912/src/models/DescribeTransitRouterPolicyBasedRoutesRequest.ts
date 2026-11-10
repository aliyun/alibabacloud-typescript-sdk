// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyBasedRoutesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **PolicyBasedRouteId**: the instance ID of the policy-based routing rule.
   * 
   * By default, multiple filter conditions are evaluated by using the **AND** operator. A resource is considered a match only if it meets all the filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   * 
   * @example
   * PolicyBasedRouteId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify the filter value based on **Key**. You can specify multiple filter values for a single **Key**. Multiple filter values are evaluated by using the **OR** operator. A resource is considered a match if it meets any of the filter values.
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

export class DescribeTransitRouterPolicyBasedRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   */
  filter?: DescribeTransitRouterPolicyBasedRoutesRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 20.
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
   * - If **NextToken** returns a value, the value is the token used to start the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The instance ID of the policy-based routing table.
   * 
   * @example
   * ptbl-abc123xyz
   */
  policyTableId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyTableId: 'PolicyTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyBasedRoutesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      policyTableId: 'string',
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

