// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotDriveFile extends $dara.Model {
  /**
   * @example
   * 2
   */
  actionCount?: number;
  actionList?: string[];
  /**
   * @example
   * doc
   */
  category?: string;
  /**
   * @example
   * 1727059860000
   */
  countAt?: number;
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 666ff36c22278f023ec
   */
  fileId?: string;
  /**
   * @example
   * a.jpg
   */
  name?: string;
  /**
   * @example
   * 666ff36c22278f023ec
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionCount: 'action_count',
      actionList: 'action_list',
      category: 'category',
      countAt: 'count_at',
      driveId: 'drive_id',
      fileId: 'file_id',
      name: 'name',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCount: 'number',
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      countAt: 'number',
      driveId: 'string',
      fileId: 'string',
      name: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

