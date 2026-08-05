// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeTranscodeJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2023-07-24T16:44:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the job was last started.
   * 
   * @example
   * 2023-07-25T02:48:58Z
   */
  lastStartAt?: string;
  /**
   * @remarks
   * The time when the job was last stopped.
   * 
   * @example
   * 2023-07-25T05:48:58Z
   */
  lastStopAt?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * my_job
   */
  name?: string;
  /**
   * @remarks
   * The status of the transcoding job. Valid values:
   * 
   * - 0: The job is not started.
   * 
   * - 1: The job is running.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The input stream URL.
   * 
   * @example
   * rtmp://mydomain/app/stream1
   */
  streamInput?: string;
  /**
   * @remarks
   * The output stream URL.
   * 
   * @example
   * rtmp://testdomain/app/stream2
   */
  streamOutput?: string;
  /**
   * @remarks
   * The ID of the edge transcoding template used by the job.
   * 
   * @example
   * 9b1571b513cb44f7a1ba6ae561ff****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the edge transcoding template used by the job.
   * 
   * @example
   * my_template
   */
  templateName?: string;
  /**
   * @remarks
   * The type of edge transcoding. Valid values:
   * 
   * - common: standard transcoding and Narrowband HD 1.0.
   * 
   * - nbhd-2: Narrowband HD 2.0.
   * 
   * - ultra-hd: ultra-high definition.
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
   * The edge transcoding job.
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

