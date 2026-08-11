// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsByFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Satisfaction Survey
   */
  name?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b54
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      chatbotId: 'ChatbotId',
      name: 'Name',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatbotId: 'string',
      name: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsByFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListScriptsByFlowResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=ob-1234567890
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListScriptsByFlowResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
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

