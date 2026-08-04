// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitWorkspaceSystemMcpServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether all system MCP services are initialized successfully. Returns true even when no system MCP services are available.
   * 
   * @example
   * true
   */
  data?: any;
  /**
   * @remarks
   * The return code. The value success is returned for successful requests. An error code is returned for failed requests.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when a system-level request failure occurs.
   * 
   * @example
   * Failed to initialize workspace system MCP servers
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate this call.
   * 
   * @example
   * 550***544
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. Valid values:
   * - true: Succeeded.
   * - false: Failed.
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

