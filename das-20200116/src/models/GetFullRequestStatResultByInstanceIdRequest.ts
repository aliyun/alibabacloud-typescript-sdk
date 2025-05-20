// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestStatResultByInstanceIdRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order. By default, the results are not sorted in ascending order.
   * 
   * @example
   * Disabled
   */
  asc?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbtest01
   */
  dbName?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. The interval cannot exceed one day.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645668213000
   */
  end?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The keywords that are used for query.
   * 
   * @example
   * dbtest01
   */
  keyword?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  You must specify the node ID if your database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-bp12v7243x012****
   */
  nodeId?: string;
  /**
   * @remarks
   * The field by which to sort the returned entries. Default value: **count**. Valid values:
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
   * The IP address of the client that executes the SQL statement.
   * 
   * >  This parameter is optional. If this parameter is specified, the full request statistics of the specified IP address are collected. If this parameter is left empty, the full request statistics of the entire database instance are collected.
   * 
   * @example
   * 172.26.XX.XXX
   */
  originHost?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The role of the node in the PolarDB-X 2.0 instance. Valid values:
   * 
   * *   **polarx_cn**: compute node.
   * *   **polarx_dn**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The SQL ID.
   * 
   * >  If this parameter is specified, the full request statistics of the specified SQL query are collected. If this parameter is left empty, the full request statistics of the entire database instance are collected.
   * 
   * @example
   * d71f82be1eef72bd105128204d2e****
   */
  sqlId?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: **SELECT**, **INSERT**, **UPDATE**, **DELETE**, **LOGIN**, **LOGOUT**, **MERGE**, **ALTER**, **CREATEINDEX**, **DROPINDEX**, **CREATE**, **DROP**, **SET**, **DESC**, **REPLACE**, **CALL**, **BEGIN**, **DESCRIBE**, **ROLLBACK**, **FLUSH**, **USE**, **SHOW**, **START**, **COMMIT**, and **RENAME**.
   * 
   * >  If your database instance is an ApsaraDB RDS for MySQL instance, a PolarDB for MySQL cluster, or a PolarDB-X 2.0 instance, the statistics can be collected based on the SQL statement type.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The start time can be up to 90 days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645581813000
   */
  start?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that was used to create the database instance.
   * 
   * >  This parameter is optional. The system can automatically obtain the Alibaba Cloud account ID based on the value of InstanceId when you call the GetFullRequestOriginStatByInstanceId operation.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbName: 'DbName',
      end: 'End',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      originHost: 'OriginHost',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      role: 'Role',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      start: 'Start',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      dbName: 'string',
      end: 'number',
      instanceId: 'string',
      keyword: 'string',
      nodeId: 'string',
      orderBy: 'string',
      originHost: 'string',
      pageNo: 'number',
      pageSize: 'number',
      role: 'string',
      sqlId: 'string',
      sqlType: 'string',
      start: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

