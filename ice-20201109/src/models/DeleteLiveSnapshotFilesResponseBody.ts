// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveSnapshotFilesResponseBodyDeleteFileResultList extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1660638613798
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The deletion result. OK indicates that the deletion was successful. Other values indicate that the deletion failed.
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
   * The list of deletion results.
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

