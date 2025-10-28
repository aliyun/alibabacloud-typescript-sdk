// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortChangeOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the change process.
   * 
   * @example
   * 4f038ddf-b27b-****-****-88e44375****
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

export class AbortChangeOrderResponseBody extends $dara.Model {
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
   * The change process.
   */
  data?: AbortChangeOrderResponseBodyData;
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
   * 57F146F6-3C94-****-****-A66EF4B9*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * @example
   * 0b59000b15947****55688656d****
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
      data: AbortChangeOrderResponseBodyData,
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

