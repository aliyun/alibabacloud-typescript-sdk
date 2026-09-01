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
   * The maximum number of result rows to return for this request. Valid values: 1 to 10000. If this parameter is not specified, no additional row limit is imposed on the SQL submitted by the caller. The server-side SSE upper limit of 10000 rows and the top-level LIMIT clause in the SQL statement still apply.
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
   * The read-only query statement to execute. Only a single MySQL SELECT statement is supported, and it must access the fully qualified polardbx_sls table. Multi-statement queries, write operations, locks, user variables, dynamic placeholders, and reserved hints are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from device where name = \\"108001022203365239\\"
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

