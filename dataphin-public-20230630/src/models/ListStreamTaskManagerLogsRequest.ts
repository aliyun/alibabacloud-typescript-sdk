// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamTaskManagerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment instance ID. Set this parameter to the deploymentInstanceId value returned in the operation record or historical running instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
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
   * The user ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The ID of the Dataphin project to which the node belongs. This parameter is used for permission verification in the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  /**
   * @remarks
   * The identifier of the TaskManager. Set this parameter to the taskmanagerId value returned by the ListStreamTaskManagers operation.
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

