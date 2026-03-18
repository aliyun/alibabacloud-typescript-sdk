// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTablesRequestSorter extends $dara.Model {
  /**
   * @remarks
   * The sort order for lastDdlTime.
   * 
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The sort order for the number of rows.
   * 
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @remarks
   * The sort order for the data size.
   * 
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsTablesRequest extends $dara.Model {
  sorter?: ListMmsTablesRequestSorter;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 197
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mms_test
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute table.
   * 
   * @example
   * test
   */
  dstName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute schema. This parameter is null if the destination MaxCompute project does not have a schema layer.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The partitioned table.
   * 
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @remarks
   * The end of the time range for lastDdlTime.
   * 
   * @example
   * 2024-12-19 15:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @remarks
   * The start of the time range for lastDdlTime.
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to return only the names of the tables.
   * 
   * @example
   * false
   */
  onlyName?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The migration status.
   * 
   * @example
   * test
   */
  status?: string[];
  /**
   * @remarks
   * The table type.
   * 
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      dstName: 'dstName',
      dstProjectName: 'dstProjectName',
      dstSchemaName: 'dstSchemaName',
      hasPartitions: 'hasPartitions',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      name: 'name',
      onlyName: 'onlyName',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsTablesRequestSorter,
      dbId: 'number',
      dbName: 'string',
      dstName: 'string',
      dstProjectName: 'string',
      dstSchemaName: 'string',
      hasPartitions: 'boolean',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      name: 'string',
      onlyName: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

