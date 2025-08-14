// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";
import { MediaConvertOutputGroupDetail } from "./MediaConvertOutputGroupDetail";
import { MediaConvertInput } from "./MediaConvertInput";
import { MediaConvertOutputGroup } from "./MediaConvertOutputGroup";
import { MediaConvertOutput } from "./MediaConvertOutput";


export class MediaConvertJobConfig extends $dara.Model {
  inputs?: MediaConvertInput[];
  jobName?: string;
  outputGroups?: MediaConvertOutputGroup[];
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

export class MediaConvertJob extends $dara.Model {
  clientToken?: string;
  code?: string;
  config?: MediaConvertJobConfig;
  createTime?: string;
  finishTime?: string;
  jobId?: string;
  message?: string;
  outputDetails?: MediaConvertOutputDetail[];
  outputGroupDetails?: MediaConvertOutputGroupDetail[];
  percent?: number;
  pipelineId?: string;
  requestId?: string;
  state?: string;
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
      config: MediaConvertJobConfig,
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

