// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorCheckResponseBodyData extends $dara.Model {
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 12345678
   */
  taskId?: number;
  /**
   * @example
   * manual-1be17af1121b4974822e69daee4f2481
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
      taskId: 'number',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckResponseBody extends $dara.Model {
  data?: RefreshAdvisorCheckResponseBodyData;
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
      data: RefreshAdvisorCheckResponseBodyData,
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

