// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyBindingsShrinkRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key in the query filter. Valid values:
   * 
   * - **PolicyId**: backup policy ID
   * - **DataSourceId**: ECS instance ID
   * - **DataSourceType**: data source type
   * 
   * @example
   * DataSourceType
   */
  key?: string;
  /**
   * @remarks
   * The matching method. Default value: IN. The matching operation (Operator) supported by the Key and Value in the filter. Valid values:
   * 
   * - **EQUAL**: equal to
   * - **NOT_EQUAL**: not equal to
   * - **GREATER_THAN**: greater than
   * - **GREATER_THAN_OR_EQUAL**: greater than or equal to
   * - **LESS_THAN**: less than
   * - **LESS_THAN_OR_EQUAL**: less than or equal to
   * - **BETWEEN**: range. The value is a JSON array `[lower bound, upper bound]`.
   * - **IN**: in a set. The value is an array.
   * 
   * @example
   * IN
   */
  operator?: string;
  /**
   * @remarks
   * The values to match in the query filter.
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

export class DescribePolicyBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data source IDs.
   */
  dataSourceIdsShrink?: string;
  /**
   * @remarks
   * The query filters.
   */
  filters?: DescribePolicyBindingsShrinkRequestFilters[];
  /**
   * @remarks
   * The number of results for each query.
   * 
   * Valid values: 10 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token required to obtain the next page of policy-data source associations.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * po-000************hky
   */
  policyId?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * - **UDM_ECS**: ECS instance backup.
   * - **OSS**: OSS backup.
   * - **NAS**: Alibaba Cloud NAS backup.
   * - **COMMON_NAS**: On-premises NAS backup.
   * - **ECS_FILE**: ECS File Backup Essential Edition.
   * - **File**: On-premises file backup.
   * - **COMMON_FILE_SYSTEM**: CPFS backup.
   * - **OTS**: Tablestore backup.
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      filters: { 'type': 'array', 'itemType': DescribePolicyBindingsShrinkRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

