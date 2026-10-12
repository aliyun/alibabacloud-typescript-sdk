// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAIAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response body of the debug result.
   * 
   * @example
   * {"choices":[{"delta":{"content":"Analysis result..."}}]}
   */
  body?: string;
  /**
   * @remarks
   * The response headers, such as Content-Type: text/event-stream.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The HTTP status code of the debug result.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      headers: 'headers',
      httpCode: 'httpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      httpCode: 'number',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAIAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: InvokeAIAgentResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A60EE5CA-1294-532A-9775-8D2FD1C6EFBF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InvokeAIAgentResponseBodyData,
      message: 'string',
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

