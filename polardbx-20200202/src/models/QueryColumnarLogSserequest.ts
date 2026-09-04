// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryColumnarLogSSERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X instance whose column store audit logs you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The maximum number of result rows to return for this request. Valid values: 1 to 10000. If this parameter is not specified, no additional row limit is applied to the SQL statement submitted by the caller. The result is still subject to the server-side SSE upper limit of 10000 rows and the top-level LIMIT clause in the SQL statement.
   * 
   * @example
   * 1000
   */
  maxResultRows?: number;
  /**
   * @remarks
   * The region ID of the request. The value must match the region where the SQLQuery service is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The read-only query statement to execute. Only a single MySQL SELECT statement is supported. The query table must use the fully qualified form polardbx_sls.<table_name>, and only the following tables are allowed: polardbx_sls.polardbx_log (kernel logs), polardbx_sls.slow_detail_log (slow query logs), polardbx_sls.slow_trans_log (slow transaction logs), and polardbx_sls.sql_audit_log (audit logs). Multi-statement queries, write operations, locks, user variables, dynamic placeholders, and reserved hints are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM polardbx_sls.sql_audit_log LIMIT 100
   */
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      maxResultRows: 'MaxResultRows',
      regionId: 'RegionId',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      maxResultRows: 'number',
      regionId: 'string',
      SQL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

