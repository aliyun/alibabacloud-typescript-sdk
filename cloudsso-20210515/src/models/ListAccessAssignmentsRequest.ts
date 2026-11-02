// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessAssignmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration. This parameter is used as a filter condition for the query.
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
   * The maximum number of entries to return on each page.
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
   * The token for the next page of query results. You do not need to specify `NextToken` when you call this operation for the first time.
   * 
   * When you call this operation for the first time, if the total number of returned entries exceeds the value of `MaxResults`, the returned entries are truncated. Only the number of entries specified by `MaxResults` is returned, the `IsTruncated` parameter is set to `true`, and a `NextToken` value is returned. You can use the returned `NextToken` value to call this operation again to query the truncated entries while keeping other request parameters unchanged. You can repeat this process until `IsTruncated` is set to `false`, which indicates that all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
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
   * The ID of the CloudSSO identity, which is used as a filter condition for the query. Details:
   * 
   * - If `PrincipalType` is set to User, `PrincipalId` is the ID of the CloudSSO user.
   * - If `PrincipalType` is set to Group, `PrincipalId` is the ID of the CloudSSO group.
   * 
   * > You must specify both `PrincipalId` and `PrincipalType` for the filter condition to take effect.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity, which is used as a filter condition for the query. Valid values:
   * 
   * - User: user.
   * - Group: group.
   * 
   * > You must specify both `PrincipalId` and `PrincipalType` for the filter condition to take effect.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the task target, which is used as a filter condition for the query.
   * 
   * > You must specify both `TargetId` and `TargetType` for the filter condition to take effect.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task target, which is used as a filter condition for the query.
   * 
   * Valid values:
   * - RD-Account: The task target is an account in a resource directory.
   * 
   * > You must specify both `TargetId` and `TargetType` for the filter condition to take effect.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      originTargetId: 'OriginTargetId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      originTargetId: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
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

