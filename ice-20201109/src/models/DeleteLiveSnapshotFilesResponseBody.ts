// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList } from "./DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList";


export class DeleteLiveSnapshotFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of deleted files.
   */
  deleteFileResultList?: DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteFileResultList: 'DeleteFileResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteFileResultList: { 'type': 'array', 'itemType': DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deleteFileResultList)) {
      $dara.Model.validateArray(this.deleteFileResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

