// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo extends $dara.Model {
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * test
   */
  directory?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  fileInfo?: CreatePipelineNodeRequestCreatePipelineNodeCommandFileInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REAL_TIME
   */
  nodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REAL_TIME_PIPELINE
   */
  pipelineType?: string;
  /**
   * @remarks
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
   * This parameter is required.
   */
  createPipelineNodeCommand?: CreatePipelineNodeRequestCreatePipelineNodeCommand;
  /**
   * @remarks
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

