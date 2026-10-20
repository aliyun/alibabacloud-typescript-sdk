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
   * The pagination token. Pass the nextToken value from the previous response to retrieve the next page of results. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the pipeline. Supports exact matching. If not specified, the results are not filtered by pipeline name.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The schedule status. Valid values: None (no schedule), Active (active), Paused (paused), and Terminated (terminated). If not specified, the results are not filtered by schedule status.
   * 
   * @example
   * Active
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * The schedule type. Valid values: RunOnce (single execution), Scheduled (periodic scheduling), and Continuous (continuous execution driven by trace source signals). If not specified, the results are not filtered by schedule type.
   * 
   * @example
   * RunOnce
   */
  scheduleType?: string;
  /**
   * @remarks
   * The name of the output dataset. Supports exact matching and applies to standard sinks, conditional branch sinks, and default sinks. If not specified, the results are not filtered by sink name.
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

