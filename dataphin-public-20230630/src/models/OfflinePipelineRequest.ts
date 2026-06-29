// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflinePipelineRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * - DEV: the development environment.
   * - PROD: the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflinePipelineRequestOfflineCommand extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to delete the node.
   * 
   * This parameter is required.
   */
  delete?: boolean;
  /**
   * @remarks
   * The file ID of the integration node. You can specify any one of PipelineId, FileId, or NodeId.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The scheduling node ID of the integration node. You can specify any one of PipelineId, FileId, or NodeId.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The primary key of the integration pipeline. You can specify any one of PipelineId, FileId, or NodeId.
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      delete: 'Delete',
      fileId: 'FileId',
      nodeId: 'NodeId',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      delete: 'boolean',
      fileId: 'number',
      nodeId: 'string',
      pipelineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflinePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: OfflinePipelineRequestContext;
  /**
   * @remarks
   * The offline command for the pipeline node.
   * 
   * This parameter is required.
   */
  offlineCommand?: OfflinePipelineRequestOfflineCommand;
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
      context: 'Context',
      offlineCommand: 'OfflineCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: OfflinePipelineRequestContext,
      offlineCommand: OfflinePipelineRequestOfflineCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.offlineCommand && typeof (this.offlineCommand as any).validate === 'function') {
      (this.offlineCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

