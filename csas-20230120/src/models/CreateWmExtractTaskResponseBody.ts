// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmExtractTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task ID. You can use task IDs to query task results.
   * 
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the watermark extraction task.
   */
  data?: CreateWmExtractTaskResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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
      data: CreateWmExtractTaskResponseBodyData,
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

