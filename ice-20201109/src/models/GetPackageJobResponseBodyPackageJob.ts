// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPackageJobResponseBodyPackageJobInputs } from "./GetPackageJobResponseBodyPackageJobInputs";
import { GetPackageJobResponseBodyPackageJobOutput } from "./GetPackageJobResponseBodyPackageJobOutput";


export class GetPackageJobResponseBodyPackageJob extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:34:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the job was complete. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:44:05Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the job.
   */
  inputs?: GetPackageJobResponseBodyPackageJobInputs[];
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  jobId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * Resource content bad.
   */
  message?: string;
  /**
   * @remarks
   * The time when the job was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:44:05Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The output of the job.
   */
  output?: GetPackageJobResponseBodyPackageJobOutput;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/output.m3u8
   */
  outputUrl?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * 36f3fee40aa047c0b067d0fb85edc12b
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 10. The greater the value, the higher the priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The state of the job.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T11:34:05Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The source of the job. Valid values:
   * 
   * *   API
   * *   WorkFlow
   * *   Console
   * 
   * @example
   * API
   */
  triggerSource?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"param": "value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      inputs: 'Inputs',
      jobId: 'JobId',
      message: 'Message',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      output: 'Output',
      outputUrl: 'OutputUrl',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      status: 'Status',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      inputs: { 'type': 'array', 'itemType': GetPackageJobResponseBodyPackageJobInputs },
      jobId: 'string',
      message: 'string',
      modifiedTime: 'string',
      name: 'string',
      output: GetPackageJobResponseBodyPackageJobOutput,
      outputUrl: 'string',
      pipelineId: 'string',
      priority: 'number',
      status: 'string',
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputs)) {
      $dara.Model.validateArray(this.inputs);
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

