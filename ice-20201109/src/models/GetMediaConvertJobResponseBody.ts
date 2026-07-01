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
   * The job inputs.
   */
  inputs?: MediaConvertInput[];
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job-1-20241205-102045
   */
  jobName?: string;
  /**
   * @remarks
   * The job output group configurations.
   */
  outputGroups?: MediaConvertOutputGroup[];
  /**
   * @remarks
   * The job output configurations.
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
   * The idempotency parameter for the job creation request.
   * 
   * @example
   * 780018cb-55ba-466d-8acc-946c0c319a0e
   */
  clientToken?: string;
  /**
   * @remarks
   * The error code if the job fails.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The job configuration.
   */
  config?: GetMediaConvertJobResponseBodyJobConfig;
  /**
   * @remarks
   * The time when the job was created, in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job finished, in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The job ID. This is a 32-character string.
   * 
   * @example
   * ******4579b5e748b99a27f6d6******
   */
  jobId?: string;
  /**
   * @remarks
   * The error message detailing the failure.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The execution results of the outputs specified in the job configuration.
   */
  outputDetails?: MediaConvertOutputDetail[];
  /**
   * @remarks
   * The execution results of the output groups specified in the job configuration.
   */
  outputGroupDetails?: MediaConvertOutputGroupDetail[];
  /**
   * @remarks
   * The completion percentage.
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
   * The ID of the job creation request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * - Inited: The job is initialized.
   * 
   * - Running: The job is in progress.
   * 
   * - Complete: The job finished successfully.
   * 
   * - Error: The job failed.
   * 
   * - Cancelled: The job was cancelled.
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

