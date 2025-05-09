// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDownloadTaskResponseBodyTasks } from "./DescribeDownloadTaskResponseBodyTasks";


export class DescribeDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3F2BED13-F3D0-5984-80D6-D5F298CFEA88
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: DescribeDownloadTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 132
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
      tasks: { 'type': 'array', 'itemType': DescribeDownloadTaskResponseBodyTasks },
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

