// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlPatternResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * >  This parameter is returned only when **Type** is set to **accessip**.
   * 
   * @example
   * 100.104.xx.xx
   */
  accessIP?: string;
  /**
   * @remarks
   * The average execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 1.0625
   */
  avgCpuTime?: string;
  /**
   * @remarks
   * The average peak memory usage of the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 240048
   */
  avgPeakMemory?: string;
  /**
   * @remarks
   * The average amount of data scanned based on the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 244
   */
  avgScanSize?: string;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * @example
   * 2
   */
  avgStageCount?: string;
  /**
   * @remarks
   * The average number of tasks.
   * 
   * @example
   * 2
   */
  avgTaskCount?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1ej1nq9n6****
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 17
   */
  maxCpuTime?: string;
  /**
   * @remarks
   * The maximum peak memory usage of the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 480096
   */
  maxPeakMemory?: string;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 1024
   */
  maxScanSize?: string;
  /**
   * @remarks
   * The maximum number of stages.
   * 
   * @example
   * 2
   */
  maxStageCount?: string;
  /**
   * @remarks
   * The maximum number of tasks.
   * 
   * @example
   * 2
   */
  maxTaskCount?: string;
  /**
   * @remarks
   * The SQL pattern.
   * 
   * @example
   * SELECT table_name, table_schema AS schema_name, create_time, create_time AS last_ddl_time, table_comment AS description , ceil((data_length + index_length) / ? / ?) AS store_capacity , data_length AS data_bytes, index_length AS index_bytes, table_collation AS collation, auto_increment, table_rows AS num_rows , engine FROM information_schema.tables WHERE table_type != ? AND table_schema = ? AND table_name IN (?) ORDER BY 1
   */
  pattern?: string;
  /**
   * @remarks
   * The number of queries performed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 16
   */
  queryCount?: string;
  /**
   * @remarks
   * The start date of the query.
   * 
   * @example
   * 2022-08-30
   */
  reportDate?: string;
  /**
   * @remarks
   * The username.
   * 
   * >  This parameter is returned only when **Type** is left empty or set to **user**.
   * 
   * @example
   * test_acc
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIP: 'AccessIP',
      avgCpuTime: 'AvgCpuTime',
      avgPeakMemory: 'AvgPeakMemory',
      avgScanSize: 'AvgScanSize',
      avgStageCount: 'AvgStageCount',
      avgTaskCount: 'AvgTaskCount',
      instanceName: 'InstanceName',
      maxCpuTime: 'MaxCpuTime',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      maxStageCount: 'MaxStageCount',
      maxTaskCount: 'MaxTaskCount',
      pattern: 'Pattern',
      queryCount: 'QueryCount',
      reportDate: 'ReportDate',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIP: 'string',
      avgCpuTime: 'string',
      avgPeakMemory: 'string',
      avgScanSize: 'string',
      avgStageCount: 'string',
      avgTaskCount: 'string',
      instanceName: 'string',
      maxCpuTime: 'string',
      maxPeakMemory: 'string',
      maxScanSize: 'string',
      maxStageCount: 'string',
      maxTaskCount: 'string',
      pattern: 'string',
      queryCount: 'string',
      reportDate: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried SQL pattern.
   */
  items?: DescribeSqlPatternResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB1F6C23-CBCA-5260-9366-BA7BB5EBF6F1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSqlPatternResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

