// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * Fuzzy search key for check items.
   * 
   * @example
   * container
   */
  checkKey?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
   * @remarks
   * Page number for the current page in a paginated query. The default value is **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Language type for requests and responses. The default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Number of records to display per page when performing a paginated query. The default value is **20**, indicating 20 records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of risk levels.
   */
  riskLevels?: string[];
  /**
   * @remarks
   * Custom sorting type. Values:
   * 
   * - **RISK_LEVEL**: Risk level.
   * - **STATUS**: Check item status.
   * 
   * @example
   * STATUS
   */
  sortType?: string;
  /**
   * @remarks
   * List of check item statuses.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      checkKey: 'CheckKey',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevels: 'RiskLevels',
      sortType: 'SortType',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkKey: 'string',
      clusterId: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskLevels: { 'type': 'array', 'itemType': 'string' },
      sortType: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.riskLevels)) {
      $dara.Model.validateArray(this.riskLevels);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

