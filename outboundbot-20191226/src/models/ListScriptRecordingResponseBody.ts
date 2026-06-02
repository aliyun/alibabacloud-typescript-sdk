// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptRecordingResponseBodyScriptRecordings extends $dara.Model {
  /**
   * @example
   * 2022-07-11T07:51:49.000+0000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1654601332000
   */
  gmtModified?: number;
  /**
   * @example
   * 1654601332000
   */
  gmtUpload?: number;
  /**
   * @example
   * 1
   */
  innerId?: string;
  /**
   * @example
   * ff0fb845-9f90-46d3-9716-d36b8a1e753a
   */
  instanceId?: string;
  recordingContent?: string;
  /**
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @example
   * hello.wav
   */
  recordingName?: string;
  refId?: string;
  /**
   * @example
   * 6019b692-fd9e-4adb-8877-cef6a297b234
   */
  scriptId?: string;
  /**
   * @example
   * 8
   */
  state?: number;
  stateExtend?: string;
  /**
   * @example
   * 393674ed-3b5d-db44-0fda-615d05210178
   */
  storageUuid?: string;
  /**
   * @example
   * 0a77386e-6402-8d23-4adf-6ec13b3f404d
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtUpload: 'GmtUpload',
      innerId: 'InnerId',
      instanceId: 'InstanceId',
      recordingContent: 'RecordingContent',
      recordingDuration: 'RecordingDuration',
      recordingName: 'RecordingName',
      refId: 'RefId',
      scriptId: 'ScriptId',
      state: 'State',
      stateExtend: 'StateExtend',
      storageUuid: 'StorageUuid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      gmtUpload: 'number',
      innerId: 'string',
      instanceId: 'string',
      recordingContent: 'string',
      recordingDuration: 'number',
      recordingName: 'string',
      refId: 'string',
      scriptId: 'string',
      state: 'number',
      stateExtend: 'string',
      storageUuid: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptRecordingResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  scriptRecordings?: ListScriptRecordingResponseBodyScriptRecordings[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 99
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scriptRecordings: 'ScriptRecordings',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scriptRecordings: { 'type': 'array', 'itemType': ListScriptRecordingResponseBodyScriptRecordings },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scriptRecordings)) {
      $dara.Model.validateArray(this.scriptRecordings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

