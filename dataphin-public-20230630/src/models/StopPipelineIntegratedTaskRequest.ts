// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopPipelineIntegratedTaskRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values: DEV: development environment. PROD: production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
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

export class StopPipelineIntegratedTaskRequestStopCommand extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs of the incremental instances to stop.
   * 
   * This parameter is required.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelineIntegratedTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: StopPipelineIntegratedTaskRequestContext;
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
   * 30121101
   */
  opUserId?: string;
  /**
   * @remarks
   * The stop parameters.
   * 
   * This parameter is required.
   */
  stopCommand?: StopPipelineIntegratedTaskRequestStopCommand;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      stopCommand: 'StopCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: StopPipelineIntegratedTaskRequestContext,
      opTenantId: 'number',
      opUserId: 'string',
      stopCommand: StopPipelineIntegratedTaskRequestStopCommand,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.stopCommand && typeof (this.stopCommand as any).validate === 'function') {
      (this.stopCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

