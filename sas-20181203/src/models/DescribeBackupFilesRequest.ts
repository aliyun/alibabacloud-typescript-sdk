// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The path to the backup file.
   * 
   * @example
   * “”
   */
  path?: string;
  /**
   * @remarks
   * The hash value of the backup file.
   * 
   * This parameter is required.
   * 
   * @example
   * a7f26223ef3974c6fac324cd37713ab65ab618859d20b4039192a5da44d77b63
   */
  snapshotHash?: string;
  /**
   * @remarks
   * The UUID of the server to which an anti-ransomware policy is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 6d5b361f-958d-48a8-a9d2-d6e82c1a****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      path: 'Path',
      snapshotHash: 'SnapshotHash',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageSize: 'string',
      path: 'string',
      snapshotHash: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

