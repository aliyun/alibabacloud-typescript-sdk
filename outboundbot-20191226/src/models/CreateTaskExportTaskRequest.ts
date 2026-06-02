// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskExportTaskRequest extends $dara.Model {
  /**
   * @example
   * 1646496000000
   */
  actualTimeGte?: number;
  /**
   * @example
   * 1646582400000
   */
  actualTimeLte?: number;
  /**
   * @example
   * 10
   */
  callDurationGte?: number;
  /**
   * @example
   * 20
   */
  callDurationLte?: number;
  /**
   * @example
   * 11111111111
   */
  calledNumber?: string;
  callingNumber?: string;
  /**
   * @example
   * true
   */
  hasAnswered?: boolean;
  /**
   * @example
   * true
   */
  hasHangUpByRejection?: boolean;
  /**
   * @example
   * true
   */
  hasReachedEndOfFlow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1dcb09c5-d5db-4397-bf65-db854463beea
   */
  instanceId?: string;
  /**
   * @example
   * cb731aee-0a5b-4c2b-924c-d9e82eb1d8d7
   */
  jobGroupId?: string;
  jobGroupNameQuery?: string;
  /**
   * @example
   * 82097dd5-54df-475f-beba-eec8f4b7a3e1
   */
  jobId?: string;
  /**
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  /**
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  otherId?: string;
  /**
   * @example
   * 0
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  recordingDurationGte?: number;
  /**
   * @example
   * 20
   */
  recordingDurationLte?: number;
  scriptNameQuery?: string;
  /**
   * @example
   * actualTime
   */
  sortBy?: string;
  /**
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @example
   * 1646496000000
   */
  taskCreateTimeGte?: number;
  /**
   * @example
   * 1646582400000
   */
  taskCreateTimeLte?: number;
  /**
   * @example
   * 64ebe700-91b4-49cb-b457-0b7c0b598a86
   */
  taskId?: string;
  /**
   * @example
   * Succeeded,Failed
   */
  taskStatusStringList?: string;
  /**
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

