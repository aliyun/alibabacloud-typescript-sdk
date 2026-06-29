// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo extends $dara.Model {
  /**
   * @remarks
   * The file description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The full path of the parent directory of the file. If this parameter is left empty, the root path (/) is used.
   * 
   * @example
   * test
   */
  directory?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_pipeline
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      directory: 'Directory',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directory: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeRequestCreatePipelineNodeCommand extends $dara.Model {
  /**
   * @remarks
   * The task file information.
   * 
   * This parameter is required.
   */
  fileInfo?: CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo;
  /**
   * @remarks
   * The node type. Valid values: NORMAL, MANUAL, and REAL_TIME.
   * 
   * This parameter is required.
   * 
   * @example
   * REAL_TIME
   */
  nodeType?: string;
  /**
   * @remarks
   * The pipeline name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The pipeline type. Valid values: OFFLINE_PIPELINE and REAL_TIME_PIPELINE.
   * 
   * This parameter is required.
   * 
   * @example
   * REAL_TIME_PIPELINE
   */
  pipelineType?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7091124176569088
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'FileInfo',
      nodeType: 'NodeType',
      pipelineName: 'PipelineName',
      pipelineType: 'PipelineType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo,
      nodeType: 'string',
      pipelineName: 'string',
      pipelineType: 'string',
      projectId: 'number',
    };
  }

  validate() {
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The command to create a pipeline. Both offline and real-time pipelines are supported.
   * 
   * This parameter is required.
   */
  createPipelineNodeCommand?: CreatePipelineNodeRequestCreatePipelineNodeCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createPipelineNodeCommand: 'CreatePipelineNodeCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createPipelineNodeCommand: CreatePipelineNodeRequestCreatePipelineNodeCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createPipelineNodeCommand && typeof (this.createPipelineNodeCommand as any).validate === 'function') {
      (this.createPipelineNodeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

