// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeArchiveTableListResponseBodyDataTables extends $dara.Model {
  archiveStatus?: string;
  createdDate?: number;
  fileCount?: number;
  lastSuccessArchiveTime?: number;
  schemaName?: string;
  spaceSize?: number;
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
  pageIndex?: number;
  pageSize?: number;
  pausedCount?: number;
  runningCount?: number;
  successCount?: number;
  tables?: DescribeArchiveTableListResponseBodyDataTables[];
  tobeArchivedConut?: number;
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
  data?: DescribeArchiveTableListResponseBodyData;
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

