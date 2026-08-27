// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAIAgentResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"choices":[{"delta":{"content":"分析结果..."}}]}
   */
  body?: string;
  headers?: { [key: string]: string };
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: InvokeAIAgentResponseBodyData;
  /**
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

