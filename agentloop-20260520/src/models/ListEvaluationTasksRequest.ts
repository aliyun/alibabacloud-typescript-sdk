// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The filter condition for the task source. If not specified, tasks from the default source are queried.
   * 
   * @example
   * default
   */
  channel?: string;
  /**
   * @remarks
   * The data source type of the evaluation object. Use trace for trace evaluation.
   * 
   * @example
   * trace
   */
  dataType?: string;
  /**
   * @remarks
   * The number of entries to return per page. The default value is 20, and the maximum value is 100.
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
   * The mode of the evaluation task. If not specified, the backend defaults to batch.
   * 
   * @example
   * batch
   */
  taskMode?: string;
  /**
   * @remarks
   * The fuzzy search condition for the task name.
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

