// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of pipelines to return in the current request. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Pass the nextToken value from the previous response to retrieve the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the pipeline. Valid values:
   * - PROCESSING: Data processing.
   * - ORCHESTRATION: Orchestration task.
   * Default value: PROCESSING.
   * 
   * @example
   * ORCHESTRATION
   */
  pipelineKind?: string;
  /**
   * @remarks
   * The name of the pipeline for exact match filtering. If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The schedule status of the pipeline. Valid values:
   * - None: No schedule.
   * - Active: Active.
   * - Paused: Paused.
   * - Terminated: Terminated.
   * If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * Active
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * The schedule type of the pipeline. Valid values:
   * - RunOnce: Single execution.
   * - Scheduled: Periodic scheduling.
   * - Continuous: Continuous execution driven by trace source signals.
   * If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * RunOnce
   */
  scheduleType?: string;
  /**
   * @remarks
   * The name of the output dataset for exact match filtering. This matches standard sinks, conditional branch sinks, and default sinks. If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * my-dataset
   */
  sinkName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelineKind: 'pipelineKind',
      pipelineName: 'pipelineName',
      scheduleStatus: 'scheduleStatus',
      scheduleType: 'scheduleType',
      sinkName: 'sinkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pipelineKind: 'string',
      pipelineName: 'string',
      scheduleStatus: 'string',
      scheduleType: 'string',
      sinkName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

