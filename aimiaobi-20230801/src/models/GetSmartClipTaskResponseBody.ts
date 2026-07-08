// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartClipTaskResponseBodyDataSubJobsFileAttr extends $dara.Model {
  /**
   * @remarks
   * Video duration in seconds
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * Video file size
   * 
   * @example
   * 290804
   */
  fileLength?: string;
  /**
   * @remarks
   * Video file name
   * 
   * @example
   * 2024-12-12.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * Video height
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Temporary URL to access the video file. Expires in one hour.
   * 
   * @example
   * http://www.example.com/tmp.mp4
   */
  tmpUrl?: string;
  /**
   * @remarks
   * Video width
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileLength: 'FileLength',
      fileName: 'FileName',
      height: 'Height',
      tmpUrl: 'TmpUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileLength: 'string',
      fileName: 'string',
      height: 'number',
      tmpUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyDataSubJobs extends $dara.Model {
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 文件名错误
   */
  errorMessage?: string;
  /**
   * @remarks
   * File attributes
   */
  fileAttr?: GetSmartClipTaskResponseBodyDataSubJobsFileAttr;
  /**
   * @remarks
   * File key
   * 
   * @example
   * oss://default/bucket-name/path-xxx/xxx-1.mp4
   */
  fileKey?: string;
  /**
   * @remarks
   * Subtask status:
   * PENDING: Pending
   * RUNNING: Running
   * SUCCESSED: Succeeded
   * FAILED: Failed
   * CANCELED: Canceled
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Subtask ID
   * 
   * @example
   * xxxxx
   */
  subJobId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      status: 'Status',
      subJobId: 'SubJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      fileAttr: GetSmartClipTaskResponseBodyDataSubJobsFileAttr,
      fileKey: 'string',
      status: 'string',
      subJobId: 'string',
    };
  }

  validate() {
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * Task status:
   * PENDING: Pending
   * RUNNING: Running
   * SUCCESSED: Succeeded
   * FAILED: Failed
   * CANCELED: Canceled
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * List of subtasks
   */
  subJobs?: GetSmartClipTaskResponseBodyDataSubJobs[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      status: 'Status',
      subJobs: 'SubJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
      subJobs: { 'type': 'array', 'itemType': GetSmartClipTaskResponseBodyDataSubJobs },
    };
  }

  validate() {
    if(Array.isArray(this.subJobs)) {
      $dara.Model.validateArray(this.subJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmartClipTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Task response
   */
  data?: GetSmartClipTaskResponseBodyData;
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
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique identifier of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. true indicates success. false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSmartClipTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

