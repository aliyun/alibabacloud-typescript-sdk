// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluatorsResponseBodyEvaluators extends $dara.Model {
  /**
   * @remarks
   * The list of annotations.
   * 
   * @example
   * ["__en"]
   */
  annotations?: string[];
  /**
   * @remarks
   * The creation time, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The evaluator description.
   * 
   * @example
   * 判断 Agent 是否完成用户任务
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 链路任务完成度
   */
  displayName?: string;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * 1.0.0
   */
  latestVersion?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * agent_task_completion
   */
  metricName?: string;
  /**
   * @remarks
   * The evaluator name.
   * 
   * @example
   * trace_task_completion
   */
  name?: string;
  /**
   * @remarks
   * The evaluator properties.
   * 
   * @example
   * {"agentEvaluatorMode":"raw_prompt"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The evaluator type.
   * 
   * @example
   * AGENT
   */
  type?: string;
  /**
   * @remarks
   * The update time, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816600
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      createdAt: 'createdAt',
      description: 'description',
      displayName: 'displayName',
      latestVersion: 'latestVersion',
      metricName: 'metricName',
      name: 'name',
      properties: 'properties',
      type: 'type',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': 'string' },
      createdAt: 'number',
      description: 'string',
      displayName: 'string',
      latestVersion: 'string',
      metricName: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of evaluator summaries.
   * 
   * @example
   * [{"name":"trace_task_completion","type":"AGENT","latestVersion":"1.0.0"}]
   */
  evaluators?: ListEvaluatorsResponseBodyEvaluators[];
  /**
   * @remarks
   * The number of entries per page used in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJsYXN0SWQiOjEzM30=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of evaluators that match the filter conditions.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      evaluators: 'evaluators',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluators: { 'type': 'array', 'itemType': ListEvaluatorsResponseBodyEvaluators },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluators)) {
      $dara.Model.validateArray(this.evaluators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

