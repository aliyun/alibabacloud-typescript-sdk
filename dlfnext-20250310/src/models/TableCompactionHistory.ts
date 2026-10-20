// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableCompactionHistory extends $dara.Model {
  /**
   * @remarks
   * The total number of files after the merge.
   * 
   * @example
   * 2
   */
  afterFilesCount?: number;
  /**
   * @remarks
   * The total size of the files after the merge.
   * 
   * @example
   * 512
   */
  afterFilesSize?: number;
  /**
   * @remarks
   * The total number of files before the merge.
   * 
   * @example
   * 150
   */
  beforeFilesCount?: number;
  /**
   * @remarks
   * The latest creation time of the files before the merge.
   * 
   * @example
   * 1744969200000
   */
  beforeFilesLastCreationTime?: number;
  /**
   * @remarks
   * The total size of the files before the merge.
   * 
   * @example
   * 1024
   */
  beforeFilesSize?: number;
  /**
   * @remarks
   * The ID of the data catalog.
   * 
   * @example
   * clg-paimon-d13*****
   */
  catalogId?: string;
  /**
   * @remarks
   * The commit time.
   * 
   * @example
   * 1765890111419
   */
  commitTime?: number;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * 1
   */
  snapshotId?: number;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * tbl-*****
   */
  tableId?: string;
  /**
   * @remarks
   * The time when the record was updated.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who updated the record.
   * 
   * @example
   * acs:ram::[accountId]:root
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

