// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceCountsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. For information about valid values, see the "`Supported filter parameters`" section below.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching method.
   * 
   * Set this parameter to `Equals`, which means an equal match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
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

export class GetResourceCountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: GetResourceCountsRequestFilter[];
  /**
   * @remarks
   * The dimension by which the queried resources are grouped. Valid values:
   * 
   * - ResourceType: The resource type.
   * 
   * - RegionId: The region.
   * 
   * - ResourceGroupId: The resource group ID.
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @remarks
   * Specifies whether to include deleted resources. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  includeDeletedResources?: boolean;
  /**
   * @remarks
   * The search keyword. Resource Center filters the search results based on relevance.
   * 
   * @example
   * keywords
   */
  searchExpression?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupByKey: 'GroupByKey',
      includeDeletedResources: 'IncludeDeletedResources',
      searchExpression: 'SearchExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': GetResourceCountsRequestFilter },
      groupByKey: 'string',
      includeDeletedResources: 'boolean',
      searchExpression: 'string',
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

