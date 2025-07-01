// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowSubTasksResponseBodyDataFlowSubTask } from "./DescribeDataFlowSubTasksResponseBodyDataFlowSubTask";


export class DescribeDataFlowSubTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about data streaming tasks.
   */
  dataFlowSubTask?: DescribeDataFlowSubTasksResponseBodyDataFlowSubTask;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * pUJaUwAAAABhdGUyNTk1MQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataFlowSubTask: 'DataFlowSubTask',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlowSubTask: DescribeDataFlowSubTasksResponseBodyDataFlowSubTask,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataFlowSubTask && typeof (this.dataFlowSubTask as any).validate === 'function') {
      (this.dataFlowSubTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

