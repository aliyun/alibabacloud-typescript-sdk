// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Start time of the call time range (inclusive)
   * 
   * @example
   * 1646496000000
   */
  actualTimeGte?: number;
  /**
   * @remarks
   * End time of the call time range (inclusive)
   * 
   * @example
   * 1646582400000
   */
  actualTimeLte?: number;
  /**
   * @remarks
   * Minimum call duration
   * 
   * @example
   * 10
   */
  callDurationGte?: number;
  /**
   * @remarks
   * Maximum call duration
   * 
   * @example
   * 20
   */
  callDurationLte?: number;
  /**
   * @remarks
   * Called number
   * 
   * @example
   * 11111111111
   */
  calledNumber?: string;
  callingNumber?: string;
  /**
   * @remarks
   * Whether the call was answered
   * 
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @remarks
   * Whether the call ended because the contact rejected it
   * 
   * @example
   * true
   */
  hasHangUpByRejection?: boolean;
  /**
   * @remarks
   * Whether the conversation ended normally
   * 
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1dcb09c5-d5db-4397-bf65-db854463beea
   */
  instanceId?: string;
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * cb731aee-0a5b-4c2b-924c-d9e82eb1d8d7
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 测试_20220217_160147
   */
  jobGroupNameQuery?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 82097dd5-54df-475f-beba-eec8f4b7a3e1
   */
  jobId?: string;
  /**
   * @remarks
   * Job status
   * 
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  /**
   * @remarks
   * Other ID
   * 
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  otherId?: string;
  /**
   * @remarks
   * Page number, starting from 0
   * 
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for the ring duration search.
   * 
   * @example
   * 10
   */
  recordingDurationGte?: number;
  /**
   * @remarks
   * End time of the ring duration search.
   * 
   * @example
   * 20
   */
  recordingDurationLte?: number;
  /**
   * @remarks
   * Scenario name
   * 
   * @example
   * 测试
   */
  scriptNameQuery?: string;
  /**
   * @remarks
   * Sort field
   * 
   * @example
   * actualTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Valid values: asc (ascending), desc (descending)
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * Start time of the task creation time range
   * 
   * @example
   * 1646496000000
   */
  taskCreateTimeGte?: number;
  /**
   * @remarks
   * End time of the task creation time range
   * 
   * @example
   * 1646582400000
   */
  taskCreateTimeLte?: number;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  taskId?: string;
  /**
   * @remarks
   * Call status
   * 
   * @example
   * Succeeded,Failed
   */
  taskStatusStringList?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 82097dd5-54df-475f-beba-eec8f4b7a3e1
   */
  userIdMatch?: string;
  static names(): { [key: string]: string } {
    return {
      actualTimeGte: 'ActualTimeGte',
      actualTimeLte: 'ActualTimeLte',
      callDurationGte: 'CallDurationGte',
      callDurationLte: 'CallDurationLte',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupNameQuery: 'JobGroupNameQuery',
      jobId: 'JobId',
      jobStatusStringList: 'JobStatusStringList',
      otherId: 'OtherId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordingDurationGte: 'RecordingDurationGte',
      recordingDurationLte: 'RecordingDurationLte',
      scriptNameQuery: 'ScriptNameQuery',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      taskCreateTimeGte: 'TaskCreateTimeGte',
      taskCreateTimeLte: 'TaskCreateTimeLte',
      taskId: 'TaskId',
      taskStatusStringList: 'TaskStatusStringList',
      userIdMatch: 'UserIdMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTimeGte: 'number',
      actualTimeLte: 'number',
      callDurationGte: 'number',
      callDurationLte: 'number',
      calledNumber: 'string',
      callingNumber: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupNameQuery: 'string',
      jobId: 'string',
      jobStatusStringList: 'string',
      otherId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordingDurationGte: 'number',
      recordingDurationLte: 'number',
      scriptNameQuery: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      taskCreateTimeGte: 'number',
      taskCreateTimeLte: 'number',
      taskId: 'string',
      taskStatusStringList: 'string',
      userIdMatch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

