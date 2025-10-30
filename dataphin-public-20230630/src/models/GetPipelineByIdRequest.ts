// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineByIdRequestContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
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
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @example
   * n_123
   */
  nodeId?: string;
  /**
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
   * This parameter is required.
   */
  context?: GetPipelineByIdRequestContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

