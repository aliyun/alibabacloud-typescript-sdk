// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertJobWithoutDetailConfig } from "./MediaConvertJobWithoutDetailConfig";


export class MediaConvertJobWithoutDetail extends $dara.Model {
  clientToken?: string;
  code?: string;
  config?: MediaConvertJobWithoutDetailConfig;
  createTime?: string;
  finishTime?: string;
  jobId?: string;
  message?: string;
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

