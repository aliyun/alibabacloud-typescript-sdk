// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyTablesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * PolicyTableId: the ID of the Cloud Enterprise Network (CEN) instance.
   * By default, multiple filter conditions are combined with the AND operator. A resource is considered a match only if it meets all the filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   * 
   * @example
   * PolicyTableId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition.
   * 
   * Specify the filter value based on the key. You can specify multiple values for a single key. Multiple values are combined with the OR operator. A resource is considered a match if it meets any of the values.
   * 
   * You can specify up to 5 values for each filter condition.
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

export class DescribeTransitRouterPolicyTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   * 
   * You can specify up to 5 filter conditions at a time.
   */
  filter?: DescribeTransitRouterPolicyTablesRequestFilter[];
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
   * - If this is the first query or no subsequent query is required, you do not need to specify this parameter.
   * - If a subsequent query is required, set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTablesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      transitRouterId: 'string',
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

