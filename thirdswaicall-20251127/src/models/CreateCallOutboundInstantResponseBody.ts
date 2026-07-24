// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCallOutboundInstantResponseBodyData extends $dara.Model {
  /**
   * @example
   * call_123456
   */
  callId?: string;
  /**
   * @example
   * CALLING
   */
  callStatus?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9B19DF17-D5C4-5893-B8FF-4EBAADCDC6A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callStatus: 'CallStatus',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callStatus: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCallOutboundInstantResponseBody extends $dara.Model {
  code?: string;
  data?: CreateCallOutboundInstantResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  timestamp?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCallOutboundInstantResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      timestamp: 'string',
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

