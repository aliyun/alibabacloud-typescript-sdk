// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FileRemovePermissionRequestMemberList } from "./FileRemovePermissionRequestMemberList";


export class FileRemovePermissionRequest extends $dara.Model {
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
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  /**
   * @remarks
   * The identities with whom the file is shared.
   * 
   * This parameter is required.
   */
  memberList?: FileRemovePermissionRequestMemberList[];
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
      memberList: { 'type': 'array', 'itemType': FileRemovePermissionRequestMemberList },
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

