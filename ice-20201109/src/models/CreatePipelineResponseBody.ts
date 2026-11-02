// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline was created. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the pipeline was last modified. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T16:17:54Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The name of the pipeline.
   * 
   * @example
   * test-pipeline
   */
  name?: string;
  /**
   * @remarks
   * The ID of the pipeline.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the pipeline.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The type of the pipeline.
   * 
   * @example
   * Standard
   */
  speed?: string;
  /**
   * @remarks
   * The status of the pipeline.
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

