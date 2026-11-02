// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksRequest extends $dara.Model {
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
   * The filter condition.
   * 
   * Format: <Attribute> <Operator> <Value>. The format is not case-sensitive. <Attribute> only supports StartTime. <Operator> only supports ge (greater than or equal to). <Value> must be in the YYYY-MM-DDTHH:mm:ssZ format and can only be a time within the last 7 days.
   * 
   * Example: Filter = "StartTime ge 2021-03-15T01:12:23Z". This example queries the list of tasks starting from 2021-03-15T01:12:23Z.
   * 
   * > If you do not specify this parameter, the list of tasks created within the last 24 hours is returned by default.
   * 
   * @example
   * StartTime ge 2021-03-15T01:12:23Z
   */
  filter?: string;
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
   * The token used to return the next page of the query results. You do not need to specify NextToken when you call this operation for the first time.
   * 
   * When you call this operation for the first time, if the total number of returned entries exceeds the value of MaxResults, the returned data is truncated. Only the number of entries specified by MaxResults is returned, the IsTruncated response parameter is set to true, and a NextToken value is returned. You can use the returned NextToken value to call this operation again while keeping other request parameters unchanged to query the truncated data. You can repeat this process until IsTruncated is set to false, which indicates that all data is returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the CloudSSO identity. This parameter is used as a filter condition for the query. Details:
   * 
   * - If PrincipalType is set to User, PrincipalId is the ID of the CloudSSO user.
   * - If PrincipalType is set to Group, PrincipalId is the ID of the CloudSSO group.
   * 
   * > PrincipalId and PrincipalType must be specified at the same time to serve as a valid filter condition.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The type of the CloudSSO identity. This parameter is used as a filter condition for the query. Valid values:
   * 
   * - User: The CloudSSO user.
   * - Group: The CloudSSO group.
   * 
   * > PrincipalId and PrincipalType must be specified at the same time to serve as a valid filter condition.
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The status of the task. This parameter is used as a filter condition for the query. Valid values:
   * 
   * - InProgress: The task is running.
   * - Success: The task succeeded.
   * - Failed: The task failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task target. This parameter is used as a filter condition for the query.
   * 
   * > TargetId and TargetType must be specified at the same time to serve as a valid filter condition.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the task target. This parameter is used as a filter condition for the query. Valid values:
   * 
   * - RD-Account: The task target is an account in a resource directory.
   * 
   * > TargetId and TargetType must be specified at the same time to serve as a valid filter condition.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the node. This parameter is used as a filter condition for the query. Valid values:
   * 
   * - ProvisionAccessConfiguration: Access configuration deployment.
   * - DeprovisionAccessConfiguration: Removes access configuration provisioning.
   * - CreateAccessAssignment: Grants authorization to an account in a resource directory.
   * - DeleteAccessAssignment: Removes authorization from an account in a resource directory.
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

