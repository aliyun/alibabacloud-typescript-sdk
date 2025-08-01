// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluationConfig } from "./EvaluationConfig";
import { ModelConfig } from "./ModelConfig";


export class GetOnlineEvalTaskResponseBodyTaskFilters extends $dara.Model {
  /**
   * @remarks
   * Key of the filter condition.
   * 
   * @example
   * ServiceId
   * ServiceName
   * Input
   * Output
   * Status
   * TraceType
   * SpanType
   * TraceName
   * SpanName
   */
  key?: string;
  /**
   * @remarks
   * Filter condition match operator.
   * 
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @remarks
   * Value of the filter condition.
   * 
   * @example
   * foo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineEvalTaskResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account (primary account) of the task creator.
   * 
   * @example
   * 1195531608511111
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The name of the user application targeted by this task.
   * 
   * @example
   * my-llm-app
   */
  appName?: string;
  /**
   * @remarks
   * Task description information
   * 
   * @example
   * 这个任务做了这些事。
   */
  description?: string;
  /**
   * @remarks
   * Deprecated. Will be removed.
   * 
   * @example
   * Deprecated. Will be removed.
   */
  evalResults?: string;
  /**
   * @remarks
   * Extract specific path values from JSON-formatted trace data as input for the evaluation operation. These JSON paths are defined within this EvaluationConfig structure.
   */
  evaluationConfig?: EvaluationConfig;
  /**
   * @remarks
   * The evaluation task needs to search for a certain amount of trace data generated by the user application as input data for the evaluation operation. This is a list that defines the search filter conditions.
   */
  filters?: GetOnlineEvalTaskResponseBodyTaskFilters[];
  /**
   * @remarks
   * UTC creation time of the task.
   * 
   * @example
   * 2024-07-31 08:30:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * UTC end time of the trace data.
   * 
   * @example
   * 2024-08-10 13:20:00
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * UTC upper bound of the last sampling window
   * 
   * @example
   * 2024-08-10 13:14:00
   */
  gmtLastSamplingWindowEndTime?: string;
  /**
   * @remarks
   * UTC lower bound of the last sampling window.
   * 
   * @example
   * 2024-08-10 13:11:00
   */
  gmtLastSamplingWindowStartTime?: string;
  /**
   * @remarks
   * UTC start time of the trace data.
   * 
   * @example
   * 2024-08-02
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 0839a02d-aa24-4174-90bb-7a773885934d
   */
  id?: string;
  /**
   * @remarks
   * Access configuration structure for the large model used internally by the evaluation task.
   */
  modelConfig?: ModelConfig;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * my-eval-task-1
   */
  name?: string;
  /**
   * @remarks
   * Number of evaluation records
   * 
   * @example
   * 999
   */
  recordCount?: number;
  /**
   * @remarks
   * The evaluation task needs to search for a certain amount of trace data generated by the user application as input data for the evaluation operation. This defines the width of the time window for each search of input data.
   * 
   * @example
   * 3
   */
  samplingFrequencyMinutes?: number;
  /**
   * @remarks
   * The percentage of the data found within a time window that is actually used as input for the evaluation task. For example, 100 means all the found data is used as input, 20 means 20% of the found data is randomly selected as input.
   * 
   * @example
   * 70
   */
  samplingRatio?: number;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * CREATED
   * RUNNING
   * FINISHED
   * USER_CANCELED
   */
  status?: string;
  /**
   * @remarks
   * The Alibaba Cloud sub-account of the task creator.
   * 
   * @example
   * 222222222222222222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      appName: 'AppName',
      description: 'Description',
      evalResults: 'EvalResults',
      evaluationConfig: 'EvaluationConfig',
      filters: 'Filters',
      gmtCreateTime: 'GmtCreateTime',
      gmtEndTime: 'GmtEndTime',
      gmtLastSamplingWindowEndTime: 'GmtLastSamplingWindowEndTime',
      gmtLastSamplingWindowStartTime: 'GmtLastSamplingWindowStartTime',
      gmtStartTime: 'GmtStartTime',
      id: 'Id',
      modelConfig: 'ModelConfig',
      name: 'Name',
      recordCount: 'RecordCount',
      samplingFrequencyMinutes: 'SamplingFrequencyMinutes',
      samplingRatio: 'SamplingRatio',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      appName: 'string',
      description: 'string',
      evalResults: 'string',
      evaluationConfig: EvaluationConfig,
      filters: { 'type': 'array', 'itemType': GetOnlineEvalTaskResponseBodyTaskFilters },
      gmtCreateTime: 'string',
      gmtEndTime: 'string',
      gmtLastSamplingWindowEndTime: 'string',
      gmtLastSamplingWindowStartTime: 'string',
      gmtStartTime: 'string',
      id: 'string',
      modelConfig: ModelConfig,
      name: 'string',
      recordCount: 'number',
      samplingFrequencyMinutes: 'number',
      samplingRatio: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Internal error code. Set only when the response is in error.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * Response error message. Set only when the response is in error.
   * 
   * @example
   * task id is empty
   */
  message?: string;
  /**
   * @remarks
   * POP request ID
   * 
   * @example
   * 6F352A02-9C0D-54A7-B57C-663CF71D5714
   */
  requestId?: string;
  /**
   * @remarks
   * Task information
   */
  task?: GetOnlineEvalTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      task: GetOnlineEvalTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

