// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertInput } from "./MediaConvertInput";
import { MediaConvertOutputGroup } from "./MediaConvertOutputGroup";
import { MediaConvertOutput } from "./MediaConvertOutput";


export class MediaConvertJobWithoutDetailConfig extends $dara.Model {
  /**
   * @remarks
   * The input files for the task.
   */
  inputs?: MediaConvertInput[];
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Name
   */
  jobName?: string;
  /**
   * @remarks
   * The output groups.
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

export class MediaConvertJobWithoutDetail extends $dara.Model {
  /**
   * @remarks
   * The idempotency token provided during the task creation request.
   * 
   * @example
   * ****12e8864746a0a398****
   */
  clientToken?: string;
  /**
   * @remarks
   * The error code for a failed task.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The task configuration.
   */
  config?: MediaConvertJobWithoutDetailConfig;
  /**
   * @remarks
   * The time the task was created, in UTC format (*yyyy-MM-dd*T*HH:mm:ss*Z).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the task finished processing, in UTC format (*yyyy-MM-dd*T*HH:mm:ss*Z).
   * 
   * @example
   * 2024-12-07T13:01:07Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The reason for a task failure.
   * 
   * @example
   * The resource operated "%s" cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The ID of the queue on which this task was processed.
   * 
   * @example
   * 688c2a8bfa4e44ddbba0c8730db91b0c
   */
  pipelineId?: string;
  /**
   * @remarks
   * The ID of the API request that created this task.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * *   Inited: The task is initialized.
   * *   Running
   * *   Complete
   * *   Error
   * *   Cancelled
   * 
   * @example
   * Inited
   */
  state?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * {"info": "xxx"}
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
      config: MediaConvertJobWithoutDetailConfig,
      createTime: 'string',
      finishTime: 'string',
      jobId: 'string',
      message: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

