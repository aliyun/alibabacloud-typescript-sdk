// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList extends $dara.Model {
  /**
   * @remarks
   * The time when the file was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1660638613798
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The result of deletion. A value of OK indicates that the file is deleted. Other values indicate that the file failed to be deleted.
   * 
   * Valid values:
   * 
   * *   OK: The file was deleted.
   * *   NotFound: The file was not found.
   * 
   * @example
   * OK
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

