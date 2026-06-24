// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdentifyTaskStatusResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The running status of the task.
   * 
   * - 0: Not started
   * 
   * - 1: Running
   * 
   * - 2: Paused
   * 
   * - 3: Stopped
   * 
   * - 200: Completed
   * 
   * @example
   * 200
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdentifyTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the identification task.
   */
  content?: DescribeIdentifyTaskStatusResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71064826-726F-4ADA-B879-05D8055476FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeIdentifyTaskStatusResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

