// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMnsmessageResult";


export class QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivity extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * *   This parameter is returned only if **Fail** is returned for the State parameter.
   * *   This parameter is not returned if the method status is **Success**.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The time when the method ends.
   * 
   * @example
   * 2016-04-01T06:53:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IDs of the jobs that are generated when the methods are called, such as the job IDs for the analysis, transcode, and snapshot methods.
   * 
   * @example
   * 2376030d9d0849399cd20e20f4f3****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify the user of the job result.
   */
  MNSMessageResult?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult;
  /**
   * @remarks
   * The error message.
   * 
   * *   This parameter is returned only if **Fail** is returned for the State parameter.
   * *   This parameter is not returned if the method status is **Success**.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The name of the method.
   * 
   * > The name of each method in a media workflow is unique.
   * 
   * @example
   * Start
   */
  name?: string;
  /**
   * @remarks
   * The time when the method is called.
   * 
   * @example
   * 2016-04-01T06:53:44Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the workflow method. Valid values:
   * 
   * *   Running: The method is being called.
   * *   Success: The method is called.
   * *   Fail: The method failed to be called.
   * *   Skipped: The method is skipped.
   * 
   * > For example, after the analysis is complete, the transcode method is called and high-definition and standard-definition transcoding jobs are created. The system determines whether to run the jobs based on the analysis result. If the resolution of the input video is low, the high-definition transcoding job may be skipped.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The methods that are supported in the media workflow. Valid values: Start, Snapshot, Transcode, Analysis, and Report. For more information, see [Methods supported for media workflows](https://help.aliyun.com/document_detail/68494.html).
   * 
   * @example
   * Start
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      jobId: 'string',
      MNSMessageResult: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionListMediaWorkflowExecutionActivityListActivityMNSMessageResult,
      message: 'string',
      name: 'string',
      startTime: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

