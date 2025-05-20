// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsSqlSummariesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the returned entries in ascending order. Default value: **false**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  asc?: boolean;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. You can view the data of up to seven days within the last month.
   * 
   * @example
   * 1679297005999
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf61swc4cru0b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The keywords of the SQL template. Separate multiple keywords with spaces.
   * 
   * @example
   * select update
   */
  keywords?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter is required if the database instance is an ApsaraDB RDS for MySQL Cluster Edition instance or a PolarDB for MySQL cluster.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The field by which to sort the returned entries. Default value: **count**.
   * 
   * *   **count**: the number of executions.
   * *   **avgRt**: the average execution duration.
   * *   **rtRate**: the execution duration percentage.
   * *   **rowsExamined**: the total number of scanned rows.
   * *   **avgRowsExamined**: the average number of scanned rows.
   * *   **avgRowsReturned**: the average number of returned rows.
   * 
   * @example
   * count
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
   * The number of entries per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL ID.
   * 
   * >  If this parameter is specified, the full request statistics of the specified SQL query are collected. If this parameter is left empty, the full request statistics of the entire database instance are collected.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1675833788056
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      keywords: 'Keywords',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sqlId: 'SqlId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'number',
      instanceId: 'string',
      keywords: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sqlId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

