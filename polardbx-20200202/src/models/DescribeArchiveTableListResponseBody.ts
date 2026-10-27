// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeArchiveTableListResponseBodyDataTables extends $dara.Model {
  /**
   * @remarks
   * The archiving status. Valid values: SUCCESS, PAUSE, and RUNNING.
   * 
   * @example
   * SUCCESS
   */
  archiveStatus?: string;
  /**
   * @remarks
   * The time when the table was created.
   */
  createdDate?: number;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 0
   */
  fileCount?: number;
  /**
   * @remarks
   * The time of the last successful archiving.
   */
  lastSuccessArchiveTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * The amount of storage space used.
   * 
   * @example
   * 0
   */
  spaceSize?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      archiveStatus: 'ArchiveStatus',
      createdDate: 'CreatedDate',
      fileCount: 'FileCount',
      lastSuccessArchiveTime: 'LastSuccessArchiveTime',
      schemaName: 'SchemaName',
      spaceSize: 'SpaceSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveStatus: 'string',
      createdDate: 'number',
      fileCount: 'number',
      lastSuccessArchiveTime: 'number',
      schemaName: 'string',
      spaceSize: 'number',
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

export class DescribeArchiveTableListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of tables in the PAUSE state.
   * 
   * @example
   * 0
   */
  pausedCount?: number;
  /**
   * @remarks
   * The number of tables being archived.
   * 
   * @example
   * 0
   */
  runningCount?: number;
  /**
   * @remarks
   * The number of successfully archived tables.
   * 
   * @example
   * 0
   */
  successCount?: number;
  /**
   * @remarks
   * The list of archived tables.
   */
  tables?: DescribeArchiveTableListResponseBodyDataTables[];
  /**
   * @remarks
   * The number of tables to be archived.
   * 
   * @example
   * 0
   */
  tobeArchivedConut?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      pausedCount: 'PausedCount',
      runningCount: 'RunningCount',
      successCount: 'SuccessCount',
      tables: 'Tables',
      tobeArchivedConut: 'TobeArchivedConut',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      pausedCount: 'number',
      runningCount: 'number',
      successCount: 'number',
      tables: { 'type': 'array', 'itemType': DescribeArchiveTableListResponseBodyDataTables },
      tobeArchivedConut: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeArchiveTableListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data.
   */
  data?: DescribeArchiveTableListResponseBodyData;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeArchiveTableListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

