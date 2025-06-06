// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFullRequestOriginStatByInstanceIdRequest extends $dara.Model {
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
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time. The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1644803409000
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
   * The node ID.
   * 
   * >  This parameter must be specified if the database instance is a PolarDB for MySQL cluster.
   * 
   * @example
   * pi-bp12v7243x012****
   */
  nodeId?: string;
  /**
   * @remarks
   * The field by which the results to be returned are sorted. Default value: **count**. Valid values:
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
   * The role of the PolarDB-X 2.0 node. Valid values:
   * 
   * *   **polarx_cn**: compute node.
   * *   **polarx_en**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: **SELECT**, **INSERT**, **UPDATE**, **DELETE**, **MERGE**, **ALTER**, **CREATEINDEX**, **DROPINDEX**, **CREATE**, **DROP**, **SET**, **DESC**, **REPLACE**, **CALL**, **BEGIN**, **DESCRIBE**, **ROLLBACK**, **FLUSH**, **USE**, **SHOW**, **START**, **COMMIT**, and **RENAME**.
   * 
   * >  If the database instance is an ApsaraDB RDS for MySQL instance, a PolarDB for MySQL instance, or a PolarDB-X 2.0 instance, statistics can be collected based on the SQL statement type.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The start time must be within the storage duration of the SQL Explorer of the database instance, and can be up to 90 days earlier than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1644716649000
   */
  start?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * >  This parameter is optional. The system can automatically obtain the account ID based on the value of InstanceId when you call this operation.
   * 
   * @example
   * 196278346919****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      end: 'End',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      role: 'Role',
      sqlType: 'SqlType',
      start: 'Start',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      end: 'number',
      instanceId: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNo: 'number',
      pageSize: 'number',
      role: 'string',
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

