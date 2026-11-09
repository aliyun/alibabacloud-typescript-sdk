// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoCreativeGenerationJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * The online editing project ID.
   * 
   * @example
   * 01a6adbbd181437eb5030d3d93e0182d
   */
  editingProjectId?: string;
  /**
   * @remarks
   * The media asset ID of the output video.
   * 
   * @example
   * 9d7e982012c671f1b803e7f6d75a6302
   */
  mediaId?: string;
  /**
   * @remarks
   * The output language. Valid values: CN, EN, and YUE.
   * 
   * @example
   * CN
   */
  outputLanguage?: string;
  /**
   * @remarks
   * The signed download URL of the output video. The URL is time-limited.
   * 
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      editingProjectId: 'EditingProjectId',
      mediaId: 'MediaId',
      outputLanguage: 'OutputLanguage',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingProjectId: 'string',
      mediaId: 'string',
      outputLanguage: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoCreativeGenerationJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job creation time in UTC format (yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\").
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. This parameter is returned only when the job status is Failed.
   * 
   * @example
   * WorkflowTaskFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The job completion time in UTC format.
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  finishTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****3e761e9d11edba640c42a1b7****
   */
  jobId?: string;
  /**
   * @remarks
   * The task results of the node. This parameter is valid only when the job status is Succeeded. Each element represents the output for a single language.
   */
  jobResult?: GetVideoCreativeGenerationJobResponseBodyJobResult[];
  /**
   * @remarks
   * The job status. Valid values: Running, Succeeded, and Failed.
   * 
   * @example
   * Succeeded
   */
  jobStatus?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The custom user data, which is returned as-is.
   * 
   * @example
   * 12374214127312673137132
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      jobResult: 'JobResult',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      finishTime: 'string',
      jobId: 'string',
      jobResult: { 'type': 'array', 'itemType': GetVideoCreativeGenerationJobResponseBodyJobResult },
      jobStatus: 'string',
      requestId: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobResult)) {
      $dara.Model.validateArray(this.jobResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

