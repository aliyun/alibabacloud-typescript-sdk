// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration. The ID can be used to filter access permissions.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * The condition is not case-sensitive. The condition must be in the StartTime ge YYYY-MM-DDTHH:mm:SSZ format. You must set YYYY-MM-DDTHH:mm:SSZ to a value that is no more than 7 days from the current time. ge indicates Greater Than or Equals.
   * 
   * For example, if you set the Filter parameter to StartTime ge 2021-03-15T01:12:23Z, the operation queries the tasks from 2021-03-15T01:12:23 GMT.
   * 
   * >  If you do not specify this parameter, the operation queries the tasks within the previous 24 hours by default.
   * 
   * @example
   * StartTime ge 2021-03-15T01:12:23Z
   */
  filter?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 20.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If this is your first time to call this operation, you do not need to specify the `NextToken` parameter.
   * 
   * When you call this operation for the first time, if the total number of entries to return exceeds the value of `MaxResults`, the entries are truncated. Only the entries that match the value of `MaxResults` are returned, and the excess entries are not returned. In this case, the value of the response parameter `IsTruncated` is `true`, and `NextToken` is returned. In the next call, you can use the value of `NextToken` and maintain the settings of the other request parameters to query the excess entries. You can repeat the call until the value of `IsTruncated` becomes `false`. This way, all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity. The ID can be used to filter access permissions.
   * 
   * *   If you set `PrincipalType` to `User`, set `PrincipalId` to the ID of the CloudSSO user.
   * *   If you set `PrincipalType` to `Group`, set `PrincipalId` to the ID of the CloudSSO group.
   * 
   * >  You can use the type to filter access permissions only if you specify both `PrincipalId` and `PrincipalType`.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. The type can be used to filter access permissions. Valid values:
   * 
   * *   User
   * *   Group
   * 
   * >  You can use the type to filter access permissions only if you specify both `PrincipalId` and `PrincipalType`.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task. The ID can be used to filter tasks. Valid values:
   * 
   * *   InProgress: The task is running.
   * *   Success: The task is successful.
   * *   Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object. The ID can be used to filter access permissions.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task object. The type can be used to filter access permissions.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * >  You can use the type to filter access permissions only if you specify both `TargetId` and `TargetType`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the task. The type can be used to filter tasks. Valid values:
   * 
   * *   ProvisionAccessConfiguration: An access configuration is provisioned.
   * *   DeprovisionAccessConfiguration: An access configuration is de-provisioned.
   * *   CreateAccessAssignment: Access permissions on an account in the resource directory are assigned.
   * *   DeleteAccessAssignment: Access permissions on an account in the resource directory are removed.
   * 
   * @example
   * CreateAccessAssignment
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      status: 'Status',
      targetId: 'TargetId',
      targetType: 'TargetType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      principalId: 'string',
      principalType: 'string',
      status: 'string',
      targetId: 'string',
      targetType: 'string',
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

