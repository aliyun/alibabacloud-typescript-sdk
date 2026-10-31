// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamLogContentRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment instance ID. Obtain the value from the deploymentInstanceId parameter returned in the operation record or historical running instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7db678957dc449aab0086b931c9f8218
   */
  deploymentInstanceId?: string;
  /**
   * @remarks
   * The original name of the log file. Obtain the value from the logName parameter in the corresponding JobManager or TaskManager log file list. Pass the value as is.
   * 
   * This parameter is required.
   * 
   * @example
   * flink--standalonesession-0-dataphin-session-7db678957dc449aab0086b931c9f8218-jobmanager.log
   */
  logName?: string;
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
   * The ID of the Dataphin project to which the task belongs. This parameter is used for permission verification in the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 7299592831043008
   */
  projectId?: number;
  /**
   * @remarks
   * The optional ID of the TaskManager. Obtain the value from the taskmanagerId parameter returned by the ListStreamTaskManagers operation. If this parameter is not specified or is empty, the JobManager logs are retrieved.
   * 
   * @example
   * dataphin-session-7db678957dc449aab0086b931c9f8218-taskmanazjkxq
   */
  taskmanagerId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentInstanceId: 'DeploymentInstanceId',
      logName: 'LogName',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      taskmanagerId: 'TaskmanagerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentInstanceId: 'string',
      logName: 'string',
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

