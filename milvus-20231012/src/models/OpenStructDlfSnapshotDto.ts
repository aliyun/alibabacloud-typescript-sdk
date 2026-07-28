// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructDlfSnapshotDto extends $dara.Model {
  /**
   * @example
   * 500
   */
  changelogRecordCount?: number;
  /**
   * @example
   * APPEND
   */
  commitKind?: string;
  /**
   * @example
   * 1000
   */
  deltaRecordCount?: number;
  /**
   * @example
   * 1
   */
  schemaId?: number;
  /**
   * @example
   * 123456789
   */
  snapshotId?: number;
  /**
   * @example
   * 1711334400000
   */
  timeMillis?: number;
  /**
   * @example
   * 100000
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      changelogRecordCount: 'changelogRecordCount',
      commitKind: 'commitKind',
      deltaRecordCount: 'deltaRecordCount',
      schemaId: 'schemaId',
      snapshotId: 'snapshotId',
      timeMillis: 'timeMillis',
      totalRecordCount: 'totalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelogRecordCount: 'number',
      commitKind: 'string',
      deltaRecordCount: 'number',
      schemaId: 'number',
      snapshotId: 'number',
      timeMillis: 'number',
      totalRecordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

