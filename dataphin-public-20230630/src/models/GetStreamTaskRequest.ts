// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The environment to query. Valid values: DEV for the development environment, and PROD for the production environment. If this parameter is not specified, the gateway defaults to PROD. The value is case-insensitive.
   * 
   * @example
   * PROD
   */
  env?: string;
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
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The ID of the Dataphin project to which the task belongs. This parameter is used for project permission verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  /**
   * @remarks
   * Instance ID of the real-time task instance. Instance ID starts with t_ and is not a node ID or a file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * t_8442437168737681408_20261014_8442447717177229312
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

