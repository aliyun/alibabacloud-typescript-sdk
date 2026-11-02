// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";
import { MediaConvertOutputGroupDetail } from "./MediaConvertOutputGroupDetail";
import { MediaConvertInput } from "./MediaConvertInput";
import { MediaConvertOutputGroup } from "./MediaConvertOutputGroup";
import { MediaConvertOutput } from "./MediaConvertOutput";


export class GetMediaConvertJobResponseBodyJobConfig extends $dara.Model {
  /**
   * @remarks
   * The list of inputs for the media transcoding job.
   */
  inputs?: MediaConvertInput[];
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job-1-20241205-102045
   */
  jobName?: string;
  /**
   * @remarks
   * The list of output group configurations for the media transcoding job.
   */
  outputGroups?: MediaConvertOutputGroup[];
  /**
   * @remarks
   * The list of output configurations for the media transcoding job.
   */
  outputs?: MediaConvertOutput[];
  static names(): { [key: string]: string } {
    return {
      inputs: 'Inputs',
      jobName: 'JobName',
      outputGroups: 'OutputGroups',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputs: { 'type': 'array', 'itemType': MediaConvertInput },
      jobName: 'string',
      outputGroups: { 'type': 'array', 'itemType': MediaConvertOutputGroup },
      outputs: { 'type': 'array', 'itemType': MediaConvertOutput },
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(Array.isArray(this.outputGroups)) {
      $dara.Model.validateArray(this.outputGroups);
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaConvertJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter for the media transcoding job creation request.
   * 
   * @example
   * 780018cb-55ba-466d-8acc-946c0c319a0e
   */
  clientToken?: string;
  /**
   * @remarks
   * The media transcoding failure code.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The configuration of the media transcoding job.
   */
  config?: GetMediaConvertJobResponseBodyJobConfig;
  /**
   * @remarks
   * The creation time of the job, in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The completion time of the job, in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the media transcoding job, which is a 32-character string.
   * 
   * @example
   * ******4579b5e748b99a27f6d6******
   */
  jobId?: string;
  /**
   * @remarks
   * The detailed information about the media transcoding failure.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The list of media transcoding output result details, which correspond to the execution results of the transcoding output list in the transcoding configuration.
   */
  outputDetails?: MediaConvertOutputDetail[];
  /**
   * @remarks
   * The list of media transcoding output group results, which correspond to the execution results of the transcoding output group list in the transcoding configuration.
   */
  outputGroupDetails?: MediaConvertOutputGroupDetail[];
  /**
   * @remarks
   * The completion percentage of the job.
   * 
   * @example
   * 0
   */
  percent?: number;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * 83500cb2a3b94fabb0956e38d64bd16d
   */
  pipelineId?: string;
  /**
   * @remarks
   * The request ID for creating the media transcoding job.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the media transcoding job. Valid values:
   * - Inited: Initialized.
   * - Running: Running.
   * - Complete: Transcoding completed.
   * - Error: Transcoding error.
   * - Cancelled: Canceled.
   * 
   * @example
   * Complete
   */
  state?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"videoId":"ddd333"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      config: 'Config',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      jobId: 'JobId',
      message: 'Message',
      outputDetails: 'OutputDetails',
      outputGroupDetails: 'OutputGroupDetails',
      percent: 'Percent',
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      config: GetMediaConvertJobResponseBodyJobConfig,
      createTime: 'string',
      finishTime: 'string',
      jobId: 'string',
      message: 'string',
      outputDetails: { 'type': 'array', 'itemType': MediaConvertOutputDetail },
      outputGroupDetails: { 'type': 'array', 'itemType': MediaConvertOutputGroupDetail },
      percent: 'number',
      pipelineId: 'string',
      requestId: 'string',
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.outputDetails)) {
      $dara.Model.validateArray(this.outputDetails);
    }
    if(Array.isArray(this.outputGroupDetails)) {
      $dara.Model.validateArray(this.outputGroupDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaConvertJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media transcoding job.
   */
  job?: GetMediaConvertJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4BAEA8E8-1C16-5CD3-AC50-CCBA81A53402
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
      job: GetMediaConvertJobResponseBodyJob,
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

