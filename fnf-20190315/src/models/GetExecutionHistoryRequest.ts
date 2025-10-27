// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecutionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  executionName?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The number of workflows that you want to query. Valid values: 1-999. Default value: 60.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * The name of the event to start the query. You can obtain the value from the response data.
   * 
   * @example
   * flow_xxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: 'string',
      flowName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

