// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The type of the log.
   * 
   * @example
   * System
   */
  logType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which you want to query the logs of the execution.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * exec-1234567zxcvb.t0010
   */
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

