// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExecutionStatusResponseBodyResourceExecutionStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * exec-6be6d6ff805349d9ac13
   */
  executionId?: string;
  /**
   * @remarks
   * The time when the execution started running.
   * 
   * @example
   * 2020-11-13T08:48:34Z
   */
  executionTime?: string;
  /**
   * @remarks
   * The output of the template.
   * 
   * @example
   * { 				"commandOutput": "hello\\n" 			}
   */
  outputs?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-bp1e1bxxxxxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionTime: 'ExecutionTime',
      outputs: 'Outputs',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionTime: 'string',
      outputs: 'string',
      resourceId: 'string',
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

export class ListResourceExecutionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ED571CBD-9F96-419D-B919-CF340BBCA157
   */
  requestId?: string;
  /**
   * @remarks
   * The execution information of the resource.
   */
  resourceExecutionStatus?: ListResourceExecutionStatusResponseBodyResourceExecutionStatus[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceExecutionStatus: 'ResourceExecutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceExecutionStatus: { 'type': 'array', 'itemType': ListResourceExecutionStatusResponseBodyResourceExecutionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.resourceExecutionStatus)) {
      $dara.Model.validateArray(this.resourceExecutionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

