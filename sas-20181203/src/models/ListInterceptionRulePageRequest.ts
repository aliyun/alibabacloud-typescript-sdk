// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionRulePageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cc41de13ab5474210bc0ce772a009****
   */
  clusterId?: string;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * 80
   */
  criteria?: string;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **ID**
   * *   **RULE_NAME**
   * *   **SRC_TARGET**
   * *   **DST_TARGET**
   * *   **DST_PORT**
   * *   **RULE_SWITCH**
   * *   **INTERCEPTOR_TYPE**
   * 
   * @example
   * DST_PORT
   */
  criteriaType?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

