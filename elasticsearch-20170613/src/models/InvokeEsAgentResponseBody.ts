// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeEsAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates a successful call. For non-200 values, the message field contains the error description.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The JSON-RPC 2.0 response body. data.result contains the actual return content of the called ACP method. data.id is the id passed in the request. data.jsonrpc is fixed to 2.0. data.timestamp is the UNIX timestamp in milliseconds when the response was generated.
   */
  data?: { [key: string]: string };
  /**
   * @remarks
   * The error description. The value is null when the call is successful. A specific error message is returned when the call fails.
   * 
   * @example
   * Agent subscription is inactive or expired
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1df6d614-96db-41bd-b8b6-ab061a1724ca
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

