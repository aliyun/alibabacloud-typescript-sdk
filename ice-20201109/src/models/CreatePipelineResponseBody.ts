// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline was created.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the pipeline was last modified.
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The pipeline priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The pipeline type.
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The pipeline status.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      pipelineId: 'PipelineId',
      priority: 'Priority',
      speed: 'Speed',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      pipelineId: 'string',
      priority: 'number',
      speed: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pipeline information.
   */
  pipeline?: CreatePipelineResponseBodyPipeline;
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
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: CreatePipelineResponseBodyPipeline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

