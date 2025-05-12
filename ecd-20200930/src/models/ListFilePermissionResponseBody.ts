// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilePermissionMember } from "./FilePermissionMember";


export class ListFilePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions on the shared file.
   */
  filePermissions?: FilePermissionMember[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePermissions: 'FilePermissions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePermissions: { 'type': 'array', 'itemType': FilePermissionMember },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filePermissions)) {
      $dara.Model.validateArray(this.filePermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

