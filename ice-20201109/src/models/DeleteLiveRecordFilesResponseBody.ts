// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveRecordFilesResponseBodyDeleteFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The code that identifies the result of the deletion.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of deletion.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the deleted recording file.
   * 
   * @example
   * 13cbb83e-043c-4728-ac35-*****
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

