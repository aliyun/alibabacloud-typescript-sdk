// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentMJobInfoResponseBodyDataAgentMDetailResponseSummaryUrls extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SatisfactionAnalysis.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * xlsx
   */
  fileType?: string;
  /**
   * @remarks
   * The file URL.
   * 
   * @example
   * http://******.oss-cn-hangzhou.aliyuncs.com/uploadTransfer/17****dline-express.zip
   */
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileType: 'FileType',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileType: 'string',
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentMJobInfoResponseBodyDataAgentMDetailResponse extends $dara.Model {
  /**
   * @remarks
   * The execution summary.
   * 
   * @example
   * This quality inspection analyzed a total of 120 conversations..
   */
  summary?: string;
  /**
   * @remarks
   * The list of result files. Each item contains complete file fields.
   */
  summaryUrls?: GetAgentMJobInfoResponseBodyDataAgentMDetailResponseSummaryUrls[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      summaryUrls: 'SummaryUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      summaryUrls: { 'type': 'array', 'itemType': GetAgentMJobInfoResponseBodyDataAgentMDetailResponseSummaryUrls },
    };
  }

  validate() {
    if(Array.isArray(this.summaryUrls)) {
      $dara.Model.validateArray(this.summaryUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentMJobInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the task processing result.
   */
  agentMDetailResponse?: GetAgentMJobInfoResponseBodyDataAgentMDetailResponse;
  /**
   * @remarks
   * The end time of the scan range.
   * 
   * @example
   * 2026-08-26 20:00:00
   */
  dataEndTime?: string;
  /**
   * @remarks
   * The start time of the scan range.
   * 
   * @example
   * 2026-08-26 19:00:00
   */
  dataStartTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - queing: queuing.
   * - readyAnalysis: pending analysis.
   * - running: running.
   * - error: failed.
   * - finish: completed.
   * - fileUploadUser: user-specified file upload completed.
   * - fileUploadSystem: system-generated file upload completed.
   * - expired: expired.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The actual end time of the task.
   * 
   * @example
   * 2026-08-26 20:00:00
   */
  taskEndTime?: string;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * A6BEC8D-9A5B-4BE5-8432-4F635E***
   */
  taskId?: string;
  /**
   * @remarks
   * The actual start time of the task.
   * 
   * @example
   * 2026-08-26 19:00:00
   */
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentMDetailResponse: 'AgentMDetailResponse',
      dataEndTime: 'DataEndTime',
      dataStartTime: 'DataStartTime',
      id: 'Id',
      message: 'Message',
      status: 'Status',
      taskEndTime: 'TaskEndTime',
      taskId: 'TaskId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentMDetailResponse: GetAgentMJobInfoResponseBodyDataAgentMDetailResponse,
      dataEndTime: 'string',
      dataStartTime: 'string',
      id: 'number',
      message: 'string',
      status: 'string',
      taskEndTime: 'string',
      taskId: 'string',
      taskStartTime: 'string',
    };
  }

  validate() {
    if(this.agentMDetailResponse && typeof (this.agentMDetailResponse as any).validate === 'function') {
      (this.agentMDetailResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentMJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentMJobInfoResponseBodyData;
  /**
   * @remarks
   * The error message returned when an error occurs.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false/null: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentMJobInfoResponseBodyData,
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

