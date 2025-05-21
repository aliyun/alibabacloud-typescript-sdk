// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskInfoResponseBodyTaskInfo } from "./DescribeTaskInfoResponseBodyTaskInfo";


export class DescribeTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried task.
   */
  taskInfo?: DescribeTaskInfoResponseBodyTaskInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskInfo: DescribeTaskInfoResponseBodyTaskInfo,
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

