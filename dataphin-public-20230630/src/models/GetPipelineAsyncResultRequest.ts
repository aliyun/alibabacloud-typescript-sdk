// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineAsyncResultRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operation environment. Valid values:
   * - DEV: development environment.
   * - PROD: production environment.
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

export class GetPipelineAsyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * The asynchronous execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  asyncId?: number;
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: GetPipelineAsyncResultRequestContext;
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
      asyncId: 'AsyncId',
      context: 'Context',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncId: 'number',
      context: GetPipelineAsyncResultRequestContext,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

