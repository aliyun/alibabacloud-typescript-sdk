// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructDlfTagDto extends $dara.Model {
  /**
   * @example
   * 123456789
   */
  snapshotId?: number;
  /**
   * @example
   * milvus-auto-20260101
   */
  tagName?: string;
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
      snapshotId: 'snapshotId',
      tagName: 'tagName',
      timeMillis: 'timeMillis',
      totalRecordCount: 'totalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'number',
      tagName: 'string',
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

