// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineByIdRequestContext extends $dara.Model {
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
   * The ID of the project to which the integration pipeline task belongs.
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

export class GetPipelineByIdRequestQueryId extends $dara.Model {
  /**
   * @remarks
   * Supports querying by the integration task file ID (fileId).
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * Supports querying by the integration task scheduling node ID (nodeId).
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * Supports querying by the integration pipeline primary key (pipelineId).
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      nodeId: 'NodeId',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetPipelineByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: GetPipelineByIdRequestContext;
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
  /**
   * @remarks
   * The ID used to query the pipeline task.
   * 
   * This parameter is required.
   */
  queryId?: GetPipelineByIdRequestQueryId;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: GetPipelineByIdRequestContext,
      opTenantId: 'number',
      queryId: GetPipelineByIdRequestQueryId,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.queryId && typeof (this.queryId as any).validate === 'function') {
      (this.queryId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

