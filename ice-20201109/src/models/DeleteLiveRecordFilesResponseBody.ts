// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteLiveRecordFilesResponseBodyDeleteFileInfoList } from "./DeleteLiveRecordFilesResponseBodyDeleteFileInfoList";


export class DeleteLiveRecordFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of files deleted.
   */
  deleteFileInfoList?: DeleteLiveRecordFilesResponseBodyDeleteFileInfoList[];
  /**
   * @remarks
   * The description of the state returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 13cbb83e-043c-4728-ac35-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteFileInfoList: 'DeleteFileInfoList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteFileInfoList: { 'type': 'array', 'itemType': DeleteLiveRecordFilesResponseBodyDeleteFileInfoList },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deleteFileInfoList)) {
      $dara.Model.validateArray(this.deleteFileInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

