// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResponseBodyTask extends $dara.Model {
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
   * @remarks
   * The end time of the task. The time is in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2021-11-05T02:58:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The reason why the task failed.
   * 
   * > This parameter is returned only when `Status` is `Failed`.
   * 
   * @example
   * No Permission.
   */
  failureReason?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the target belongs.
   * 
   * @example
   * 17xxxxxxxxxxxx73
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
   * The CloudSSO identity type. Valid values:
   * 
   * - User: user.
   * - Group: user group.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The start time of the task. The time is in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2021-11-05T02:58:07Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - InProgress: The task is in progress.
   * - Success: The task succeeded.
   * - Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task target.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task target.
   * 
   * @example
   * dev-test
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task target in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task target in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The task target type. Valid values: RD-Account, which indicates that the task target is an account in a resource directory.
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
   * The task type. Valid values:
   * 
   * - ProvisionAccessConfiguration: Deploys the access configuration.
   * - DeprovisionAccessConfiguration: Removes the access configuration deployment.
   * - CreateAccessAssignment: Grants authorization to an account in a resource directory.
   * - DeleteAccessAssignment: Revokes authorization from an account in a resource directory.
   * 
   * @example
   * DeleteAccessAssignment
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      endTime: 'EndTime',
      failureReason: 'FailureReason',
      originTargetId: 'OriginTargetId',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      startTime: 'StartTime',
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
      endTime: 'string',
      failureReason: 'string',
      originTargetId: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      startTime: 'string',
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

export class GetTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 923CA5E8-57BF-5E15-8BA6-E75A966B7E3F
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
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

