// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIJobResponseBodyAIJobListAIJob extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned if the value of Status is fail.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-28T02:04:47Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-28T02:04:32Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The returned data. The value is a JSON string. For more information, see [AITemplateConfig](https://help.aliyun.com/document_detail/89863.html).
   * 
   * @example
   * {"OrigASRData":{"AsrTextList":[{"EndTime":700,"StartTime":0,"Text":"Yes.","ChannelId":0,"SpeechRate":85},{"EndTime":3750,"StartTime":1630,"Text":"No.","ChannelId":0,"SpeechRate":28},{"EndTime":5910,"StartTime":4020,"Text":"Of course.","ChannelId":0,"SpeechRate":95},{"EndTime":12750,"StartTime":10090,"Text":"Message.","ChannelId":0,"SpeechRate":45},{"EndTime":25230,"StartTime":13590,"Text":"Hello, good afternoon.","ChannelId":0,"SpeechRate":20},{"EndTime":30000,"StartTime":28220,"Text":"Yes.","ChannelId":0,"SpeechRate":33}],"Duration":"30016"}}
   */
  data?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * a718a3a1e8bb42ee3bc88921e94****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the video file.
   * 
   * @example
   * 3D3D12340d9401fab46a0b847****
   */
  mediaId?: string;
  /**
   * @remarks
   * The error message. This parameter is returned if the value of Status is fail.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **success**: The job is successful.
   * *   **fail**: The job failed.
   * *   **init**: The job is being initialized.
   * *   **Processing**: The job is in progress.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The type of the job. Valid values:
   * 
   * *   **AIMediaDNA**: video fingerprinting
   * *   **AIVideoTag**: smart tagging
   * 
   * @example
   * AIVideoTag
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      data: 'string',
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBodyAIJobList extends $dara.Model {
  AIJob?: ListAIJobResponseBodyAIJobListAIJob[];
  static names(): { [key: string]: string } {
    return {
      AIJob: 'AIJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJob: { 'type': 'array', 'itemType': ListAIJobResponseBodyAIJobListAIJob },
    };
  }

  validate() {
    if(Array.isArray(this.AIJob)) {
      $dara.Model.validateArray(this.AIJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBodyNonExistAIJobIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of jobs.
   */
  AIJobList?: ListAIJobResponseBodyAIJobList;
  /**
   * @remarks
   * The IDs of the jobs that do not exist.
   */
  nonExistAIJobIds?: ListAIJobResponseBodyNonExistAIJobIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8233A0E4-E112-44*****58-2BCED1B88173
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIJobList: 'AIJobList',
      nonExistAIJobIds: 'NonExistAIJobIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJobList: ListAIJobResponseBodyAIJobList,
      nonExistAIJobIds: ListAIJobResponseBodyNonExistAIJobIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AIJobList && typeof (this.AIJobList as any).validate === 'function') {
      (this.AIJobList as any).validate();
    }
    if(this.nonExistAIJobIds && typeof (this.nonExistAIJobIds as any).validate === 'function') {
      (this.nonExistAIJobIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

