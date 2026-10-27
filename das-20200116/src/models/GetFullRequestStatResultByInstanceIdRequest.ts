// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestStatResultByInstanceIdRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order. Default value: false.
   * 
   * @example
   * False
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
   * The end time of the query. The time is a UNIX timestamp in milliseconds.
   * 
   * > The end time must be later than the start time, and the interval between the start time and the end time cannot exceed one day.
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
   * The query keyword.
   * 
   * @example
   * dbtest01
   */
  keyword?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > For PolarDB for MySQL instances, the node ID is required.
   * 
   * @example
   * pi-bp12v7243x012****
   */
  nodeId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Default value: **count**.
   * 
   * - **count**: the number of executions.
   * 
   * - **avgRt**: the average execution time.
   * 
   * - **rtRate**: the execution time proportion.
   * 
   * - **rowsExamined**: the total number of scanned rows.
   * 
   * - **avgRowsExamined**: the average number of scanned rows.
   * 
   * - **avgRowsReturned**: the average number of returned rows.
   * 
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @remarks
   * The IP address of the client that executed the SQL statement.
   * 
   * > This parameter is optional. If you specify a client IP address, the full request data of the specified client IP address is aggregated. If you leave this parameter empty, the full request data of the entire database instance is aggregated.
   * 
   * @example
   * 172.26.XX.XXX
   */
  originHost?: string;
  /**
   * @remarks
   * The page number for the paged query. The paging starts from 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The data volume per page for paging in a paged query. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The node information of the PolarDB-X 2.0 database instance. Valid values:
   * 
   * - **polarx_cn**: compute node.
   * 
   * - **polarx_dn**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The SQL ID.
   * 
   * > If you specify an SQL ID, the full request data of the specified SQL ID is aggregated. If you leave this parameter empty, the full request data of the entire database instance is aggregated.
   * 
   * @example
   * d71f82be1eef72bd105128204d2e****
   */
  sqlId?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: **SELECT**, **INSERT**, **UPDATE**, **DELETE**, **LOGIN**, **LOGOUT**, **MERGE**, **ALTER**, **CREATEINDEX**, **DROPINDEX**, **CREATE**, **DROP**, **SET**, **DESC**, **REPLACE**, **CALL**, **BEGIN**, **DESCRIBE**, **ROLLBACK**, **FLUSH**, **USE**, **SHOW**, **START**, **COMMIT**, and **RENAME**.
   * 
   * > If the database instance is an ApsaraDB RDS for MySQL, PolarDB for MySQL, or PolarDB-X 2.0 instance, you can aggregate data by SQL statement type.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. The format is a UNIX timestamp, in milliseconds.
   * 
   * > The start time must be within the SQL Explorer storage duration for the database instance and cannot be more than 90 days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645581813000
   */
  start?: number;
  /**
   * @remarks
   * The instance ID, which is the ID of the Alibaba Cloud account that created the database instance.
   * 
   * > This parameter is optional. After you enter the ID of the target database instance, the system automatically obtains the instance ID when you call the API operation.
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

