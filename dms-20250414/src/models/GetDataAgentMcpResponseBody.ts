// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentMcpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MCP Server details.
   * 
   * @example
   * {"uuid":"	44lg***z65","name":"mcp","workspaceUuid":"	atvx***xmz","region":"cn-hangzhou","netType":"public","transportType":"sse","state":"ready","enable":true}
   */
  data?: any;
  /**
   * @remarks
   * The return code. The value success is returned if the request was successful. An error code is returned if the request failed.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that describes the reason for the failure.
   * 
   * @example
   * Resource Not exist,Mcp Server you provide is not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate this call.
   * 
   * @example
   * 550e***000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

