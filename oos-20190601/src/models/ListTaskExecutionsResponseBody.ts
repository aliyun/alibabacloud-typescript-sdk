// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskExecutionsResponseBodyTaskExecutions } from "./ListTaskExecutionsResponseBodyTaskExecutions";


export class ListTaskExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task executions.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * CDABABABAB-FC28-4D9C-8FB5-68DC6F0486FC
   */
  requestId?: string;
  /**
   * @remarks
   * The execution ID of the child node.
   */
  taskExecutions?: ListTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskExecutions: { 'type': 'array', 'itemType': ListTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  validate() {
    if(Array.isArray(this.taskExecutions)) {
      $dara.Model.validateArray(this.taskExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

