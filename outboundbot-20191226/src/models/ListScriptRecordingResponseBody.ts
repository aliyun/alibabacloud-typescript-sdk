// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptRecordingResponseBodyScriptRecordings extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1744963749000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1654601332000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Recording upload time
   * 
   * @example
   * 1654601332000
   */
  gmtUpload?: number;
  /**
   * @remarks
   * The ID of the recording file within the instance
   * 
   * @example
   * 000003
   */
  innerId?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * ff0fb845-9f90-46d3-9716-d36b8a1e753a
   */
  instanceId?: string;
  /**
   * @remarks
   * Recording content
   * 
   * @example
   * 您好！
   */
  recordingContent?: string;
  /**
   * @remarks
   * Recording duration, in seconds.
   * 
   * @example
   * 10
   */
  recordingDuration?: number;
  /**
   * @remarks
   * Recording name
   * 
   * @example
   * hello.wav
   */
  recordingName?: string;
  /**
   * @remarks
   * The unique ID of the recording.
   * 
   * @example
   * 0a77386e-6402-8d23-4adf-6ec13b3f404d
   */
  refId?: string;
  /**
   * @remarks
   * Scenario ID of the recording
   * 
   * @example
   * 6019b692-fd9e-4adb-8877-cef6a297b234
   */
  scriptId?: string;
  /**
   * @remarks
   * Recording status
   * 
   * @example
   * 8
   */
  state?: number;
  /**
   * @remarks
   * State extension
   * 
   * @example
   * 无
   */
  stateExtend?: string;
  /**
   * @remarks
   * Storage UUID
   * 
   * @example
   * 393674ed-3b5d-db44-0fda-615d05210178
   */
  storageUuid?: string;
  /**
   * @remarks
   * Unique ID of the recording
   * 
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
   * @remarks
   * API status
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Recording list
   */
  scriptRecordings?: ListScriptRecordingResponseBodyScriptRecordings[];
  /**
   * @remarks
   * Success
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count
   * 
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

