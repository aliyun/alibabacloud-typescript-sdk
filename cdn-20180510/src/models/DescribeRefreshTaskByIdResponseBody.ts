// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRefreshTaskByIdResponseBodyTasks } from "./DescribeRefreshTaskByIdResponseBodyTasks";


export class DescribeRefreshTaskByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0C2EF95-B1EC-4C93-855E-2059A7DA2B7B
   */
  requestId?: string;
  /**
   * @remarks
   * Details about tasks.
   */
  tasks?: DescribeRefreshTaskByIdResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeRefreshTaskByIdResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

