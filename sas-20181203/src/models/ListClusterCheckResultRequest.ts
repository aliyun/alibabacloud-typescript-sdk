// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for fuzzy search of check items.
   * 
   * @example
   * container
   */
  checkKey?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies the page number of the current page during paging in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Settings for paging in a paged query. Specifies the number of records to display on each page. Default value: **20**, which indicates that 20 records are displayed on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of risk levels.
   */
  riskLevels?: string[];
  /**
   * @remarks
   * The custom sort type. Valid values:
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
   * The list of check item statuses.
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

