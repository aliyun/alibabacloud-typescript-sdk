// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyBindingsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * Key in the query filter. Possible values include:
   * 
   * - **PolicyId**: Backup policy ID
   * - **DataSourceId**: ECS instance ID
   * - **DataSourceType**: Data source type
   * 
   * @example
   * DataSourceType
   */
  key?: string;
  /**
   * @remarks
   * Matching method. Default is IN. This refers to the matching operation (Operator) supported by the Key and Value in the filter. Possible values include:
   * 
   * - **EQUAL**: Equal to
   * - **NOT_EQUAL**: Not equal to
   * - **GREATER_THAN**: Greater than
   * - **GREATER_THAN_OR_EQUAL**: Greater than or equal to
   * - **LESS_THAN**: Less than
   * - **LESS_THAN_OR_EQUAL**: Less than or equal to
   * - **BETWEEN**: Range, where value is a JSON array `[lower_bound, upper_bound]`.
   * - **IN**: In the set, where value is an array.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * Values to be matched in the query filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * List of data source IDs.
   */
  dataSourceIds?: string[];
  /**
   * @remarks
   * Query filters.
   */
  filters?: DescribePolicyBindingsRequestFilters[];
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token required to fetch the next page of policy and data source associations.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * po-000************hky
   */
  policyId?: string;
  /**
   * @remarks
   * Data source type. Possible values:
   * * **UDM_ECS**: Indicates ECS full machine backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIds: { 'type': 'array', 'itemType': 'string' },
      filters: { 'type': 'array', 'itemType': DescribePolicyBindingsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

