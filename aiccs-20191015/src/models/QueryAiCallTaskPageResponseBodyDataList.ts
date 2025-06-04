// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiCallTaskPageResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 11213132123123*****
   */
  agentId?: string;
  /**
   * @example
   * 示例值示例值
   */
  agentName?: string;
  /**
   * @example
   * 72
   */
  callingCount?: number;
  /**
   * @example
   * 70%
   */
  completeRate?: number;
  /**
   * @example
   * 10
   */
  concurrentCount?: number;
  /**
   * @example
   * 1748932499000
   */
  createTime?: number;
  /**
   * @example
   * 22
   */
  dayCallCount?: number;
  /**
   * @example
   * 74.14%
   */
  dayConnectRate?: number;
  /**
   * @example
   * 400
   */
  dayImportCount?: number;
  /**
   * @example
   * 61
   */
  failedCount?: number;
  /**
   * @example
   * 95.89%
   */
  historyConnectRate?: number;
  /**
   * @example
   * 1748932499000
   */
  realStartTime?: number;
  /**
   * @example
   * 示例值示例值
   */
  startFailedReason?: string;
  /**
   * @example
   * 1748932499000
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 36
   */
  succeedCount?: number;
  /**
   * @example
   * 11121221121*****
   */
  taskId?: string;
  /**
   * @example
   * 示例值示例值
   */
  taskName?: string;
  /**
   * @example
   * 58
   */
  totalCallCount?: number;
  /**
   * @example
   * 71
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      callingCount: 'CallingCount',
      completeRate: 'CompleteRate',
      concurrentCount: 'ConcurrentCount',
      createTime: 'CreateTime',
      dayCallCount: 'DayCallCount',
      dayConnectRate: 'DayConnectRate',
      dayImportCount: 'DayImportCount',
      failedCount: 'FailedCount',
      historyConnectRate: 'HistoryConnectRate',
      realStartTime: 'RealStartTime',
      startFailedReason: 'StartFailedReason',
      startTime: 'StartTime',
      status: 'Status',
      succeedCount: 'SucceedCount',
      taskId: 'TaskId',
      taskName: 'TaskName',
      totalCallCount: 'TotalCallCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      callingCount: 'number',
      completeRate: 'number',
      concurrentCount: 'number',
      createTime: 'number',
      dayCallCount: 'number',
      dayConnectRate: 'number',
      dayImportCount: 'number',
      failedCount: 'number',
      historyConnectRate: 'number',
      realStartTime: 'number',
      startFailedReason: 'string',
      startTime: 'number',
      status: 'number',
      succeedCount: 'number',
      taskId: 'string',
      taskName: 'string',
      totalCallCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

