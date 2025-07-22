// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultNeedOptimizeItemList extends $dara.Model {
  /**
   * @remarks
   * The data associated with the items to be optimized, which is in the JSON format.
   * 
   * @example
   * {
   *     "autoIncrementCurrentValue": 2147483647,
   *     "autoIncrementRatio": 1,
   *     "dbName": "testdb01",
   *     "maximumValue": 2147483647,
   *     "columnName": "id",
   *     "tableName": "test_table"
   * }
   */
  associatedData?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbName?: string;
  /**
   * @remarks
   * The optimization suggestion. Valid values:
   * 
   * *   **NEED_ANALYZE_TABLE**: You can execute the `ANALYZE TABLE` statement on the table during off-peak hours. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   **NEED_OPTIMIZE_TABLE**: You can reclaim fragments during off-peak hours.
   * *   **CHANGE_TABLE_ENGINE_IF_NECESSARY**: Change the storage engine type of a table after risk assessment. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   **AUTO_INCREMENT_ID_BE_TO_RUN_OUT**: Pay attention to the usage of auto-increment IDs. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   **DUPLICATE_INDEX**: Optimize indexes of tables. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   **TABLE_SIZE**: Pay attention to the table size. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   **TABLE_ROWS_AND_AVG_ROW_LENGTH**: Pay attention to the number of rows in a table and the average row length. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * *   **STORAGE_USED_PERCENT**: Pay attention to the space usage to prevent the instance from being locked if the instance is full.
   * 
   * @example
   * NEED_OPTIMIZE_TABLE
   */
  optimizeAdvice?: string;
  /**
   * @remarks
   * The item to be optimized. Valid values:
   * 
   * *   **NEED_ANALYZE_TABLE**: tables whose storage statistics obtained from `information_schema.tables` are 50 GB larger or smaller than the physical file sizes. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * *   **NEED_OPTIMIZE_TABLE**: tables whose space fragments are larger than 6 GB and whose fragmentation rates are greater than 30%. The fragmentation rate of a table is generally calculated based on the following formulas:
   * 
   *     *   ApsaraDB RDS for MySQL and PolarDB for MySQL: `Fragmentation rate = DataFree/(DataSize + IndexSize + DataFree)`. In this topic, PhyTotalSize = DataSize + IndexSize + DataFree. Thus, the fragmentation rate can be calculated based on the following formula: `Fragmentation rate = DataFree/PhyTotalSize`.
   *     *   ApsaraDB for MongoDB: `Fragmentation rate = FragmentSize/PhyTotalSize`.
   * 
   * *   **TABLE_ENGINE**: tables whose storage engines are not InnoDB or XEngine. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * *   **AUTO_INCREMENT_ID_BE_TO_RUN_OUT**: tables whose usages of auto-increment IDs exceed 80%. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * *   **DUPLICATE_INDEX**: tables whose indexes are redundant or duplicate. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * *   **TABLE_SIZE**: single tables whose sizes are larger than 50 GB. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * *   **TABLE_ROWS_AND_AVG_ROW_LENGTH**: single tables that contain more than 5 million rows and whose average row lengths exceed 10 KB. This is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * *   **TOTAL_DATA_FREE**: instances whose reclaimable space is larger than 60 GB and whose total fragmentation rate is larger than 5%.
   * 
   * *   **STORAGE_USED_PERCENT**: instances whose space usage is larger than 90%.
   * 
   * @example
   * NEED_OPTIMIZE_TABLE
   */
  optimizeItemName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedData: 'AssociatedData',
      dbName: 'DbName',
      optimizeAdvice: 'OptimizeAdvice',
      optimizeItemName: 'OptimizeItemName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedData: 'string',
      dbName: 'string',
      optimizeAdvice: 'string',
      optimizeItemName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBodyDataStorageAnalysisResultTableStats extends $dara.Model {
  /**
   * @remarks
   * The average length of rows. Unit: bytes.
   * 
   * @example
   * 154
   */
  avgRowLength?: number;
  /**
   * @remarks
   * The size of space fragments. Unit: bytes.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters. The fragmentation rate of a table is generally calculated based on the following formula: `Fragmentation rate = DataFree/(DataSize + IndexSize + DataFree)`. In this topic, `Fragmentation rate = DataFree/PhyTotalSize`.
   * 
   * @example
   * 7340032
   */
  dataFree?: number;
  /**
   * @remarks
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this parameter indicates the amount of space occupied by data. Unit: bytes.
   * *   For ApsaraDB for MongoDB instances, this parameter indicates the size of uncompressed data, that is, the amount of data. Unit: bytes.
   * 
   * @example
   * 1982857216
   */
  dataSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbName?: string;
  /**
   * @remarks
   * The type of the storage engine used by the table.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * @example
   * InnoDB
   */
  engine?: string;
  /**
   * @remarks
   * The size of space that can be reclaimed. Unit: bytes.
   * 
   * >  This parameter is applicable only to ApsaraDB for MongoDB instances. `Fragmentation rate = FragmentSize/PhyTotalSize`.
   * 
   * @example
   * 362221568
   */
  fragmentSize?: number;
  /**
   * @remarks
   * The storage space occupied by indexes. Unit: bytes.
   * 
   * @example
   * 1022296064
   */
  indexSize?: number;
  /**
   * @remarks
   * The storage space of the table. Unit: bytes.
   * 
   * >  For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, the value of the parameter is the sum of **DataSize**, **IndexSize**, and **DataFree**. For ApsaraDB for MongoDB instances, the value of this parameter is the sum of **DataSize** and **IndexSize**.
   * 
   * @example
   * 3012493312
   */
  phyTotalSize?: number;
  /**
   * @remarks
   * The physical file size of the table. Unit: bytes.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters. Data of specific database instances cannot be obtained due to deployment mode.
   * 
   * @example
   * 3057655808
   */
  physicalFileSize?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 12794732
   */
  tableRows?: number;
  /**
   * @remarks
   * The type of the table.
   * 
   * >  This parameter is applicable only to ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters.
   * 
   * @example
   * BASE TABLE
   */
  tableType?: string;
  /**
   * @remarks
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this parameter indicates the amount of space occupied by table data and indexes. Unit: bytes. The value is the sum of **DataSize** and **IndexSize**.
   * *   For ApsaraDB for MongoDB instances, this parameter indicates the actual size of space allocated by Block Manager. Unit: Bytes. The compression ratio of an ApsaraDB for MongoDB instance is calculated based on the following formula: `Compression ratio = TotalSize/DataSize`.
   * 
   * @example
   * 3005153280
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      avgRowLength: 'AvgRowLength',
      dataFree: 'DataFree',
      dataSize: 'DataSize',
      dbName: 'DbName',
      engine: 'Engine',
      fragmentSize: 'FragmentSize',
      indexSize: 'IndexSize',
      phyTotalSize: 'PhyTotalSize',
      physicalFileSize: 'PhysicalFileSize',
      tableName: 'TableName',
      tableRows: 'TableRows',
      tableType: 'TableType',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgRowLength: 'number',
      dataFree: 'number',
      dataSize: 'number',
      dbName: 'string',
      engine: 'string',
      fragmentSize: 'number',
      indexSize: 'number',
      phyTotalSize: 'number',
      physicalFileSize: 'number',
      tableName: 'string',
      tableRows: 'number',
      tableType: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetStorageAnalysisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of databases that have been analyzed.
   * 
   * @example
   * 2
   */
  analyzedDbCount?: number;
  /**
   * @remarks
   * The details of storage analysis.
   */
  storageAnalysisResult?: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult;
  /**
   * @remarks
   * Indicates whether the task is complete.
   * 
   * @example
   * true
   */
  taskFinish?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 910f83f4b96df0524ddc5749f615****
   */
  taskId?: string;
  /**
   * @remarks
   * The task progress.
   * 
   * >  Valid values are integers that range from 0 to 100.
   * 
   * @example
   * 50
   */
  taskProgress?: number;
  /**
   * @remarks
   * The status of the storage analysis task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **PENDING**: The task is being queued for execution.
   * *   **RECEIVED**: The task is received for execution.
   * *   **RUNNING**: The task is being executed.
   * *   **RETRY**: The task is being retried.
   * *   **SUCCESS**: The task succeeds.
   * *   **FAILURE**: The task fails.
   * 
   * @example
   * RUNNING
   */
  taskState?: string;
  /**
   * @remarks
   * Indicates whether the task is successful.
   * 
   * @example
   * true
   */
  taskSuccess?: boolean;
  /**
   * @remarks
   * The number of databases that need to be analyzed in the storage analysis task.
   * 
   * @example
   * 32
   */
  totalDbCount?: number;
  static names(): { [key: string]: string } {
    return {
      analyzedDbCount: 'AnalyzedDbCount',
      storageAnalysisResult: 'StorageAnalysisResult',
      taskFinish: 'TaskFinish',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      taskState: 'TaskState',
      taskSuccess: 'TaskSuccess',
      totalDbCount: 'TotalDbCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzedDbCount: 'number',
      storageAnalysisResult: GetStorageAnalysisResultResponseBodyDataStorageAnalysisResult,
      taskFinish: 'boolean',
      taskId: 'string',
      taskProgress: 'number',
      taskState: 'string',
      taskSuccess: 'boolean',
      totalDbCount: 'number',
    };
  }

  validate() {
    if(this.storageAnalysisResult && typeof (this.storageAnalysisResult as any).validate === 'function') {
      (this.storageAnalysisResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageAnalysisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetStorageAnalysisResultResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request is successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetStorageAnalysisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

