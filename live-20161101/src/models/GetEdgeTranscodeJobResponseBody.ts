// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeTranscodeJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2023-07-24T16:44:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the task was last started.
   * 
   * @example
   * 2023-07-25T02:48:58Z
   */
  lastStartAt?: string;
  /**
   * @remarks
   * The time when the task was last stopped.
   * 
   * @example
   * 2023-07-25T05:48:58Z
   */
  lastStopAt?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * my_job
   */
  name?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   0: not started
   * *   1: in progress
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The URL of the input stream.
   * 
   * @example
   * rtmp://mydomain/app/stream1
   */
  streamInput?: string;
  /**
   * @remarks
   * The URL of the output stream.
   * 
   * @example
   * rtmp://testdomain/app/stream2
   */
  streamOutput?: string;
  /**
   * @remarks
   * The ID of the edge transcoding template used by the task.
   * 
   * @example
   * 9b1571b513cb44f7a1ba6ae561ff****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the edge transcoding template used by the task.
   * 
   * @example
   * my_template
   */
  templateName?: string;
  /**
   * @remarks
   * The type of edge transcoding. Valid values:
   * 
   * *   common: standard transcoding and Narrowband HD™ 1.0 transcoding
   * *   nbhd-2: Narrowband HD™ 2.0 transcoding
   * *   ultra-hd: ultra-high definition transcoding
   * 
   * @example
   * common
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      jobId: 'JobId',
      lastStartAt: 'LastStartAt',
      lastStopAt: 'LastStopAt',
      name: 'Name',
      status: 'Status',
      streamInput: 'StreamInput',
      streamOutput: 'StreamOutput',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      jobId: 'string',
      lastStartAt: 'string',
      lastStopAt: 'string',
      name: 'string',
      status: 'string',
      streamInput: 'string',
      streamOutput: 'string',
      templateId: 'string',
      templateName: 'string',
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

export class GetEdgeTranscodeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the edge transcoding task.
   */
  job?: GetEdgeTranscodeJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetEdgeTranscodeJobResponseBodyJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

