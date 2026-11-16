// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoCreativeGenerationJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * 01a6adbbd181437eb5030d3d93e0182d
   */
  editingProjectId?: string;
  /**
   * @remarks
   * The media asset ID of the produced video.
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
   * The download URL of the produced video. The URL is signed and time-sensitive.
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
   * The time when the job was created. The time is displayed in UTC in the yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\" format.
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The error code. This field is returned only when the job status is Failed.
   * 
   * @example
   * WorkflowTaskFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The time when the job was completed. The time is displayed in UTC.
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
   * The task result. This field is valid only when the node status is Succeeded. Each element represents a single-language video output.
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
   * The user-defined parameter. This value is returned as is.
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

