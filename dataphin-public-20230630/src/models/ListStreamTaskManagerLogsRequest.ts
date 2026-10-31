// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamTaskManagerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Flink deployment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
  /**
   * @remarks
   * The ID of the operating tenant. The gateway verifies that the current identity has access to the tenant and then injects the TenantId into the backend.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The optional ID of the operator. This parameter follows the gateway identity verification rules and is not directly bound to the backend UserId.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  /**
   * @remarks
   * The TaskManager ID. This parameter can be omitted when retrieving log content. If omitted, the JobManager logs are returned.
   * 
   * This parameter is required.
   * 
   * @example
   * dataphin-session-7db678957dc449aab0086b931c9f8218-taskmanazjkxq
   */
  taskmanagerId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentInstanceId: 'DeploymentInstanceId',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      taskmanagerId: 'TaskmanagerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentInstanceId: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
      taskmanagerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

