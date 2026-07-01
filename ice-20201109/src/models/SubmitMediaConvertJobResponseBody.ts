// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";
import { MediaConvertOutputGroupDetail } from "./MediaConvertOutputGroupDetail";
import { MediaConvertInput } from "./MediaConvertInput";
import { MediaConvertOutputGroup } from "./MediaConvertOutputGroup";
import { MediaConvertOutput } from "./MediaConvertOutput";


export class SubmitMediaConvertJobResponseBodyJobConfig extends $dara.Model {
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
   * Name
   */
  jobName?: string;
  /**
   * @remarks
   * The output group configurations.
   */
  outputGroups?: MediaConvertOutputGroup[];
  /**
   * @remarks
   * The output configurations.
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

export class SubmitMediaConvertJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The idempotency token for the request.
   * 
   * @example
   * FB7F25E9-AD9B-1603-8AF6-F1E42DF2E706
   */
  clientToken?: string;
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The job configuration.
   */
  config?: SubmitMediaConvertJobResponseBodyJobConfig;
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
   * The error message returned if the job fails.
   * 
   * @example
   * The resource operated InputFile is bad
   */
  message?: string;
  /**
   * @remarks
   * The output details.
   */
  outputDetails?: MediaConvertOutputDetail[];
  /**
   * @remarks
   * The output group details.
   */
  outputGroupDetails?: MediaConvertOutputGroupDetail[];
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ***48a4edf410b908aecd91fc3b***
   */
  pipelineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2129C9F-CE95-58B5-B8C1-07758FF6C86F
   */
  requestId?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Inited: The job has been initialized.
   * 
   * - Running: The job is running.
   * 
   * - Success: The job has completed successfully.
   * 
   * - Failed: The job has failed.
   * 
   * - Canceled: The job has been canceled.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {"videoId":"abcd"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      config: 'Config',
      jobId: 'JobId',
      message: 'Message',
      outputDetails: 'OutputDetails',
      outputGroupDetails: 'OutputGroupDetails',
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
      config: SubmitMediaConvertJobResponseBodyJobConfig,
      jobId: 'string',
      message: 'string',
      outputDetails: { 'type': 'array', 'itemType': MediaConvertOutputDetail },
      outputGroupDetails: { 'type': 'array', 'itemType': MediaConvertOutputGroupDetail },
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

export class SubmitMediaConvertJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media transcoding job.
   */
  job?: SubmitMediaConvertJobResponseBodyJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      job: SubmitMediaConvertJobResponseBodyJob,
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

