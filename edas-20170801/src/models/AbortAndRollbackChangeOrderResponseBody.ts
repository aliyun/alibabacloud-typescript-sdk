// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortAndRollbackChangeOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * 4f40e616-cdcd-4250-a018-efd459******
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'ChangeOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortAndRollbackChangeOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the change process.
   */
  data?: AbortAndRollbackChangeOrderResponseBodyData;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 81E0B333-2871-****-****-B8F5FF43****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * @example
   * 210f07bf1640239405712621******
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: AbortAndRollbackChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      traceId: 'string',
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

