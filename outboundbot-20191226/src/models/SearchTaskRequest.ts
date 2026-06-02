// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTaskRequest extends $dara.Model {
  /**
   * @example
   * 1646582400000
   */
  actualTimeGte?: number;
  /**
   * @example
   * 1643126399000
   */
  actualTimeLte?: number;
  /**
   * @example
   * 12341155
   */
  callDurationGte?: number;
  /**
   * @example
   * 12341155
   */
  callDurationLte?: number;
  /**
   * @example
   * 15126426342
   */
  calledNumber?: string;
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d481cebe-0bb6-4d13-9649-42ce5074fb75
   */
  instanceId?: string;
  /**
   * @example
   * 3a30ae7c-27b2-4305-9444-7185ced9d51f
   */
  jobGroupId?: string;
  jobGroupNameQuery?: string;
  /**
   * @example
   * 11994321-e6bc-47bb-8b1c-8eef8f2f768b
   */
  jobId?: string;
  /**
   * @example
   * Succeeded
   */
  jobStatusStringList?: string;
  labelsJson?: string[];
  /**
   * @example
   * AVD-2021-39685
   */
  otherId?: string;
  /**
   * @example
   * 2
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
   * 60
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
   * 1646792941
   */
  taskCreateTimeGte?: number;
  /**
   * @example
   * 1646792941
   */
  taskCreateTimeLte?: number;
  /**
   * @example
   * 744b27f3-437f-4a8c-a181-f668e492fd24
   */
  taskId?: string;
  /**
   * @example
   * Succeeded
   */
  taskStatusStringList?: string;
  /**
   * @example
   * 12341155
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
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupNameQuery: 'JobGroupNameQuery',
      jobId: 'JobId',
      jobStatusStringList: 'JobStatusStringList',
      labelsJson: 'LabelsJson',
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
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupNameQuery: 'string',
      jobId: 'string',
      jobStatusStringList: 'string',
      labelsJson: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.labelsJson)) {
      $dara.Model.validateArray(this.labelsJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

