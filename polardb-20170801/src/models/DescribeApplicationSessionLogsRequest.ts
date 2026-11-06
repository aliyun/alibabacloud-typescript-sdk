// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationSessionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name. This parameter must be specified together with the SessionId parameter, or neither is specified.
   * 
   * @example
   * test-agent
   */
  agent?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time must be in UTC. The end time cannot be earlier than the start time, and the query time span cannot exceed 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-04T02:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Maximum value: 2147483647. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 30 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The role filter for logs. A value of user indicates a user, assistant indicates an assistant, and toolResult indicates a tool execution result.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The session ID. This parameter must be specified together with the Agent parameter, or neither is specified.
   * 
   * @example
   * session-123
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the YYYY-MM-DDTHH:mmZ format. The time must be in UTC. The start time cannot be later than the current time, and the interval between the start time and the current time cannot exceed 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-04T01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The log type. This operation only queries session logs.
   * 
   * @example
   * session
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      applicationId: 'ApplicationId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      role: 'Role',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      applicationId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      role: 'string',
      sessionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

