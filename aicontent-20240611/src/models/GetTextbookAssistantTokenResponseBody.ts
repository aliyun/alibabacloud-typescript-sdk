// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextbookAssistantTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * tc_197bf5bb81889cc79eb51ae9b8c0cea3
   */
  authToken?: string;
  /**
   * @example
   * 5400
   */
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      expire: 'expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      expire: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTextbookAssistantTokenResponseBody extends $dara.Model {
  data?: GetTextbookAssistantTokenResponseBodyData;
  /**
   * @example
   * 0
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0A5E9849-A2F0-551D-A7D8-1A8118557BAB
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTextbookAssistantTokenResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

