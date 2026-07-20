// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableCompactionHistory extends $dara.Model {
  afterFilesCount?: number;
  afterFilesSize?: number;
  beforeFilesCount?: number;
  beforeFilesLastCreationTime?: number;
  beforeFilesSize?: number;
  catalogId?: string;
  commitTime?: number;
  snapshotId?: number;
  tableId?: string;
  updatedAt?: number;
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      afterFilesCount: 'afterFilesCount',
      afterFilesSize: 'afterFilesSize',
      beforeFilesCount: 'beforeFilesCount',
      beforeFilesLastCreationTime: 'beforeFilesLastCreationTime',
      beforeFilesSize: 'beforeFilesSize',
      catalogId: 'catalogId',
      commitTime: 'commitTime',
      snapshotId: 'snapshotId',
      tableId: 'tableId',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterFilesCount: 'number',
      afterFilesSize: 'number',
      beforeFilesCount: 'number',
      beforeFilesLastCreationTime: 'number',
      beforeFilesSize: 'number',
      catalogId: 'string',
      commitTime: 'number',
      snapshotId: 'number',
      tableId: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

