// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The filter condition for the task source. If this parameter is not specified, tasks from the default source are queried.
   * 
   * @example
   * default
   */
  channel?: string;
  /**
   * @remarks
   * The data source type of the evaluation object. Set this parameter to `trace` for trace-based evaluation.
   * 
   * @example
   * trace
   */
  dataType?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page, obtained from the previous response.
   * 
   * @example
   * eyJsYXN0SWQiOjEyMywib2Zmc2V0IjoyMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The filter condition for the evaluation task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The evaluation task mode. If this parameter is not specified, the default value is `batch`.
   * 
   * @example
   * batch
   */
  taskMode?: string;
  /**
   * @remarks
   * The fuzzy match condition for the task name.
   * 
   * @example
   * trace_task_completion_eval
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      channel: 'channel',
      dataType: 'dataType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      taskMode: 'taskMode',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      channel: 'string',
      dataType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      taskMode: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

