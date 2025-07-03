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

