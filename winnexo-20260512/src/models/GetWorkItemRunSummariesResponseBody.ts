// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemRunSummariesResponseBodyItemsRunSummaryTools extends $dara.Model {
  /**
   * @remarks
   * The name of the tool.
   * 
   * @example
   * Sales Analysis Assistant
   */
  name?: string;
  /**
   * @remarks
   * The tool type, such as SKILL or MCP.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetWorkItemRunSummariesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the node attempt.
   * 
   * @example
   * attempt_1
   */
  attemptId?: string;
  /**
   * @remarks
   * The sequence number of the node attempt, starting from 1.
   * 
   * @example
   * 1
   */
  attemptSeq?: number;
  /**
   * @remarks
   * The ID of the executor.
   * 
   * @example
   * agent_1001
   */
  executorId?: string;
  /**
   * @remarks
   * The name of the executor.
   * 
   * @example
   * Sales Analysis Assistant
   */
  executorName?: string;
  /**
   * @remarks
   * The executor type, such as AGENT or HUMAN.
   * 
   * @example
   * AGENT
   */
  executorType?: string;
  /**
   * @remarks
   * The end time of the node, in ISO 8601 format.
   * 
   * @example
   * 2026-11-05T08:05:00Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * query.amount
   */
  nodeKey?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Query sales amount
   */
  nodeName?: string;
  /**
   * @remarks
   * The node status, such as COMPLETED or FAILED.
   * 
   * @example
   * COMPLETED
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The ID of the associated physical plan.
   * 
   * @example
   * plan_v3
   */
  planId?: string;
  /**
   * @remarks
   * The execution result of the node, as a JSON object.
   * 
   * @example
   * {"rows":3}
   */
  result?: any;
  /**
   * @remarks
   * The content of the execution summary. This field is empty if the summary is not generated.
   * 
   * @example
   * Completed the sales amount query, returning a total of 3 rows of data
   */
  runSummary?: any;
  /**
   * @remarks
   * The reason for the execution summary failure. This field is empty if the generation is successful.
   * 
   * @example
   * Model invocation timed out
   */
  runSummaryError?: string;
  /**
   * @remarks
   * The generation time of the execution summary, in ISO 8601 format.
   * 
   * @example
   * 2026-11-05T08:06:00Z
   */
  runSummaryGeneratedAt?: string;
  /**
   * @remarks
   * The list of data sources referenced in the execution summary.
   * 
   * @example
   * [{"name":"report.md"}]
   */
  runSummarySources?: any[];
  /**
   * @remarks
   * The generation status of the execution summary, such as COMPLETED, FAILED, or PROCESSING.
   * 
   * @example
   * COMPLETED
   */
  runSummaryStatus?: string;
  /**
   * @remarks
   * The list of tools used in the execution summary.
   * 
   * @example
   * [{"type":"SKILL","name":"sql_query"}]
   */
  runSummaryTools?: GetWorkItemRunSummariesResponseBodyItemsRunSummaryTools[];
  /**
   * @remarks
   * The start time of the node, in ISO 8601 format.
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The sequence number of the node turn, starting from 1.
   * 
   * @example
   * 1
   */
  turnSeq?: number;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'attemptId',
      attemptSeq: 'attemptSeq',
      executorId: 'executorId',
      executorName: 'executorName',
      executorType: 'executorType',
      finishedAt: 'finishedAt',
      nodeKey: 'nodeKey',
      nodeName: 'nodeName',
      nodeStatus: 'nodeStatus',
      planId: 'planId',
      result: 'result',
      runSummary: 'runSummary',
      runSummaryError: 'runSummaryError',
      runSummaryGeneratedAt: 'runSummaryGeneratedAt',
      runSummarySources: 'runSummarySources',
      runSummaryStatus: 'runSummaryStatus',
      runSummaryTools: 'runSummaryTools',
      startedAt: 'startedAt',
      turnSeq: 'turnSeq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      attemptSeq: 'number',
      executorId: 'string',
      executorName: 'string',
      executorType: 'string',
      finishedAt: 'string',
      nodeKey: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      planId: 'string',
      result: 'any',
      runSummary: 'any',
      runSummaryError: 'string',
      runSummaryGeneratedAt: 'string',
      runSummarySources: { 'type': 'array', 'itemType': 'any' },
      runSummaryStatus: 'string',
      runSummaryTools: { 'type': 'array', 'itemType': GetWorkItemRunSummariesResponseBodyItemsRunSummaryTools },
      startedAt: 'string',
      turnSeq: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.runSummarySources)) {
      $dara.Model.validateArray(this.runSummarySources);
    }
    if(Array.isArray(this.runSummaryTools)) {
      $dara.Model.validateArray(this.runSummaryTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkItemRunSummariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The common business status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The execution summaries generated for the current plan and current turn. Previous summaries are not returned until new summaries are generated for affected nodes that are re-run.
   * 
   * @example
   * [{"attemptId":"attempt_1","planId":"plan_v3","nodeKey":"query.amount","nodeStatus":"COMPLETED"}]
   */
  items?: GetWorkItemRunSummariesResponseBodyItems[];
  /**
   * @remarks
   * The common error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': GetWorkItemRunSummariesResponseBodyItems },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

