// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPipelineIntegratedTaskRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * - DEV: Development environment.
   * - PROD: Production environment.
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
   * @remarks
   * The bandwidth limit for the offline full task. Unit: MB/s.
   * 
   * @example
   * 10
   */
  byteSpeed?: number;
  /**
   * @remarks
   * The specified time checkpoint for starting in pure incremental mode.
   * 
   * @example
   * 2026-09-22 15:28:31
   */
  checkpoint?: string;
  /**
   * @remarks
   * The concurrency for the offline full task.
   * 
   * @example
   * 10
   */
  concurrent?: number;
  /**
   * @remarks
   * The startup mode for the full table task. Valid values:
   * - INIT
   * - RELAY
   * 
   * @example
   * RELAY
   */
  fullTaskMode?: string;
  /**
   * @remarks
   * The incremental instance ID required when restarting the instance.
   * 
   * @example
   * t_1234567890_123123
   */
  incrementalTaskId?: string;
  /**
   * @remarks
   * The memory for the offline full task. Unit: MB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the real-time node required when starting from a node.
   * 
   * @example
   * n_1234567890
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the resource group used by the full table instance.
   * 
   * @example
   * default
   */
  quotaGroupId?: string;
  /**
   * @remarks
   * The synchronization mode. Valid values:
   * - DI_DF
   * - DI
   * 
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
   * The request context.
   * 
   * This parameter is required.
   */
  context?: StartPipelineIntegratedTaskRequestContext;
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
   * The ID of the operator.
   * 
   * @example
   * 30110121
   */
  opUserId?: string;
  /**
   * @remarks
   * The startup parameters.
   * 
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

