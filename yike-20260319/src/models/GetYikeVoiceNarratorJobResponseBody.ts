// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeVoiceNarratorJobResponseBodyJobResult extends $dara.Model {
  /**
   * @example
   * 01a6adbbd181437eb5030d3d93e0182d
   */
  editingProjectId?: string;
  /**
   * @example
   * 9d7e982012c671f1b803e7f6d75a6302
   */
  mediaId?: string;
  /**
   * @example
   * CN
   */
  outputLanguage?: string;
  /**
   * @example
   * https://test.oss-cn-shanghai.aliyuncs.com/videos/task_abc123def456.mp4
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

export class GetYikeVoiceNarratorJobResponseBody extends $dara.Model {
  /**
   * @example
   * WorkflowTaskFailed
   */
  errorCode?: string;
  /**
   * @example
   * task_abc123def456
   */
  jobId?: string;
  /**
   * @example
   * {\\"TextType\\":2,\\"TextContent\\":\\"Today, Beijing held a press conference to announce plans to further optimize the city\\"s transportation network, including adding three new subway lines within the next three years....\\",\\"AspectRatio\\":\\"16:9\\", \\"Resolution\\":\\"720P\\", \\"OutputLanguages\\":[\\"CN\\",\\"YUE\\"]"}
   */
  jobParams?: string;
  jobResult?: GetYikeVoiceNarratorJobResponseBodyJobResult[];
  /**
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @example
   * req_query_20260420_002
   */
  requestId?: string;
  /**
   * @example
   * {\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://cms.example.com/callback/video-task\\"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      jobId: 'JobId',
      jobParams: 'JobParams',
      jobResult: 'JobResult',
      jobStatus: 'JobStatus',
      requestId: 'RequestId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      jobId: 'string',
      jobParams: 'string',
      jobResult: { 'type': 'array', 'itemType': GetYikeVoiceNarratorJobResponseBodyJobResult },
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

