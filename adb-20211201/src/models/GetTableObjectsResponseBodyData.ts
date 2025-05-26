// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableSummaryModel } from "./TableSummaryModel";


export class GetTableObjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Details of the tables.
   */
  tableSummaryModels?: TableSummaryModel[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableSummaryModels: 'TableSummaryModels',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableSummaryModels: { 'type': 'array', 'itemType': TableSummaryModel },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableSummaryModels)) {
      $dara.Model.validateArray(this.tableSummaryModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

