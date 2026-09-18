// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of pipelines to return. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the nextToken value returned in the previous response to retrieve the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters pipelines by name using exact match. If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * Filters pipelines by schedule status. If this parameter is not specified, no filtering is applied. Valid values:
   * - None: No schedule.
   * - Active: Active.
   * - Paused: Paused.
   * - Terminated: Terminated.
   * 
   * @example
   * Active
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * Filters pipelines by schedule type. If this parameter is not specified, no filtering is applied. Valid values:
   * - RunOnce: One-time execution.
   * - Scheduled: Periodic scheduling.
   * 
   * @example
   * RunOnce
   */
  scheduleType?: string;
  /**
   * @remarks
   * Filters pipelines by the exact name of the output dataset. Matches standard sinks, conditional branch sinks, and default sinks. If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * my-dataset
   */
  sinkName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
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

