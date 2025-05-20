// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecentActedFile extends $dara.Model {
  actionList?: string[];
  /**
   * @example
   * doc
   */
  category?: string;
  /**
   * @example
   * true
   */
  deleted?: boolean;
  /**
   * @example
   * 50d6f2aaa16525c7d053998e48fac265962f585f
   */
  driveId?: string;
  /**
   * @example
   * false
   */
  driveIsHandover?: boolean;
  /**
   * @example
   * group drive
   */
  driveName?: string;
  /**
   * @example
   * 50d6f2aaa16525c7d053998e48fac265962f585f
   */
  driveOwnerId?: string;
  /**
   * @example
   * group
   */
  driveOwnerType?: string;
  /**
   * @example
   * 50d6f2aaa16525c7d053998e48fac265962f585f
   */
  fileId?: string;
  /**
   * @example
   * a.jpg
   */
  fileName?: string;
  /**
   * @example
   * 100
   */
  size?: number;
  /**
   * @example
   * https://xxx.jpg
   */
  thumbnail?: string;
  /**
   * @example
   * true
   */
  trashed?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      category: 'category',
      deleted: 'deleted',
      driveId: 'drive_id',
      driveIsHandover: 'drive_is_handover',
      driveName: 'drive_name',
      driveOwnerId: 'drive_owner_id',
      driveOwnerType: 'drive_owner_type',
      fileId: 'file_id',
      fileName: 'file_name',
      size: 'size',
      thumbnail: 'thumbnail',
      trashed: 'trashed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleted: 'boolean',
      driveId: 'string',
      driveIsHandover: 'boolean',
      driveName: 'string',
      driveOwnerId: 'string',
      driveOwnerType: 'string',
      fileId: 'string',
      fileName: 'string',
      size: 'number',
      thumbnail: 'string',
      trashed: 'boolean',
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

