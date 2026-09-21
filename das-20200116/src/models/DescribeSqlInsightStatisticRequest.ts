// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlInsightStatisticRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. The value is case-insensitive. For valid values, see the description of the **Filters** parameter.
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
   * The sort direction. Default value: **false** (descending). Valid values:
   * 
   * - **true**: ascending.
   * - **false**: descending.
   * 
   * @example
   * false
   */
  asc?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  consoleContext?: string;
  /**
   * @remarks
   * The database name used for filtering.
   * 
   * > In certain aggregation storage pipelines, you can specify multiple database names separated by commas. In other pipelines, only a single database name is supported.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * Specifies whether to populate time series trend data for each statistical entry, which corresponds to the **Trend** field in the response. Default value: **true**. Valid values:
   * 
   * - **true**: Populates trend data.
   * - **false**: Does not populate trend data.
   * 
   * > Enabling this option triggers additional queries for each time slice per entry, which significantly increases query overhead. If the trend filling capability is not enabled for the instance, this parameter does not take effect.
   * 
   * @example
   * true
   */
  doFillTrend?: boolean;
  /**
   * @remarks
   * The end time of the query. Specify a UNIX timestamp in milliseconds. The system rounds up to the nearest minute.
   * 
   * > The span between this value and **StartTime** must not exceed 7 days. If **EndTime** is earlier than the time when SQL Explorer was enabled for the instance, an error indicating that the query time is earlier than the available time is returned.
   * 
   * > Because data aggregation involves latency, the actual effective value is trimmed to a few minutes before the current time. Data from the most recent minutes may not be available.
   * 
   * This parameter is required.
   * 
   * @example
   * 1718600000000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of structured filter conditions, specified as Key/Value pairs. The POP format is **Filters.N.Key** and **Filters.N.Value**, with a maximum of 100 pairs. **Key** is case-insensitive. Entries with an empty **Value** are ignored. Valid values of **Key** for this operation:
   * 
   * - **keyWord**: the keyword. The value is split by whitespace into multiple words and takes effect together with the **Keyword** parameter.
   * - **hostAddress**: the access source address. Separate multiple values with commas. This takes effect together with **TemplateId** when **Type** is set to **OriginHost**.
   * - **accountName**: the database username. Separate multiple values with commas.
   * - **dbName**: the database name. Separate multiple values with commas. This takes effect together with the **DbName** parameter.
   * - **sqlType**: the SQL type. Separate multiple values with commas. This takes effect together with the **SqlType** parameter.
   * - **sqlId**: the SQL template ID. Separate multiple values with commas. This takes effect together with **TemplateId** when **Type** is set to **SQL**.
   * - **insRole**: the primary/secondary role. Valid values: **master** and **slave**. These values are case-sensitive.
   * 
   * > Any **Key** value other than the preceding values is ignored.
   * 
   * > This parameter takes effect only in certain aggregation storage pipelines. In other pipelines, this parameter is entirely ignored.
   */
  filters?: DescribeSqlInsightStatisticRequestFilters[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * > This operation supports RDS for MySQL, PolarDB for MySQL, PolarDB-X, RDS for PostgreSQL, PolarDB for PostgreSQL, RDS for SQL Server, and Lindorm instances that have SQL Explorer enabled. MongoDB and Redis instances are not supported. Calling this operation for unsupported instances returns an error indicating that the operation is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1q6f9z5xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The idempotency ID for the SQL Explorer data query. This parameter is not required for regular queries.
   * 
   * @example
   * 9a4f5c4494dbd6713185d87a97aa53e8
   */
  jobId?: string;
  /**
   * @remarks
   * The keyword for fuzzy retrieve on SQL template content. Separate multiple keywords with spaces. The system first performs keyword match to find the corresponding SQL templates (up to 1,000 templates), and then performs aggregation statistics based on these templates. If no templates match, an empty list is returned.
   * 
   * > This parameter does not take effect when **Type** is set to **SQL** and **TemplateId** is specified.
   * 
   * @example
   * t_order
   */
  keyword?: string;
  /**
   * @remarks
   * The node ID of the instance. This parameter narrows the statistical scope to the specified node. Only a single node ID is supported. You cannot specify multiple node IDs separated by commas.
   * 
   * > This parameter is required only for instances that consist of multiple nodes, such as PolarDB-X and Lindorm instances. You can ignore this parameter for single-node instances.
   * 
   * @example
   * pi-bp1xxxxxxxxxxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The field used for sorting. If this parameter is not specified or an unsupported value is specified, the results are sorted by **rt** (total response time). Valid values:
   * 
   * - Response time: **rt**, **avgRt**, **maxRt**, **minRt**, **rtRate**.
   * - Executions: **count**, **countRate**, **timestamp**.
   * - Scan rows: **rowsExamined**, **avgRowsExamined**.
   * - Returned rows: **rowsReturned**, **totalRowsReturned**, **avgRowsReturned**, **maxRowsReturned**, **minRowsReturned**, **maxRowReturned**, **minRowReturned**.
   * - Logical reads: **logicalRead**, **totalLogicalRead**, **avgLogicalRead**, **maxLogicalRead**, **minLogicalRead**.
   * - Physical reads: **physicalRead**, **totalPhysicalRead**, **avgPhysicalRead**, **maxPhysicalRead**, **minPhysicalRead**.
   * - Logical writes (valid only for SQL Server instances): **writes**, **totalWrites**, **avgWrites**, **maxWrites**, **minWrites**.
   * - CPU time (valid only for SQL Server instances): **totalCpuTime**, **avgCpuTime**, **maxCpuTime**, **minCpuTime**.
   * - PolarDB-X compute node metrics (valid only when **Role** is set to **polarx_cn**): **scnt**, **avgScnt**, **rows**, **avgRows**, **frows**, **avgFrows**.
   * - Affected rows (valid only for Lindorm instances): **totalAffectRows**, **avgAffectRows**.
   * 
   * > **timestamp** sorts by the data timestamp, which is a millisecond-level UNIX timestamp.
   * 
   * > Only the first letter is case-insensitive. The remaining characters must exactly match the preceding values. For example, **AvgRt** is valid but **avgrt** is not.
   * 
   * @example
   * rt
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of statistical entries per page. Default value: 10. Maximum value: 2000.
   * 
   * > A value greater than 2000 returns an InvalidParams error instead of being trimmed.
   * 
   * > When aggregating by access source or database user (**Type** is set to **FullRequestOrigin** or **FullRequestUser**), a value greater than 100 may be reset to 10 in certain aggregation storage pipelines.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The role of the instance node. The value is case-insensitive. If this parameter is not specified, the role is automatically resolved from **InstanceId**. Valid values:
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
   * The SQL type used for filtering. Valid values:
   * 
   * - **select**
   * - **insert**
   * - **update**
   * - **delete**
   * 
   * > Values are lowercase. In certain aggregation storage pipelines, you can specify multiple values separated by commas. In other pipelines, only a single value is supported.
   * 
   * @example
   * select
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. Specify a UNIX timestamp in milliseconds. The system rounds down to the nearest minute.
   * 
   * > The value must be within the last 30 days. If the value is earlier than the time when SQL Explorer was enabled for the instance, it is automatically adjusted to the time when SQL Explorer was enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1718000000000
   */
  startTime?: number;
  /**
   * @remarks
   * The identifier of the statistical object. The meaning varies depending on the value of **Type**. Valid values:
   * 
   * - When **Type** is set to **SQL**: the SQL template ID, which corresponds to **SqlId** in the response.
   * - When **Type** is set to **OriginHost**: the access source address.
   * - When **Type** is set to **User**: the database username.
   * 
   * > This parameter does not take effect when **Type** is not specified, or is set to **FullRequestOrigin** or **FullRequestUser**.
   * 
   * > When **Type** is set to **SQL**, you can specify multiple template IDs separated by commas. In this case, the **Keyword** parameter does not take effect.
   * 
   * @example
   * 9f8e7d6c5b4a3210
   */
  templateId?: string;
  /**
   * @remarks
   * The aggregation or filter dimension for statistics. The value is case-insensitive. If this parameter is not specified, statistics are aggregated by SQL template by default. Valid values:
   * 
   * - **FullRequestOrigin**: Aggregates by access source address.
   * - **FullRequestUser**: Aggregates by database user.
   * - **SQL**: Filters by SQL template. You must also specify **TemplateId** as the SQL template ID.
   * - **OriginHost**: Filters by access source. You must also specify **TemplateId** as the source address.
   * - **User**: Filters by database user. You must also specify **TemplateId** as the username.
   * 
   * > Specifying a value other than the preceding values returns an InvalidParams error.
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

