// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordDownloadJobListResponseBodyDataJobList extends $dara.Model {
  /**
   * @remarks
   * The start time of the query range. The value is a 10-digit timestamp in seconds. Valid values: 0 to 2147483647.
   * 
   * @example
   * 1900000000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time of the query range. The value is a 10-digit timestamp in seconds. Valid values: 0 to 2147483647.
   * 
   * @example
   * 2100000000
   */
  endTime?: number;
  /**
   * @remarks
   * The file name. This parameter is returned only when **Type** is set to 1.
   * 
   * @example
   * testfile
   */
  fileName?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * C47T6xwp6ms4bNlkHRWCg4****
   */
  iotId?: string;
  /**
   * @remarks
   * The cause of the task exception. This parameter is returned when **Status** is **-1**. Valid values:
   * 
   * - **9441**: Network exception.
   * - **9442**: Audio and video data error.
   * 
   * @example
   * 9441
   */
  jobErrorCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * w2s******
   */
  jobId?: string;
  /**
   * @remarks
   * The generation progress of the recording file. Valid values: 0 to 100.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The recording type. Valid values:
   * 
   * - **0**: Continuous recording.
   * - **1**: Event recording.
   * - **2**: Manual recording.
   * - **4**: Local-to-cloud recording.
   * - **99**: Mixed type.
   * 
   * @example
   * 0
   */
  recordType?: number;
  /**
   * @remarks
   * The generation status of the recording file. Valid values:
   * 
   * - **-1**: An exception occurred during the generation of the recording file.
   * - **0**: The recording file is generated.
   * - **1**: The recording file is being generated.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The stream type. Valid values:
   * 
   * - **0**: Main stream.
   * - **1**: Sub stream.
   * 
   * @example
   * 0
   */
  streamType?: number;
  /**
   * @remarks
   * The download type. Valid values:
   * 
   * - **1**: Download by file.
   * - **2**: Download device cloud recordings by time range.
   * - **3**: Download device local recordings by time range.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The download URL of the cloud recording. The URL is valid for 1 hour.
   * 
   * @example
   * http://*********
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      fileName: 'FileName',
      iotId: 'IotId',
      jobErrorCode: 'JobErrorCode',
      jobId: 'JobId',
      progress: 'Progress',
      recordType: 'RecordType',
      status: 'Status',
      streamType: 'StreamType',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      fileName: 'string',
      iotId: 'string',
      jobErrorCode: 'number',
      jobId: 'string',
      progress: 'number',
      recordType: 'number',
      status: 'number',
      streamType: 'number',
      type: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the cloud recording download tasks.
   */
  jobList?: QueryRecordDownloadJobListResponseBodyDataJobList[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': QueryRecordDownloadJobListResponseBodyDataJobList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobList)) {
      $dara.Model.validateArray(this.jobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRecordDownloadJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the call result.
   * 
   * - If the call is successful, 200 is returned.
   * - If the call fails, an error code is returned. For more information, see the **Error codes** section below.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The list of tasks returned if the call is successful.
   */
  data?: QueryRecordDownloadJobListResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * iot.vision.RequestFailed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * E55***B7-4***-4***-8***-D3******F565
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRecordDownloadJobListResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

