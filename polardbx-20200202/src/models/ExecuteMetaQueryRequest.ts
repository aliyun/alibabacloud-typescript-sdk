// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMetaQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The primary instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxsp-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The maximum number of rows to return. Default value: 100. Valid values: 1 to 1000. The actual number of returned rows is the minimum value among the code hard limit, the Biz DB limit, and the outermost LIMIT clause in the SQL statement. To retrieve data continuously, implement pagination in the SQL statement.
   */
  maxResultRows?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The SQL statement to execute.
   * 
   * This parameter is required.
   * 
   * @example
   * show databases;
   */
  sql?: string;
  /**
   * @remarks
   * The data node (DN) instance ID.
   * 
   * @example
   * pxc-xdb-s-*
   */
  storageInstId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      maxResultRows: 'MaxResultRows',
      regionId: 'RegionId',
      sql: 'Sql',
      storageInstId: 'StorageInstId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      maxResultRows: 'number',
      regionId: 'string',
      sql: 'string',
      storageInstId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

