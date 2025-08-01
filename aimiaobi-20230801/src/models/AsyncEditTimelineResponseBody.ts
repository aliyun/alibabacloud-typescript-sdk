// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncEditTimelineResponseBodyData extends $dara.Model {
  message?: string;
  /**
   * @example
   * 51e4efd1908242eb93ca9bbb7fc4359d
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class AsyncEditTimelineResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: AsyncEditTimelineResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AsyncEditTimelineResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

