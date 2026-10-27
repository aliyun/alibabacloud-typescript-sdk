// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeArchiveTableListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of tables to return on each page. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The database name used to filter archived tables.
   * 
   * @example
   * testdb
   */
  schemaName?: string;
  /**
   * @remarks
   * The archiving status used to filter tables. Valid values: SUCCESS, PAUSE, and RUNNING.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The table name used to filter archived tables.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

