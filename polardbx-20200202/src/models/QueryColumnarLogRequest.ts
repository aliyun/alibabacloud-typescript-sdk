// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryColumnarLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X instance for which you want to query column store audit logs.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The maximum number of result rows to return for this request. Valid values: 1 to 1000. Default value: 100. The actual number of returned rows is also subject to the top-level LIMIT clause in the SQL statement and the current service policy.
   * 
   * @example
   * 1000
   */
  maxResultRows?: number;
  /**
   * @remarks
   * The region ID of the request. The region ID must be the same as the region where the SQLQuery service is deployed.
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
   * select * from device where name = \\"105506012111488797\\"
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

