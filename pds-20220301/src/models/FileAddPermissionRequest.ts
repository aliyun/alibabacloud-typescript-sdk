// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilePermissionMember } from "./FilePermissionMember";


export class FileAddPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the folder. If you want to authorize a user or group to access a team drive, set this parameter to root. If you want to authorize a user or group to access an individual drive, you cannot set this parameter to root.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  /**
   * @remarks
   * The members that are authorized to access files.
   * 
   * This parameter is required.
   */
  memberList?: FilePermissionMember[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      memberList: 'member_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      memberList: { 'type': 'array', 'itemType': FilePermissionMember },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

