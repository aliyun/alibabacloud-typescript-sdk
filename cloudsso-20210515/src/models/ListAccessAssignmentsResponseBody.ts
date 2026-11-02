// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessAssignmentsResponseBodyAccessAssignments extends $dara.Model {
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
   * The time when the access assignment was successful. The time follows the RFC 3339 standard and is displayed in UTC in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2021-11-04T10:03:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the authorization target belongs.
   * 
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
   * - User: user.
   * - Group: group.
   * 
   * @example
   * User
   */
  principalType?: string;
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
   * The type of the task target.
   * 
   * Valid values:
   * - RD-Account: The task target is an account in a resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      originTargetId: 'OriginTargetId',
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      originTargetId: 'string',
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessAssignmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of access assignments.
   */
  accessAssignments?: ListAccessAssignmentsResponseBodyAccessAssignments[];
  /**
   * @remarks
   * Indicates whether the returned result is truncated. Valid values:
   * 
   * - true: The result is truncated.
   * - false: The result is not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of query results.
   * 
   * > This parameter is returned only when `IsTruncated` is set to `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66898413-EB80-556D-9429-06FE3548F672
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the filter conditions specified in the request parameters.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessAssignments: 'AccessAssignments',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAssignments: { 'type': 'array', 'itemType': ListAccessAssignmentsResponseBodyAccessAssignments },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessAssignments)) {
      $dara.Model.validateArray(this.accessAssignments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

