// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPfsSqlSummariesRequest extends $dara.Model {
  /**
   * @remarks
   * Sort in ascending order. Default is **false**.
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * false
   */
  asc?: boolean;
  /**
   * @remarks
   * End time of the query, in Unix timestamp format, in milliseconds.
   * 
   * > The end time must be later than the start time. You can query data for any seven-day period within the last 30 days.
   * 
   * @example
   * 1679297005999
   */
  endTime?: number;
  /**
   * @remarks
   * Database instance ID.
   * 
   * @example
   * rm-uf61swc4cru0b****
   */
  instanceId?: string;
  /**
   * @remarks
   * Keywords in the SQL text. Separate multiple keywords with spaces.
   * 
   * @example
   * select update
   */
  keywords?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * > Provide a node ID for RDS MySQL Cluster Edition or PolarDB for MySQL database instances.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * Field to sort by. Default is **count**.
   * 
   * - **count**: Number of executions.
   * 
   * - **avgLatency**: Average execution time.
   * 
   * - **rowsExamined**: Total number of scanned rows.
   * 
   * - **rowsExaminedAvg**: Average number of scanned rows.
   * 
   * - **rowsSentAvg**: Average number of returned rows.
   * 
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @remarks
   * Page number for paged queries. Start from 1. Default is 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Maximum number of records per page for paged queries. Default is 10. Maximum is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * SQL ID.
   * 
   * > If you specify an SQL ID, the system returns statistics for that SQL ID only. If you leave this parameter empty, the system returns statistics for the entire database instance.
   * 
   * @example
   * 651b56fe9418d48edb8fdf0980ec****
   */
  sqlId?: string;
  /**
   * @remarks
   * Start time of the query, in Unix timestamp format, in milliseconds.
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

