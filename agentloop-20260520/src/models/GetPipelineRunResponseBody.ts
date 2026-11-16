// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * @example
   * my-agent-space
   */
  agentSpaceName?: string;
  /**
   * @remarks
   * The current number of retries.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The semantic error code.
   * 
   * @example
   * ExpressionEvaluationError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to evaluate filter expression in node \\"node-1\\": column \\"score\\" does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The finish time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:10.000Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The start time of the data window, in UNIX seconds.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 3
   */
  maxAttempts?: number;
  /**
   * @remarks
   * The next retry time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:01:00.000Z
   */
  nextRetryTime?: string;
  /**
   * @remarks
   * The name of the pipeline.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The inline run results, which are returned only when output.inline is set to true during triggering.
   * 
   * @example
   * {"outputRows": 100, "summary": "processed 100 rows, 92 matched", "passed": true}
   */
  results?: { [key: string]: any };
  /**
   * @remarks
   * Run Id
   * 
   * @example
   * run-20260101-0001
   */
  runId?: string;
  /**
   * @remarks
   * The execution start time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:01.000Z
   */
  startTime?: string;
  /**
   * @remarks
   * The run statistics, including processedRows (number of processed rows), processedBytes (number of processed bytes), outputRows (number of output rows), outputBytes (number of output bytes), elapsedMs (elapsed time in milliseconds), cpuSec (CPU seconds), cpuCores (number of CPU cores), and tokenCount (number of consumed tokens).
   * 
   * @example
   * {"processedRows":1000,"elapsedMs":2500}
   */
  stats?: { [key: string]: any };
  /**
   * @remarks
   * The status of the run. Valid values: Pending, Running, Succeeded, Failed, and Cancelled.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The end time of the data window, in UNIX seconds.
   * 
   * @example
   * 1735747200
   */
  toTime?: number;
  /**
   * @remarks
   * The trigger time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:00.000Z
   */
  triggerTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values: Scheduled, Manual, and RunOnce.
   * 
   * @example
   * Scheduled
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpaceName: 'agentSpaceName',
      attempt: 'attempt',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      finishTime: 'finishTime',
      fromTime: 'fromTime',
      maxAttempts: 'maxAttempts',
      nextRetryTime: 'nextRetryTime',
      pipelineName: 'pipelineName',
      requestId: 'requestId',
      results: 'results',
      runId: 'runId',
      startTime: 'startTime',
      stats: 'stats',
      status: 'status',
      toTime: 'toTime',
      triggerTime: 'triggerTime',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaceName: 'string',
      attempt: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      finishTime: 'string',
      fromTime: 'number',
      maxAttempts: 'number',
      nextRetryTime: 'string',
      pipelineName: 'string',
      requestId: 'string',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runId: 'string',
      startTime: 'string',
      stats: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      toTime: 'number',
      triggerTime: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(this.results) {
      $dara.Model.validateMap(this.results);
    }
    if(this.stats) {
      $dara.Model.validateMap(this.stats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

