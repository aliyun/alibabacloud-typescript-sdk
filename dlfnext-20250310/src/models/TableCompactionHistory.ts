// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableCompactionHistory extends $dara.Model {
  /**
   * @remarks
   * The number of files after compaction.
   */
  afterFilesCount?: number;
  /**
   * @remarks
   * The total size of files after compaction.
   */
  afterFilesSize?: number;
  /**
   * @remarks
   * The number of files before compaction.
   */
  beforeFilesCount?: number;
  /**
   * @remarks
   * The creation time of the last file before compaction.
   */
  beforeFilesLastCreationTime?: number;
  /**
   * @remarks
   * The total size of files before compaction.
   */
  beforeFilesSize?: number;
  /**
   * @remarks
   * The catalog ID.
   */
  catalogId?: string;
  /**
   * @remarks
   * The compaction commit time.
   */
  commitTime?: number;
  /**
   * @remarks
   * The snapshot ID.
   */
  snapshotId?: number;
  /**
   * @remarks
   * The table ID.
   */
  tableId?: string;
  /**
   * @remarks
   * The time when the record was last updated.
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who updated the record.
   */
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

