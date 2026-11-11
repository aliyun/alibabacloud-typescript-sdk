// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyTablesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * PolicyTableId: the ID of the Cloud Enterprise Network (CEN) instance.
   * By default, multiple filter conditions are evaluated by using the AND operator. A result is returned only if all filter conditions are met.
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
   * Specify the value based on the key. You can specify multiple values for a key. Multiple values are evaluated by using the OR operator. If one of the values is met, the filter condition is met.
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

export class DescribeTransitRouterPolicyTablesRequestTag extends $dara.Model {
  key?: string;
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

export class DescribeTransitRouterPolicyTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can specify up to 5 filter conditions at a time.
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
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * If this is your first query or no next query is to be sent, ignore this parameter.
   * If a next query is to be sent, set the value to the NextToken value that is returned from the last API invocation.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  tag?: DescribeTransitRouterPolicyTablesRequestTag[];
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
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTablesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyTablesRequestTag },
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

