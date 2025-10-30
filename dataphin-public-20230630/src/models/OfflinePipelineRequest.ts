// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflinePipelineRequestContext extends $dara.Model {
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

export class OfflinePipelineRequestOfflineCommand extends $dara.Model {
  /**
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  delete?: boolean;
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
   * This parameter is required.
   */
  context?: OfflinePipelineRequestContext;
  /**
   * @remarks
   * This parameter is required.
   */
  offlineCommand?: OfflinePipelineRequestOfflineCommand;
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

