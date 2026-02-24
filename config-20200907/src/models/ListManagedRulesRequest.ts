// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of the filter.
   * 
   * @example
   * 托管规则筛选范围，可以筛选无资源覆盖的托管规则。取值：
   * - ALL 全部
   * - UNCOVERED_RESOURCE 筛选有资源未覆盖的托管规则
   */
  filterType?: string;
  /**
   * @remarks
   * The keyword of the rule template.
   * 
   * @example
   * CDN
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * The value must be greater than or equal to 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type that is evaluated by the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the rule template. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      filterType: 'FilterType',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterType: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
      riskLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

