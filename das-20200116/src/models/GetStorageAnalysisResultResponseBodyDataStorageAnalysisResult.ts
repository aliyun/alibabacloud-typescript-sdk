// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList } from "./GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList";
import { GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats } from "./GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats";


export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult extends $dara.Model {
  /**
   * @remarks
   * The reason why the analysis on the database and table fails.
   * 
   * *   **DB_OR_TABLE_NOT_EXIST**: The specified database or table does not exist.
   * *   **DB_NOT_EXIST**: The specified database does not exist.
   * 
   * @example
   * DB_NOT_EXIST
   */
  analysisErrorType?: string;
  /**
   * @remarks
   * Indicates whether the analysis on the database and table is successful.
   * 
   * @example
   * true
   */
  analysisSuccess?: boolean;
  /**
   * @remarks
   * The estimated average daily growth of the used storage space in the previous seven days. Unit: bytes.
   * 
   * @example
   * 0
   */
  dailyIncrement?: number;
  /**
   * @remarks
   * The estimated number of days for which the remaining storage space is available.
   * 
   * @example
   * 99
   */
  estimateAvailableDays?: number;
  /**
   * @remarks
   * The items to be optimized, which are generated based on DAS default rules. You can ignore these items based on your business requirements, and create custom rules to generate items to be optimized based on other basic data that is returned.
   */
  needOptimizeItemList?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList[];
  /**
   * @remarks
   * The information about the table.
   */
  tableStats?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats[];
  /**
   * @remarks
   * The size of remaining storage.
   * 
   * >  Unit: bytes.
   * 
   * @example
   * 146403229696
   */
  totalFreeStorageSize?: number;
  /**
   * @remarks
   * The total size of instance storage.
   * 
   * >  Unit: bytes.
   * 
   * @example
   * 214748364800
   */
  totalStorageSize?: number;
  /**
   * @remarks
   * The size of used storage.
   * 
   * >  Unit: bytes.
   * 
   * @example
   * 68345135104
   */
  totalUsedStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      analysisErrorType: 'AnalysisErrorType',
      analysisSuccess: 'AnalysisSuccess',
      dailyIncrement: 'DailyIncrement',
      estimateAvailableDays: 'EstimateAvailableDays',
      needOptimizeItemList: 'NeedOptimizeItemList',
      tableStats: 'TableStats',
      totalFreeStorageSize: 'TotalFreeStorageSize',
      totalStorageSize: 'TotalStorageSize',
      totalUsedStorageSize: 'TotalUsedStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisErrorType: 'string',
      analysisSuccess: 'boolean',
      dailyIncrement: 'number',
      estimateAvailableDays: 'number',
      needOptimizeItemList: { 'type': 'array', 'itemType': GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList },
      tableStats: { 'type': 'array', 'itemType': GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats },
      totalFreeStorageSize: 'number',
      totalStorageSize: 'number',
      totalUsedStorageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.needOptimizeItemList)) {
      $dara.Model.validateArray(this.needOptimizeItemList);
    }
    if(Array.isArray(this.tableStats)) {
      $dara.Model.validateArray(this.tableStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

