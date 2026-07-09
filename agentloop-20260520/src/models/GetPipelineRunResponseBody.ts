// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the pipeline belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpaceName?: string;
  /**
   * @remarks
   * The current retry count.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The semantic error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The finish time, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:10.000Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The start of the data window, in UNIX seconds.
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
   * The next retry time, in ISO 8601 UTC format.
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
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The inline run results. This field is returned only when output.inline is set to true at trigger time.
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
   * The execution start time, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:01.000Z
   */
  startTime?: string;
  /**
   * @remarks
   * The run statistics, including processedRows (number of processed rows), processedBytes (number of processed bytes), outputRows (number of output rows), outputBytes (number of output bytes), elapsedMs (elapsed time in milliseconds), cpuSec (CPU seconds), cpuCores (number of CPU cores), and tokenCount (number of tokens consumed).
   */
  stats?: { [key: string]: any };
  /**
   * @remarks
   * The run status. Valid values:
   * - Pending
   * - Running
   * - Succeeded
   * - Failed
   * - Cancelled
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The end of the data window, in UNIX seconds.
   * 
   * @example
   * 1735747200
   */
  toTime?: number;
  /**
   * @remarks
   * The trigger time, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:00.000Z
   */
  triggerTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduled
   * - Manual
   * - RunOnce
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

