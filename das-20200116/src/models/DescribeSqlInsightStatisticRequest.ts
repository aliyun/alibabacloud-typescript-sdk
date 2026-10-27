// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlInsightStatisticRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the conditional filter. The key is not case-sensitive. For active values, see the metric description of the **Filters** parameter.
   * 
   * @example
   * sqlType
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter condition. If the value is null or an empty string, the filter condition is ignored. Separate multiple values with commas. The specific upper limit depends on the corresponding key.
   * 
   * @example
   * select
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlInsightStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Default value: **false** (descending order). Valid values:
   * 
   * - **true**: ascending order.
   * - **false**: descending order.
   * 
   * @example
   * false
   */
  asc?: boolean;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * null
   */
  consoleContext?: string;
  /**
   * @remarks
   * The name of the database used to filter the results.
   * 
   * > In the aggregation storage links of some instances, you can specify multiple database names separated by commas. In other links, you can specify only a single database name.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * Specifies whether to populate time series trend data for each statistical result, which corresponds to the **Trend** field in the response. Default value: **true**. Valid values:
   * 
   * - **true**: populates trend data.
   * - **false**: does not populate trend data.
   * 
   * > If this parameter is set to true, the system additionally queries data for each time slice for each result, which significantly increases the query overhead. If the trend filling capability is not enabled for the instance, this parameter does not take effect.
   * 
   * @example
   * true
   */
  doFillTrend?: boolean;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in milliseconds. The system rounds up the value to the nearest minute.
   * 
   * > The time span between **EndTime** and **StartTime** cannot exceed 7 days. If **EndTime** is earlier than the time when the SQL Explorer feature was enabled for the instance, an error indicating that the query time is earlier than the available time is returned.
   * 
   * > Due to delays in data aggregation, the actual effective value is truncated to a few minutes before the current time. Therefore, data from the most recent few minutes may not be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1718600000000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of structured filter conditions. The conditions are passed as key-value pairs. The POP format is **Filters.N.Key** and **Filters.N.Value**. A maximum of 100 pairs can be specified. **Key** is not case-sensitive. Entries with an empty **Value** are ignored. Valid values of **Key** that take effect in this operation:
   * 
   * - **keyWord**: the keywords. The keywords are split into multiple words by whitespace characters and take effect together with the **Keyword** parameter.
   * - **hostAddress**: the access source addresses. Separate multiple addresses with commas. This key takes effect together with **TemplateId** when **Type** is set to **OriginHost**.
   * - **accountName**: the database usernames. Separate multiple usernames with commas.
   * - **dbName**: the database names. Separate multiple names with commas. This key takes effect together with the **DbName** parameter.
   * - **sqlType**: the SQL statement types. Separate multiple types with commas. This key takes effect together with the **SqlType** parameter.
   * - **sqlId**: the SQL template IDs. Separate multiple IDs with commas. This key takes effect together with **TemplateId** when **Type** is set to **SQL**.
   * - **insRole**: the primary/secondary role. Valid values are **master** and **slave**. This value is case-sensitive.
   * 
   * > If you specify a **Key** other than the preceding values, the key is ignored.
   * 
   * > This parameter takes effect only in the aggregation storage links of some instances. In other links, this parameter is completely ignored.
   */
  filters?: DescribeSqlInsightStatisticRequestFilters[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * > This operation supports ApsaraDB RDS for MySQL, PolarDB for MySQL, PolarDB-X, ApsaraDB RDS for PostgreSQL, PolarDB for PostgreSQL, ApsaraDB RDS for SQL Server, and Lindorm instances that have the SQL Explorer feature enabled. MongoDB and Redis instances are not supported. If you invoke this operation for unsupported instances, a fault indicating that the operation is not supported is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1q6f9z5xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The idempotent ID for querying SQL Explorer data. You do not need to specify this parameter for common queries.
   * 
   * @example
   * 9a4f5c4494dbd6713185d87a97aa53e8
   */
  jobId?: string;
  /**
   * @remarks
   * The keywords used to retrieve SQL templates by fuzzy match based on the SQL template content. Separate multiple keywords with spaces. The system first performs keyword match to retrieve up to 1,000 corresponding SQL templates, and then performs aggregation statistics based on these templates. If no matching templates are found, an empty list is returned.
   * 
   * > This parameter does not take effect when **Type** is set to **SQL** and **TemplateId** is specified.
   * 
   * @example
   * t_order
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the node in the instance. This parameter is used to narrow the statistics scope to the specified node. Only a single node ID is supported. Multiple node IDs separated by commas are not supported.
   * 
   * > This parameter is required only for instances that consist of multiple nodes, such as PolarDB-X and Lindorm instances. You can ignore this parameter for single-node instances.
   * 
   * @example
   * pi-bp1xxxxxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The field by which to sort the results. If this parameter is not specified or an unsupported value is specified, the results are sorted by **rt** (total response time). Valid values:
   * 
   * - Response time: **rt**, **avgRt**, **maxRt**, **minRt**, and **rtRate**.
   * - Executions: **count**, **countRate**, and **timestamp**.
   * - Scanned rows: **rowsExamined** and **avgRowsExamined**.
   * - Returned rows: **rowsReturned**, **totalRowsReturned**, **avgRowsReturned**, **maxRowsReturned**, **minRowsReturned**, **maxRowReturned**, and **minRowReturned**.
   * - Logical reads: **logicalRead**, **totalLogicalRead**, **avgLogicalRead**, **maxLogicalRead**, and **minLogicalRead**.
   * - Physical reads: **physicalRead**, **totalPhysicalRead**, **avgPhysicalRead**, **maxPhysicalRead**, and **minPhysicalRead**.
   * - Logical writes (valid only for SQL Server instances): **writes**, **totalWrites**, **avgWrites**, **maxWrites**, and **minWrites**.
   * - CPU time (valid only for SQL Server instances): **totalCpuTime**, **avgCpuTime**, **maxCpuTime**, and **minCpuTime**.
   * - PolarDB-X compute nodes (valid only when **Role** is set to **polarx_cn**): **scnt**, **avgScnt**, **rows**, **avgRows**, **frows**, and **avgFrows**.
   * - Affected rows (valid only for Lindorm instances): **totalAffectRows** and **avgAffectRows**.
   * 
   * > **timestamp** indicates that the results are sorted by data timestamp. The timestamp is a UNIX timestamp in milliseconds.
   * 
   * > Only the first letter is case-insensitive. The remaining characters must exactly match the preceding values. For example, **AvgRt** is valid, but **avgrt** is invalid.
   * 
   * @example
   * rt
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. If this parameter is not specified, the default value 1 is used.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of statistical entries to return on each page. If this parameter is not specified, the default value 10 is used. The maximum value is 2000.
   * 
   * > If the value exceeds 2000, an InvalidParams error is returned instead of being truncated.
   * 
   * > When statistics are aggregated by access source or database user (when **Type** is set to **FullRequestOrigin** or **FullRequestUser**), a value greater than 100 is reset to 10 in some aggregation storage links.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The role of the instance node. The value is not case-sensitive. If this parameter is not specified, the role is automatically parsed based on **InstanceId**. Valid values:
   * 
   * - **polarx_cn**: PolarDB-X compute node.
   * - **polarx_dn**: PolarDB-X storage node.
   * 
   * > This value affects the scope of returned fields. For example, **Scnt**, **Rows**, and **Frows** are returned only when the value is **polarx_cn**.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The SQL statement type used to filter the results. Valid values:
   * 
   * - **select**
   * - **insert**
   * - **update**
   * - **delete**
   * 
   * > The values must be in lowercase. In the aggregation storage links of some instances, you can specify multiple values separated by commas. In other links, you can specify only a single value.
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds. The system rounds down the value to the nearest minute.
   * 
   * > The start time cannot be more than 30 days before the current time. If the specified start time is earlier than the time when the SQL Explorer feature was enabled for the instance, the start time is automatically adjusted to the enabling time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1718000000000
   */
  startTime?: number;
  /**
   * @remarks
   * The identifier of the statistics object. The meaning varies based on the value of **Type**. Valid values:
   * 
   * - When **Type** is set to **SQL**: specify the SQL template ID, which is the **SqlId** in the response.
   * - When **Type** is set to **OriginHost**: specify the access source address.
   * - When **Type** is set to **User**: specify the database username.
   * 
   * > This parameter does not take effect when **Type** is empty, **FullRequestOrigin**, or **FullRequestUser**.
   * 
   * > When **Type** is set to **SQL**, you can specify multiple template IDs separated by commas. In this case, **Keyword** does not take effect.
   * 
   * @example
   * 9f8e7d6c5b4a3210
   */
  templateId?: string;
  /**
   * @remarks
   * The aggregation or filter dimension for statistics. The value is not case-sensitive. If this parameter is not specified, the statistics are aggregated by SQL template by default. Valid values:
   * 
   * - **FullRequestOrigin**: aggregates statistics by access source address.
   * - **FullRequestUser**: aggregates statistics by database user.
   * - **SQL**: filters statistics by SQL template. You must also specify **TemplateId** as the SQL template ID.
   * - **OriginHost**: filters statistics by access source. You must also specify **TemplateId** as the source address.
   * - **User**: filters statistics by database user. You must also specify **TemplateId** as the username.
   * 
   * > If you specify a value other than the preceding values, an InvalidParams error is returned.
   * 
   * @example
   * SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      consoleContext: 'ConsoleContext',
      dbName: 'DbName',
      doFillTrend: 'DoFillTrend',
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      keyword: 'Keyword',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      role: 'Role',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      consoleContext: 'string',
      dbName: 'string',
      doFillTrend: 'boolean',
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSqlInsightStatisticRequestFilters },
      instanceId: 'string',
      jobId: 'string',
      keyword: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      role: 'string',
      sqlType: 'string',
      startTime: 'number',
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

