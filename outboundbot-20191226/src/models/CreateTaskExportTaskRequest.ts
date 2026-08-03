// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The start time (inclusive) for searching by call time.
   * 
   * @example
   * 1646496000000
   */
  actualTimeGte?: number;
  /**
   * @remarks
   * The end time (inclusive) for searching by call time.
   * 
   * @example
   * 1646582400000
   */
  actualTimeLte?: number;
  /**
   * @remarks
   * The minimum call duration for the search.
   * 
   * @example
   * 10
   */
  callDurationGte?: number;
  /**
   * @remarks
   * The maximum call duration for the search.
   * 
   * @example
   * 20
   */
  callDurationLte?: number;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 11111111111
   */
  calledNumber?: string;
  callingNumber?: string;
  /**
   * @remarks
   * Specifies whether the call was answered.
   * 
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @remarks
   * Specifies whether the call was hung up due to rejection.
   * 
   * @example
   * true
   */
  hasHangUpByRejection?: boolean;
  /**
   * @remarks
   * Specifies whether the conversation was completed.
   * 
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1dcb09c5-d5db-4397-bf65-db854463beea
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * cb731aee-0a5b-4c2b-924c-d9e82eb1d8d7
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 测试_20220217_160147
   */
  jobGroupNameQuery?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 82097dd5-54df-475f-beba-eec8f4b7a3e1
   */
  jobId?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  /**
   * @remarks
   * The other ID.
   * 
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  otherId?: string;
  /**
   * @remarks
   * The page number. Pages start from 0.
   * 
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The minimum ringing duration for the search.
   * 
   * @example
   * 10
   */
  recordingDurationGte?: number;
  /**
   * @remarks
   * The maximum ringing duration for the search.
   * 
   * @example
   * 20
   */
  recordingDurationLte?: number;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 测试
   */
  scriptNameQuery?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * actualTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - asr: ascending order
   * - desc: descending order
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time for searching by task creation time.
   * 
   * @example
   * 1646496000000
   */
  taskCreateTimeGte?: number;
  /**
   * @remarks
   * The end time for searching by task creation time.
   * 
   * @example
   * 1646582400000
   */
  taskCreateTimeLte?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  taskId?: string;
  /**
   * @remarks
   * The call status.
   * 
   * @example
   * Succeeded,Failed
   */
  taskStatusStringList?: string;
  /**
   * @remarks
   * The user ID.
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

