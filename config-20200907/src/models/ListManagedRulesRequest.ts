// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The scope for filtering managed rules allows you to filter out managed rules without resource coverage. The possible values are:
   * 
   *  - ALL: All rules.
   * 
   *  - UNCOVERED_RESOURCE: Filters managed rules where some resources are not covered.
   * 
   * @example
   * ALL
   */
  filterType?: string;
  /**
   * @remarks
   * The keyword of the managed rule.
   * 
   * @example
   * CDN
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resources to be evaluated based on the rule.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceTypes?: string;
  /**
   * @remarks
   * The risk level of the managed rule. Valid values:
   * 
   * *   1: high
   * *   2: medium
   * *   3: low
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

