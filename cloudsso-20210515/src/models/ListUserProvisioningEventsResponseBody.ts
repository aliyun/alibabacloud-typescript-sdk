// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserProvisioningEventsResponseBodyUserProvisioningEvents extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:55Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deletion policy. The policy is used to manage synchronized users when you delete the RAM user provisioning. Valid values:
   * 
   * - Delete: When you delete the RAM user provisioning, the system deletes the synchronized users.
   * 
   * - Keep: When you delete the RAM user provisioning, the system retains the synchronized users.
   * 
   * @example
   * Keep
   */
  deletionStrategy?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * - KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * 
   * - TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
  /**
   * @remarks
   * The number of execution failures.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The error message that is displayed when the last execution of the RAM user provisioning event failed.
   * 
   * @example
   * OperationConflict.UserProvisioning.Process.fail.ImsUserExists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  /**
   * @remarks
   * The time at which the RAM user provisioning event was last executed. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:55Z
   */
  latestAsyncTime?: string;
  /**
   * @remarks
   * The identity ID of the RAM user provisioning. Valid values:
   * 
   * - If you set the `PrincipalType` parameter to `Group`, the value of this parameter is the ID of a CloudSSO user group (g-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * - If you set the `PrincipalType` parameter to `User`, the value of this parameter is the ID of a CloudSSO user (u-\\*\\*\\*\\*\\*\\*\\*\\*).
   * 
   * @example
   * g-02ha881d*****
   */
  principalId?: string;
  /**
   * @remarks
   * The identity name of the RAM user provisioning. Valid values:
   * 
   * - If `Group` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user group.
   * 
   * - If `User` is returned for the `PrincipalType` parameter, the value of this parameter is the name of a CloudSSO user.
   * 
   * @example
   * exampleGroupName
   */
  principalName?: string;
  /**
   * @remarks
   * The identity type of the RAM user provisioning. Valid values:
   * 
   * - User: The identity of the RAM user provisioning is a CloudSSO user.
   * 
   * - Group: The identity of the RAM user provisioning is a CloudSSO user group.
   * 
   * @example
   * Group
   */
  principalType?: string;
  /**
   * @remarks
   * The type of the source operation. Valid values:
   * 
   * - StartProvisioning: enables the RAM user provisioning.
   * 
   * - DeleteProvisioning: deletes the RAM user provisioning.
   * 
   * - AddUserToGroup: adds a user to a user group.
   * 
   * - RemoveUserFromGroup: removes a user from a user group.
   * 
   * - UserProvisioningDeletionClearing: deletes the RAM user provisioning and clears resources in the background.
   * 
   * @example
   * StartProvisioning
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the object for which you create the RAM user provisioning.
   * 
   * The value is fixed as the ID of the account in the resource directory.\\`\\`\\`\\`
   * 
   * @example
   * 153218*******
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the object for which you create the RAM user provisioning.
   * 
   * If `RD-Account` is returned, the value of this parameter is the name of the account that is used to access the instance.\\`\\`
   * 
   * @example
   * exampleRdMember
   */
  targetName?: string;
  /**
   * @remarks
   * The path of the resource directory in which you create the RAM user provisioning for the member.
   */
  targetPath?: string;
  /**
   * @remarks
   * The object for which you create the RAM user provisioning. The value is fixed as `RD-Account`.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-28T03:55:55Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionStrategy: 'DeletionStrategy',
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      errorCount: 'ErrorCount',
      errorInfo: 'ErrorInfo',
      eventId: 'EventId',
      latestAsyncTime: 'LatestAsyncTime',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionStrategy: 'string',
      directoryId: 'string',
      duplicationStrategy: 'string',
      errorCount: 'number',
      errorInfo: 'string',
      eventId: 'string',
      latestAsyncTime: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      sourceType: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetType: 'string',
      updateTime: 'string',
      userProvisioningId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserProvisioningEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to initiate the next request.
   * 
   * > This parameter is returned only when the `IsTruncated` parameter is set to `true`.
   * 
   * @example
   * 2eEMmhmLa1b7Bbj9UzCgZUGj8DpDeG5TbNknuNKNP2h84KjJRnAb7vzzSDkYNmsidnAybyJYBfnPPB6xfgw54B1Wub2KQmC8LofzqBW2Y****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D85B43D-EF98-396D-B426-837E428D2D39
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 110
   */
  totalCounts?: number;
  /**
   * @remarks
   * The RAM user provisioning events.
   */
  userProvisioningEvents?: ListUserProvisioningEventsResponseBodyUserProvisioningEvents[];
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
      userProvisioningEvents: 'UserProvisioningEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
      userProvisioningEvents: { 'type': 'array', 'itemType': ListUserProvisioningEventsResponseBodyUserProvisioningEvents },
    };
  }

  validate() {
    if(Array.isArray(this.userProvisioningEvents)) {
      $dara.Model.validateArray(this.userProvisioningEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

