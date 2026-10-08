// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPipelineIntegratedTaskRequestContext extends $dara.Model {
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
   * 1234567890
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

export class StartPipelineIntegratedTaskRequestStartCommand extends $dara.Model {
  /**
   * @example
   * 10
   */
  byteSpeed?: number;
  /**
   * @example
   * 2026-09-22 15:28:31
   */
  checkpoint?: string;
  /**
   * @example
   * 10
   */
  concurrent?: number;
  /**
   * @example
   * RELAY
   */
  fullTaskMode?: string;
  /**
   * @example
   * t_1234567890_123123
   */
  incrementalTaskId?: string;
  /**
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @example
   * n_1234567890
   */
  nodeId?: string;
  /**
   * @example
   * default
   */
  quotaGroupId?: string;
  /**
   * @example
   * DI_DF
   */
  syncMode?: string;
  static names(): { [key: string]: string } {
    return {
      byteSpeed: 'ByteSpeed',
      checkpoint: 'Checkpoint',
      concurrent: 'Concurrent',
      fullTaskMode: 'FullTaskMode',
      incrementalTaskId: 'IncrementalTaskId',
      memory: 'Memory',
      nodeId: 'NodeId',
      quotaGroupId: 'QuotaGroupId',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteSpeed: 'number',
      checkpoint: 'string',
      concurrent: 'number',
      fullTaskMode: 'string',
      incrementalTaskId: 'string',
      memory: 'number',
      nodeId: 'string',
      quotaGroupId: 'string',
      syncMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPipelineIntegratedTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  context?: StartPipelineIntegratedTaskRequestContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30110121
   */
  opUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startCommand?: StartPipelineIntegratedTaskRequestStartCommand;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      startCommand: 'StartCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: StartPipelineIntegratedTaskRequestContext,
      opTenantId: 'number',
      opUserId: 'string',
      startCommand: StartPipelineIntegratedTaskRequestStartCommand,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.startCommand && typeof (this.startCommand as any).validate === 'function') {
      (this.startCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

