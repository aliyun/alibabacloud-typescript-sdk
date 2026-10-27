// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BeginSessionResponseBodyDataControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The control parameter type. Valid values:
   * >- HangUp: Hang up.
   * >- Transfer: Transfer.
   * >- GatherDtmf: Gather DTMF.
   * >- Voice: Voice.
   * 
   * @example
   * Voice
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The chatbot reply content.
   * 
   * @example
   * Hello, welcome to STO Express. How can I help you?
   */
  answer?: string;
  /**
   * @remarks
   * The list of control parameters.
   */
  controlParamsList?: BeginSessionResponseBodyDataControlParamsList[];
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1752283603978
   */
  endTime?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1774858849987
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether the streaming response has ended.
   * 
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
   * @remarks
   * The turn ID of the conversation.
   * 
   * @example
   * 1
   */
  streamId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      controlParamsList: 'ControlParamsList',
      endTime: 'EndTime',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      streamEnd: 'StreamEnd',
      streamId: 'StreamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      controlParamsList: { 'type': 'array', 'itemType': BeginSessionResponseBodyDataControlParamsList },
      endTime: 'number',
      sessionId: 'string',
      startTime: 'number',
      streamEnd: 'boolean',
      streamId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.controlParamsList)) {
      $dara.Model.validateArray(this.controlParamsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BeginSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: BeginSessionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the HTTP request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The HTTP response message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The POP request ID.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BeginSessionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

