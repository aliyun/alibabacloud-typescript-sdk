// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatabaseSummaryModel } from "./DatabaseSummaryModel";


export class GetDatabaseObjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The queried database.
   */
  databaseSummaryModels?: DatabaseSummaryModel[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
      databaseSummaryModels: 'DatabaseSummaryModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseSummaryModels: { 'type': 'array', 'itemType': DatabaseSummaryModel },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databaseSummaryModels)) {
      $dara.Model.validateArray(this.databaseSummaryModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

