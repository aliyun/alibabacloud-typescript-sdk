// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DialogueResponseBodyDataControlParamsList extends $dara.Model {
  /**
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

export class DialogueResponseBodyData extends $dara.Model {
  answer?: string;
  controlParamsList?: DialogueResponseBodyDataControlParamsList[];
  /**
   * @example
   * 1752283603978
   */
  endTime?: number;
  /**
   * @example
   * 07d72ea0-6e38-48d4-8371-14deaaba996f
   */
  sessionId?: string;
  /**
   * @example
   * 1774858849987
   */
  startTime?: number;
  /**
   * @example
   * true
   */
  streamEnd?: boolean;
  /**
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
      controlParamsList: { 'type': 'array', 'itemType': DialogueResponseBodyDataControlParamsList },
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

export class DialogueResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: DialogueResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 9DB8BA95-4513-54B9-9C67-A28909CFB4AD
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
      data: DialogueResponseBodyData,
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

