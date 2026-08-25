// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProvisionAccessConfigurationResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @example
   * 114240524784****
   */
  originTargetId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - InProgress: The task is running.
   * 
   * - Success: The task is successful.
   * 
   * - Failed: The task failed.
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object. The value is fixed as RD-Account, which indicates the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-shqlhd8uvt280rtm****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as ProvisionAccessConfiguration, which indicates that an access configuration is provisioned.
   * 
   * @example
   * ProvisionAccessConfiguration
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      originTargetId: 'OriginTargetId',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      originTargetId: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DFDC16B2-4509-5FA6-9FA5-3CD35E4292FB
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  tasks?: ProvisionAccessConfigurationResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ProvisionAccessConfigurationResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

