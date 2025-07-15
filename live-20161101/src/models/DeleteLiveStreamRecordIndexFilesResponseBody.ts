// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveStreamRecordIndexFilesResponseBodyRecordDeleteInfoListRecordDeleteInfo extends $dara.Model {
  /**
   * @remarks
   * The processing result of each file indicated by the file ID. Valid values:
   * 
   * *   **OK**: The file has been deleted.
   * *   **AccessDenied**: Access to the file has been denied.
   * *   **FileNotFound**: The file fails to be found.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the index file that is used to locate the live stream recording files to be deleted.
   * 
   * @example
   * c4d7f0a4-b506-43f9-8de3-07732c3f**
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteLiveStreamRecordIndexFilesResponseBodyRecordDeleteInfoList extends $dara.Model {
  recordDeleteInfo?: DeleteLiveStreamRecordIndexFilesResponseBodyRecordDeleteInfoListRecordDeleteInfo[];
  static names(): { [key: string]: string } {
    return {
      recordDeleteInfo: 'RecordDeleteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordDeleteInfo: { 'type': 'array', 'itemType': DeleteLiveStreamRecordIndexFilesResponseBodyRecordDeleteInfoListRecordDeleteInfo },
    };
  }

  validate() {
    if(Array.isArray(this.recordDeleteInfo)) {
      $dara.Model.validateArray(this.recordDeleteInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLiveStreamRecordIndexFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A return value of 500 indicates an error. For details, see the Error codes section of this topic.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The status description. A return value of 500 indicates an error. For details, see the Error codes section of this topic.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The deletion information.
   */
  recordDeleteInfoList?: DeleteLiveStreamRecordIndexFilesResponseBodyRecordDeleteInfoList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 939D19EE-59A0-18E9-B458-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recordDeleteInfoList: 'RecordDeleteInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recordDeleteInfoList: DeleteLiveStreamRecordIndexFilesResponseBodyRecordDeleteInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordDeleteInfoList && typeof (this.recordDeleteInfoList as any).validate === 'function') {
      (this.recordDeleteInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

