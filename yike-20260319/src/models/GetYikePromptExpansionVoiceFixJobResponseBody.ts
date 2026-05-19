// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikePromptExpansionVoiceFixJobResponseBodyJobResult extends $dara.Model {
  /**
   * @remarks
   * Oss Url
   * 
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/test.mp4
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetYikePromptExpansionVoiceFixJobResponseBody extends $dara.Model {
  endTime?: string;
  /**
   * @example
   * Forbidden
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  jobId?: string;
  jobParams?: string;
  jobResult?: GetYikePromptExpansionVoiceFixJobResponseBodyJobResult[];
  /**
   * @example
   * Succeeded
   */
  jobStatus?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  startTime?: string;
  /**
   * @example
   * {"testKey":"testValue"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobId: 'JobId',
      jobParams: 'JobParams',
      jobResult: 'JobResult',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      startTime: 'StartTime',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      jobId: 'string',
      jobParams: 'string',
      jobResult: { 'type': 'array', 'itemType': GetYikePromptExpansionVoiceFixJobResponseBodyJobResult },
      jobStatus: 'string',
      requestId: 'string',
      startTime: 'string',
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

