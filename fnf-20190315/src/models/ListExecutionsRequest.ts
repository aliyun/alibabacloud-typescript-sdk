// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name prefix of the execution.
   * 
   * @example
   * run
   */
  executionNamePrefix?: string;
  /**
   * @remarks
   * The name of the flow. The name must be unique within the region and cannot be modified after the flow is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The number of executions that you want to query. Valid values: 1-99. Default value: 60.
   * 
   * @example
   * 1
   */
  limit?: number;
  mapRunName?: string;
  metadataOnly?: boolean;
  /**
   * @remarks
   * The name of the execution to start the query. You can obtain the value from the response data. You do not need to specify this parameter for the first request.
   * 
   * @example
   * flow_xxx
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  qualifier?: string;
  /**
   * @remarks
   * The beginning of the time range to query executions. Specify the value in the UTC RFC3339 format.
   * 
   * @example
   * 2020-12-02T02:39:20.402Z
   */
  startedTimeBegin?: string;
  /**
   * @remarks
   * The end of the time range to query executions. Specify the value in the UTC RFC3339 format.
   * 
   * @example
   * 2020-12-02T02:23:54.817Z
   */
  startedTimeEnd?: string;
  /**
   * @remarks
   * The status of the execution that you want to filter. Valid values:
   * 
   * *   **Starting**
   * *   **Running**
   * *   **Stopped**
   * *   **Succeeded**
   * *   **Failed**
   * *   **TimedOut**
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionNamePrefix: 'ExecutionNamePrefix',
      flowName: 'FlowName',
      limit: 'Limit',
      mapRunName: 'MapRunName',
      metadataOnly: 'MetadataOnly',
      nextToken: 'NextToken',
      qualifier: 'Qualifier',
      startedTimeBegin: 'StartedTimeBegin',
      startedTimeEnd: 'StartedTimeEnd',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionNamePrefix: 'string',
      flowName: 'string',
      limit: 'number',
      mapRunName: 'string',
      metadataOnly: 'boolean',
      nextToken: 'string',
      qualifier: 'string',
      startedTimeBegin: 'string',
      startedTimeEnd: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

