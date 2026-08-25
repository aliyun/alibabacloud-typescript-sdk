// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessAssignmentResponseBodyTask extends $dara.Model {
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
   * The ID of the CloudSSO identity.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The name of the CloudSSO identity.
   * 
   * @example
   * Alice
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. Valid values:
   * 
   * - User
   * 
   * - Group
   * 
   * @example
   * User
   */
  principalType?: string;
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
   * t-shfqw1u1edszvxw5****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as DeleteAccessAssignment, which indicates that access permissions on an account in your resource directory are removed.
   * 
   * @example
   * DeleteAccessAssignment
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      originTargetId: 'OriginTargetId',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
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
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
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

export class DeleteAccessAssignmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C9D0CF4-5CE8-5CE6-932A-826EF4ADD007
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  task?: DeleteAccessAssignmentResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: DeleteAccessAssignmentResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

