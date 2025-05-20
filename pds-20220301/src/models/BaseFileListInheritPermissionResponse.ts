// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilePermissionMember } from "./FilePermissionMember";


export class BaseFileListInheritPermissionResponse extends $dara.Model {
  fileId?: string;
  member?: FilePermissionMember;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      member: 'member',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      member: FilePermissionMember,
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

