// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatusByIdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 95906135
   */
  taskId?: number;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      taskStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatusByIdResponseBody extends $dara.Model {
  data?: GetTaskStatusByIdResponseBodyData;
  /**
   * @example
   * 566331F9-5AB3-550F-B745-A730331F97A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTaskStatusByIdResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

